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

	fs.writeFileSync(__dirname + '/public/js/blacklist.js', 'window.blacklist = ' + JSON.stringify(blackList) + '; window.graylist = ' + JSON.stringify(graylist) + ';');

	self.pushAsset ('script', 'platform', {when: 'always'});
	self.pushAsset ('script', 'blacklist', {when: 'always'});
	self.pushAsset ('script', 'browserdetect', {when: 'always'});
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
}
factory.Construct = Construct;