# es6-lame

## FAQ

* Why are you doing this? 
  * To learn javascript and more about Psychoaccoustics. 
  * To have a plug and play drop in encoder that works out of the box (as in including it via CDN into a browser - directly out of npm)
* Why was lame.js not good enough for you? 
  * its a bit dated, in 4 years a lot ha changed in Js. 
  * Its not es-next
  * it depends on globals, which are not mentioned in the ecma standard at all (reuire for example) 
* Why not just use emscripten? 
  * Emscripten gives you a 1.57 Megabyte Blob of js 
    * the blob references the global process
    * provides XHR functionality
  * Because I already used EMScripten and it was not free from problems. 
* Isnt the emscripten comiled file the "fastest"? 
  * Looking at the code, I am not so sure anymore, if the compiled emscripten output will be faster. It re-implements everything, as well as it wraps all Math.* too. This is not really how you write a fast JS program. 
