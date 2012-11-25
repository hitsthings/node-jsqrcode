(function() {
	var remove = Array.prototype.remove;
	delete Array.prototype.remove;

	var oldFinderPatternFinder = FinderPatternFinder;
	FinderPatternFinder = function() {
		var self = new oldFinderPatternFinder();
		self.possibleCenters.remove = remove;
		return self;
	};
}());

module.exports = function(imageData, fn) {
	qrcode.width = imageData.width;
	qrcode.height = imageData.height;
	qrcode.imagedata = imageData;
	fn(qrcode.process());
};