var blacklist = window.blacklist;
var graylist = window.graylist;
console.log(blacklist);
console.log(graylist);
for (var i = 0; i < blacklist.length; i++) {
	var browser = blacklist[i].name,
	    version = blacklist[i].version,
	    ignoreOlder = blacklist[i].ignoreOlder;
	if (ignoreOlder) {
		if (browser == platform.name && parseFloat(platform.version) == version) {
			if (window.location.href != '/apos-browser-support/old-browser') {
				window.location.href = '/apos-browser-support/old-browser';
			}
		}
	} else {
		if (browser == platform.name && parseFloat(platform.version) <= version) {
			if (window.location.href != '/apos-browser-support/old-browser') {
				window.location.href = '/apos-browser-support/old-browser';
			}
		}
	}
	
}
for (var i = 0; i < graylist.length; i++) {
	var browser = graylist[i].name.toLowerCase(),
		version = graylist[i].version,
		platformName = platform.name.toLowerCase();
	if (browser == platformName && version == parseFloat(platform.version)) {
		$(document).ready(function(){
			$('.graylist-modal-outer').show();
			$('#x-button').click(function(){
				$('.graylist-modal-outer').hide();
			});
		});
	}
}