var button = $('#clickable-button');
var textPlaceholder = $('#text-placeholder')

button.click(function () {
    var span = $('<span>');
    span.attr('id', 'where-the-magic-happened');
    span.text(new Date().getTime());
    textPlaceholder.html(span);
});