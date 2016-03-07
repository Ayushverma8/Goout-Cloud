function moveClouds(e, s, d) {
    $(e).css('right', '-20%');
        var wait = window.setTimeout(function(){
            $(e).animate ({
                right: '120%'
            }, s, 'linear', function() {
            moveClouds(e, s, d);
        });
    },d);
}

if(!Modernizr.cssanimations) {
    var clouds = [1,2,3,4];
		    
    $.each(clouds, function() {
        var e = $('.cloud-' + this);
        moveClouds(e, e.data('speed'), e.data('delay'));
    });
}