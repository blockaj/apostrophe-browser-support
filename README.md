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

In the example below, users with Internet Explorer 7 and older will be blocked from viewing the website. 
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

