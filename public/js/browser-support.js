var blacklist = [{"name":"Chrome","version":41}]; var graylist = [{"name":"Chrome","version":"40","includeOlder":true}];for (var i = 0; i < blacklist.length; i++) {
	var browser = blacklist[i].name.toLowerCase(),
	    version = blacklist[i].version,
	    platformName = platform.name.toLowerCase(),
	    ignoreOlder = blacklist[i].ignoreOlder;

	if (ignoreOlder) {
		if (browser == platform.name && parseFloat(platform.version) == version) {
			if (window.location.href != '/apos-browser-support/old-browser') {
				window.location.href = '/apos-browser-support/old-browser';
			}
		}
	} else {
		if (browser == platformName && parseFloat(platform.version) <= version) {
			if (window.location.href != '/apos-browser-support/old-browser') {
				window.location.href = '/apos-browser-support/old-browser';
			}
		}
	}
}
if (!$.cookie('apostrophe-browser-support')) {
	$.cookie('apostrophe-browser-support', true, { path: '/' });
	for (var i = 0; i < graylist.length; i++) {
		var browser = graylist[i].name.toLowerCase(),
			version = graylist[i].version,
			platformName = platform.name.toLowerCase(),
			includeOlder = graylist[i].includeOlder;

		if (includeOlder) {
			if (browser == platformName && parseFloat(platform.version) <= version) {
				showModal();
			}
		} else {
			if (browser == platformName && version == parseFloat(platform.version)) {
				showModal();
			}	
		}
	}
} 


function showModal() {
	$(document).ready(function(){
		$('.graylist-modal-outer').show();
		$('#x').click(function(){
			$('.graylist-modal-outer').hide();
		});
	});
}