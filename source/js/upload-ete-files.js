$('option').each(function () {
    var text = $(this).text();
    if (text.length > 20) {
        text = text.substring(0, 9) + '...';
        $(this).text(text);
    }
});