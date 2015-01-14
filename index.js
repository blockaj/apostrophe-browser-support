var fs = require('fs');

module.exports = factory;

function factory(options, callback) {
	return new Construct (options, callback);
}
function Construct (options, callback) {
	var self = this;
	self._apos = options.apos;
	self._app = options.app;
	var blackList = options.blacklist;
	var graylist = options.graylist;
	console.log(require.main.filename);

	self._apos.mixinModuleAssets(self, 'browser-support', __dirname, options);

	//Create a js file with the blacklist and graylist from options and make it available to the client before everything loads
	fs.readFile(__dirname + '/public/js/browserdetect.js', 'utf8', function (err, data){
		fs.writeFileSync(__dirname + '/public/js/browser-support.js', 'var blacklist = ' + JSON.stringify(blackList) + '; var graylist = ' + JSON.stringify(graylist) + ';' + data
		);
		//self.pushAsset ('script', 'blacklist', {when: 'always'});
		self.pushAsset ('script', 'jquery.cookie', {when: 'always'});
		self.pushAsset ('script', 'platform', {when: 'always'});
		//self.pushAsset ('script', 'browserdetect', {when: 'always'});
		self.pushAsset ('script', 'browser-support', { when: 'always'});
		self.pushAsset ('stylesheet', 'modal-style', {when: 'always'});
		self.pushAsset ('stylesheet', 'browser-support', {when: 'always'});
		self.pushAsset ('template', 'modal', {when: 'always'});

		self._app.get('/apos-browser-support/old-browser', function(req, res){
			return res.send(self.render('oldbrowser'));
		});

		if (callback) {
			return process.nextTick(function() {
				return callback(null);
			});
		}
	});
}
factory.Construct = Construct;
