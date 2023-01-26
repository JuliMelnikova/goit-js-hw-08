import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const storageKey = 'videoplayer-current-time';

const getPlayerCurrentTime = () => {
    return localStorage.getItem(storageKey);
};

const setPlayerCurrentTime = (time) => {
    localStorage.setItem(storageKey, JSON.stringify(time.seconds));
}


player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on('timeupdate', throttle(function(currentTime) {
    setPlayerCurrentTime(currentTime);
}, 1000));

player.setCurrentTime(getPlayerCurrentTime());