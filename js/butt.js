var player,
    wave,
    wave2,
    forester,
    refactoring;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('main', {
        height: '100%',
        width: '100%',
        videoId: 'rGxHdRPGqgc',
        playerVars: {
            autoplay: 1,
            start: 3,
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
    wave = new YT.Player('wave', {
        height: '220',
        width: '250',
        videoId: 'X7lmGge56TE',
        playerVars: {
            autoplay: 1,
            start: 20,
            controls: 0,
            disablekb: 1,
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
    wave2 = new YT.Player('wave2', {
        height: '25%',
        width: '25%',
        videoId: '4qS_5Ntev94',
        playerVars: {
            autoplay: 1,
            start: 20,
            controls: 0,
            disablekb: 1,
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
    forester = new YT.Player('forester', {
        height: '300',
        width: '350',
        videoId: '4ivxsId0SVo',
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
        }
    });
    refactoring = new YT.Player('refactoring', {
        height: '25%',
        width: '25%',
        videoId: 'WG3OSWI42yU',
        playerVars: {
            autoplay: 1,
            start: 2,
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
    player.mute();
    wave.mute();
    wave2.mute();
    refactoring.mute();
}