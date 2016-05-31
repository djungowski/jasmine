var Library = function () {

};

Library.prototype.throwsSomething = function (someParameter) {
	if (someParameter == 'throw') {
		throw("");
	}
};

Library.prototype.returnsFunction = function () {
	return function () {

	}
};

Library.prototype.delayedExecution = function () {
	window.setTimeout(function () {
		window.bla = 5;
	}, 10000);
};

Library.prototype.asyncCall = function (callback) {
	window.bla = 6;
	callback();
};

Library.prototype.callAlert = function () {
	return this.returnsFunction();
};

Library.prototype.alterDom = function () {
	$('#alter-me').text('Ich wurde geändert');
};