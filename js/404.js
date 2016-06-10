var dat404;

function onYouTubePlayerAPIReady() {
    dat404 = new YT.Player('dat404', {
        height: '100%',
        width: '100%',
        videoId: 't3otBjVZzT0',
        playerVars: {
            autoplay: 1,
            start: 0,
            controls: 0,
            disablekb: 1,
            hl: 'en-us',
            loop: 1,
            modestbranding: 1,
            showinfo: 0,
            autohide: 1,
            color: 'black',
            iv_load_policy: 3,
            theme: 'dark',
            rel: 0
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
}