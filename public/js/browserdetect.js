apos.on('ready', function() {
	$('.apos-refreshable').css('display', 'none');
	$('.oldbrowser').css('display', 'none');
	console.log(apos.data.blacklist);
	var blacklist = apos.data.blacklist;
	var browserVersion = parseFloat(platform.version);

	//Is there a better way to do this? I don't know one. 
	for (var i = 0; i < blacklist.length; i++) {
		if (platform.name == blacklist[i].name && browserVersion == blacklist[i].version) {
			console.log('Stop');
			//$('.apos-refreshable').css('display', 'none');
			$('oldbrowser').css('display', 'block');
		} else {
			$('body').css('display', 'block');
			//$('.oldbrowser').css('display', 'none');
		}
	}
});