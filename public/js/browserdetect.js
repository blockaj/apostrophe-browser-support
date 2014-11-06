// var req = jQuery.get("/apos/browser-support?browser=" + platform.name + "&version=" + platform.version);
console.log(apos.Data);
var blacklist = apos.data.blacklist;
if (platform.name == blacklist) {
  console.log('You are using a terrible browser!');
}
