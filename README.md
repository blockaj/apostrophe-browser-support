#apostrophe-browser-support
apostrophe-browser-support accepts a `blacklist` and `graylist` from the user. These lists will be used to either entirely restrict a user from seeing the website or warn them when they log-on that they are using a browser that is not recommended by the website owner. 

In `modules` of `app.js`:
```javascript
'apostrophe-browser-support': {
	blacklist: [
		{ name: 'IE', version: 7, ignoreBelow: true }
	]
},
```


##How to use it
###Blacklisting  
The blacklist is an array of browsers and browser versions that the website owner specifically does not want to see the website. All blacklisted browsers will be served a page telling them to update or install a new browser if they want to view the site. 

In the example below, users with Internet Explorer 7 and older will be blocked from viewing the website:
```javascript
'apostrophe-browser-support': {
	blacklist: [
		{ name: 'IE', version: 7}
	]
}
```
If you *only* want to block Internet Explorer 7:
```javascript
'apostrophe-browser-support': {
	blacklist: [
		{ name: 'IE', version: 7, ignoreOlder: true }
	]
}
```
###Graylisting
The graylist is an array browsers and browser version just like the blacklist. However, when a user logs on to the website with a browser and browser version in the graylist, the website will display a modal warning them that they are using an old browser and they should consider downloading a new one. 

Graylists are also different than blacklists in that they do not display the modal for all browser versions older than the one specified by default. 

In the example below, users with Internet Explorer 9 will see a modal warning them that their browser is old and they should update their browser:
```javascript
'apostrophe-browser-support': {
	graylist: [
		{ name: 'IE', version: 9 }
	]
}
```
If you want to show the modal for Internet Explorer 9 *and* every version older than IE 9:
```javascript
'apostrophe-browser-support': {
	graylist: [
		{ name: 'IE', version: 9, includeOlder: true }
	]
}
```

