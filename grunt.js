module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    min : {
      dist : {
        src : [
          "lib/before-jsqrcode.js",
          "lib/vendor/src/grid.js",
          "lib/vendor/src/version.js",
          "lib/vendor/src/detector.js",
          "lib/vendor/src/formatinf.js",
          "lib/vendor/src/errorlevel.js",
          "lib/vendor/src/bitmat.js",
          "lib/vendor/src/datablock.js",
          "lib/vendor/src/bmparser.js",
          "lib/vendor/src/datamask.js",
          "lib/vendor/src/rsdecoder.js",
          "lib/vendor/src/gf256poly.js",
          "lib/vendor/src/gf256.js",
          "lib/vendor/src/decoder.js",
          "lib/vendor/src/QRCode.js",
          "lib/vendor/src/findpat.js",
          "lib/vendor/src/alignpat.js",
          "lib/vendor/src/databr.js",
          "lib/after-jsqrcode.js",
        ],
        dest : 'dist/jsqrcode.js'
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'min');

};