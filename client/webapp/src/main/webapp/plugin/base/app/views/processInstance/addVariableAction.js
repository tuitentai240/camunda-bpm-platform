/* global ngDefine: false, angular: false */
ngDefine('cockpit.plugin.base.views', ['require'], function(module, require) {
  'use strict';
  var Configuration = function PluginConfiguration(ViewsProvider) {
    ViewsProvider.registerDefaultView('cockpit.processInstance.runtime.action', {
      id: 'add-variable-action',
      label: 'Add Variable Action',
      url: 'plugin://base/static/app/views/processInstance/add-variable-action.html',
      controller: [
              '$scope', '$modal',
      function($scope,   $modal) {
        $scope.openDialog = function () {
          var dialog = $modal.open({
            scope: $scope,
            resolve: {
              processData: function() { return $scope.processData; },
              processInstance: function() { return $scope.processInstance; }
            },
            controller: 'AddVariableController',
            templateUrl: require.toUrl('./add-variable-dialog.html')
          });

          dialog.result.then(function(result) {

            // dialog closed. YEA!
            if (result === 'SUCCESS') {
              // refresh filter and all views
              $scope.processData.set('filter', angular.extend({}, $scope.filter));
            }
          });
        };
      }],
      priority: 10
    });
  };

  Configuration.$inject = ['ViewsProvider'];

  module.config(Configuration);
});
