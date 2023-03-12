// ==UserScript==
// @name         High resolution images for tweetdeck
// @namespace    http://tampermonkey.net/
// @version      0.2
// @icon         https://tweetdeck.twitter.com/favicon.ico
// @description  Make tweetdeck content be loaded to highest resolution possible
// @author       mmorgat
// @match        https://tweetdeck.twitter.com/*
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
    /* document.getElementsByClassName('stream-item'); */
    function loadHighRes(){
        let images = document.getElementsByClassName('js-media-image-link');
        for(let image of images){
            if(image.classList.contains('block') && image.classList.contains('media-item') && image.classList.contains('med-link')){
                //Replace the URL of the image so that twitter loads the best resolution possible
                image.style.backgroundImage = image.style.backgroundImage.replace('name=360x360', 'name=large');
                image.style.backgroundImage = image.style.backgroundImage.replace('name=medium', 'name=large');
                image.style.backgroundImage = image.style.backgroundImage.replace('name=small', 'name=large');
            }
        }
    }
    setInterval(function(){loadHighRes();},500); //Changes all images to higher res version every 0.5 seconds
})();