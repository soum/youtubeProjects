$(window).load(function () {
    var youtubevidId = ['SzsDHtzx6tI', 'BOQvtdXRtKw', 'gmIJoQV96PM'];

    $('.vidTrigger').click(function () {
        $('.videoPopup').show();
        $('iframe').attr('src', 'http://www.youtube.com/embed/' + youtubevidId[$('.vidTrigger').index(this)] + '?enablejsapi=1&wmode=opaque');
    });

    $('.close').click(function () {
        $('.videoPopup').hide();
    });
});