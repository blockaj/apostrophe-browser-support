// var req = jQuery.get("/apos/browser-support?browser=" + platform.name + "&version=" + platform.version);
apos.on('ready', function() {
	console.log(apos.data.blacklist);
	var blacklist = apos.data.blacklist;
	var browserVersion = parseFloat(platform.version);
	for (var i = 0; i < blacklist.length; i++) {
		if (platform.name == blacklist[i].name && browserVersion == blacklist[i].version) {
			console.log('Stop you old fuck!');
		}
	}
});

