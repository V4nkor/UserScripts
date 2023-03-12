// ==UserScript==
// @name         More content height for tweetdeck
// @namespace    http://tampermonkey.net/
// @version      0.2
// @icon         https://tweetdeck.twitter.com/favicon.ico
// @description  Make tweetdeck content have more height
// @author       mmorgat
// @match        https://tweetdeck.twitter.com/*
// @grant        none
 
// ==/UserScript==
 
(function() {
    'use strict';
    let content = document.createElement('style'); //Create custom <style> HTML element
    content.innerText = '.js-column .js-show-detail .media-item{height:500px !important;}'; //Set content of script
    document.getElementsByTagName('head')[0].appendChild(content); //Append the HTML element at the end of the page
})();