(function(document, window, require) {
  'use strict';

  var baseUrl = document.getElementsByTagName('base')[0].getAttribute('app-root') +'/';
  var APP_NAME = 'admin';
  baseUrl += 'app/' + APP_NAME + '/';
  var pluginPackages = window.PLUGIN_PACKAGES || [];

  require([baseUrl + '/require-conf.js'], function(rjsConf) {
    require({
      baseUrl:    baseUrl,
      urlArgs:    rjsConf.urlArgs,
      paths:      rjsConf.paths,
      shim:       rjsConf.shim,
      packages:   rjsConf.packages.concat(pluginPackages)
    });

    require([
      'angular',
      'angular-route',
      'angular-resource',
      'angular-sanitize',
      'angular-ui',
      'ngDefine',
      'camunda-commons-ui',
      // 'bootstrap',
      'jquery-ui/ui/jquery.ui.draggable'
    ], function(angular) {
      require([
        APP_NAME,
        'domReady!'
      ], function() {
        rjsConf.utils.bootAngular(angular, APP_NAME);
      });
    });
  });

})(document, window || this, require);
