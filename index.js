var Blob = module.exports = function(data, opts) {
	try {
		// Try supporting the blob constructor
		return new window.Blob(data, opts);
	} catch(e) {
		// Do we support BlobBuilder?
		var BlobBuilder = Blob.blobBuilderConstructor();

		if (e.name === "InvalidStateError") {
			return new window.Blob([data.buffer], opts);
		}

		if (e.name === 'TypeError' &&  BlobBuilder) {
			var blobBuilder = new BlobBuilder();
			blobBuilder.append(data);
			return blobBuilder.getBlob(opts.type);
		}
	}
};

Blob.blobBuilderConstructor = function() {
	return (
		window.BlobBuilder ||
		window.WebKitBlobBuilder ||
		window.MozBlobBuilder ||
		window.MSBlobBuilder
	);
};
