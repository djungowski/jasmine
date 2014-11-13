var button = $('#clickable-button');

var ButtonLibrary = function () {

};

ButtonLibrary.prototype.buttonClickCallback = function () {
    var textPlaceholder = $('#text-placeholder');
    var span = $('<span>');

    span.attr('id', 'where-the-magic-happened');
    span.text(new Date().getTime());
    textPlaceholder.html(span);
};

var library = new ButtonLibrary();
button.click(library.buttonClickCallback);

ButtonLibrary.prototype.httpConnector = null;
ButtonLibrary.prototype.setHttpConnector = function (httpConnector) {
    this.httpConnector = httpConnector;
};

ButtonLibrary.prototype.setButtonTitle = function () {
    var button = $('#clickable-button');
    button.html(this.getTitleFromServer());
};

ButtonLibrary.prototype.getTitleFromServer = function () {
    return this.httpConnector.post('/button/title');
};