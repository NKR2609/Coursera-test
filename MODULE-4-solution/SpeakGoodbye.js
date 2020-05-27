 (function (window) {
 var byeSpeaker ={};

var speakWord = "Hello";

byeSpeaker.speak = function (names) {
  console.log(speakWord + " " + names);
}
	window.byeSpeaker = byeSpeaker;
})(window);	
