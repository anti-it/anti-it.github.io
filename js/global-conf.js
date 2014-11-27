(function(require) {
  "use strict"
  // Global configuration for require.js
  var config = {
    "baseUrl": "/js/app",
    "paths": {
      "jquery": "http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min"
    },
    "waitSeconds": 15
  }
  require.config(config)
})(this.require)