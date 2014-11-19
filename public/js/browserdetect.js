var blacklist = window.blacklist;
var graylist = window.graylist;
console.log(blacklist);
for (var i = 0; i < blacklist.length; i++) {
	var browser = blacklist[i].name,
	    version = blacklist[i].version;

	if (browser == platform.name && parseFloat(platform.version) <= version) {
		window.location.href = '/apos/browser-support/old-browser';
		
	}
}
for (var i = 0; i < graylist.length; i++) {
	var browser = graylist[i].name.toLowerCase(),
		version = graylist[i].version,
		platformName = platform.name.toLowerCase();
		
	if (browser == platform.name && version == parseFloat(platform.version)) {
		$(document).ready(function(){
			$('.graylist-modal-outer').show();
			$('#x-button').click(function(){
				$('.graylist-modal-outer').hide();
			});
		});
	}
}