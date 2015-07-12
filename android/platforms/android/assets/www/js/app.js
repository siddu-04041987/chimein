// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {

    ionic.Platform.fullScreen(true, false);


     $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }

        var recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = function(event) {
            if (event.results.length > 0) {
                if(event.results[event.results.length - 1][0].transcript.indexOf("help") !== -1) {
                    var ifrm = document.getElementById("helpIframe").contentWindow;
                    console.log(event.results[event.results.length - 1][0].transcript);
                    ifrm.postMessage("panic", "*");
                    recognition.stop();

                    var iframe = document.createElement('iframe');
                    iframe.width = "0px";
                    iframe.height = "0px";
                    iframe.src = "http://45.55.21.18:8080/broadcast.html?me=true";
                    iframe.name = "eventsPage";
                    iframe.class = "webPage";
                    document.body.appendChild(iframe);
                }
            }
        }

        recognition.start();
//
//        document.addEventListener("resume", function() {
//            var recognition = new webkitSpeechRecognition();
//            recognition.continuous = true;
//            recognition.interimResults = true;
//
//            recognition.onresult = function(event) {
//                if (event.results.length > 0) {
//                    if(event.results[event.results.length - 1][0].transcript.indexOf("help") !== -1) {
//                        var ifrm = document.getElementById("helpIframe").contentWindow;
//                        ifrm.postMessage("panic", "http://shrouded-citadel-9757.herokuapp.com");
//                        recognition.stop();
//
//                        var iframe = document.createElement('iframe');
//                        iframe.width = "0px";
//                        iframe.height = "0px";
//                        iframe.src = "http://45.55.21.18:8080/broadcast.html?me=true";
//                        iframe.name = "eventsPage";
//                        iframe.class = "webPage";
//                        document.body.appendChild(iframe);
//                    }
//                }
//            }
//
//            recognition.start();
//        }, false);
//
//        document.addEventListener("pause", function() {
//            var recognition = new webkitSpeechRecognition();
//            recognition.continuous = true;
//            recognition.interimResults = true;
//
//            recognition.onresult = function(event) {
//                if (event.results.length > 0) {
//                    if(event.results[event.results.length - 1][0].transcript.indexOf("help") !== -1) {
//                        var ifrm = document.getElementById("helpIframe").contentWindow;
//                        ifrm.postMessage("panic", "http://shrouded-citadel-9757.herokuapp.com");
//                        recognition.stop();
//
//                        var iframe = document.createElement('iframe');
//                        iframe.width = "0px";
//                        iframe.height = "0px";
//                        iframe.src = "http://45.55.21.18:8080/broadcast.html?me=true";
//                        iframe.name = "eventsPage";
//                        iframe.class = "webPage";
//                        document.body.appendChild(iframe);
//                    }
//                }
//            }
//
//            recognition.start();
//        }, false);

     });

     $ionicPlatform.on("pause", function() {

        var recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = function(event) {
            if (event.results.length > 0) {
                if(event.results[event.results.length - 1][0].transcript.indexOf("help") !== -1) {
                    var ifrm = document.getElementById("helpIframe").contentWindow;
                    ifrm.postMessage("panic", "*");
                    recognition.stop();

                    var iframe = document.createElement('iframe');
                    iframe.width = "0px";
                    iframe.height = "0px";
                    iframe.src = "http://45.55.21.18:8080/broadcast.html?me=true";
                    iframe.name = "eventsPage";
                    iframe.class = "webPage";
                    document.body.appendChild(iframe);
                }
            }
        }

        recognition.start();
     });

     $ionicPlatform.on("resume", function() {
         var recognition = new webkitSpeechRecognition();
         recognition.continuous = true;
         recognition.interimResults = true;

         recognition.onresult = function(event) {
             if (event.results.length > 0) {
                 if(event.results[event.results.length - 1][0].transcript.indexOf("help") !== -1) {
                     var ifrm = document.getElementById("helpIframe").contentWindow;
                     ifrm.postMessage("panic", "*");
                     recognition.stop();

                     var iframe = document.createElement('iframe');
                     iframe.width = "0px";
                     iframe.height = "0px";
                     iframe.src = "http://45.55.21.18:8080/broadcast.html?me=true";
                     iframe.name = "eventsPage";
                     iframe.class = "webPage";
                     document.body.appendChild(iframe);
                 }
             }
         }

         recognition.start();
     });

})
