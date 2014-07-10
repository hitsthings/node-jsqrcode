# jsqrcode-lite

Port of Lazarsoft/jsqrcode that works in node. Simplified.

There is a _different_ `jsqrcode` in NPM that is more hands-on - with each file being turned into a module. 

* requires node-canvas which is very unfriendly on Windows.
* keeps the Array.prototype.remove that Lazar's version adds.

This version instead attempts to touch the original code as little as possible, and exports a wrapping decoder function rather than the Canvas-y stuff.

* Has no dependencies
* Does not modify built-ins

All you can do with this version (currently) is call:

```javascript
var decodeImageData = require('jsqrcode-lite');
decodeImageData({
	width: 2,
	height: 2,
	data: [ //rgba values
	  255, 255, 255, 255, 0, 0, 0, 0,
	  255, 255, 255, 255, 0, 0, 0, 0
	]
}, function myCallback(strFromImageData) {
	console.log(strFromImageData);
});
```

That's all I needed. If you'd like to expose other parts of the code, let me know.

## Getting Started
Install the module with: `npm install jsqrcode-lite`

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Adam Ahmed  
Licensed under the MIT license.
