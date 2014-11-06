module.exports = factory; 

function factory(options, callback) {
	return new Construct (options, callback);
}
function Construct (options, callback) {
	var self = this;

	self._apos = options.apos;
	self._app = options.app;
	var blackList = options.blacklist;
	self._apos.mixinModuleAssets(self, 'browser-support', __dirname, options);
	self._apos.pushGlobalData({blacklist: blackList });
	self.pushAsset ('script', 'platform', {when: 'always'});
	self.pushAsset ('script', 'browserdetect', {when: 'always'});
	self.pushAsset ('stylesheet', 'browser-support', {when: 'always'});
	self.pushAsset ('template', 'oldbrowser', {when: 'always'});

	// self._app.get('/apos/browser-support', function(req, res){
	// 	self.browser = req.query.browser;
	// 	self.version = req.query.version;
	// 	console.log('User has logged on to site with: ' + self.browser + ' ' + self.version);
	// 	if (self.browser = 'Chrome') {self.loader();}
	// });
	
	// self.loader = function(req, callback) {
	// 	console.log(req);
	// 	req.template = self.renderer('oldbrowser');
	// 	return callback(null);
	// }

	if (callback) {
		return process.nextTick(function() {
			return callback(null);
		});
	}
}
factory.Construct = Construct;