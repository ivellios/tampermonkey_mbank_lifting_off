// ==UserScript==
// @name         mBank no-lifting
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fixes mBank interface background and top bar by removing class "lifting" from body element and adding background from demo.
// @author       Janusz "Ivellios" Kamieński
// @match        *://online.mbank.pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("lifting");
    body.style.backgroundImage = "url(http://nowedemo.mbank.pl/gfx/bg/bg_content.png)";
})();
