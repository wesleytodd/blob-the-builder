# Blob The Builder

A wrapper around the Blob constructor and BlobBuilder API.  Convience for building blobs in the most cross browser way.

To see a real example run the example with `npm run example` and open http://localhost:8080 in your browser.

Usage:

```javascript
var Blob = require('blob-the-builder');

var b = Blob(['IMAGE DATA'], {
	mimeType: 'image/jpeg'
});
```
