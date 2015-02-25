define([
  'angular',

  /* directives */
  './directives/cam-tasklist-sorting-choices',
  './directives/cam-tasklist-sorting-variables',
  './directives/cam-tasklist-sorting-inputs',
  './directives/cam-tasklist-search',
  './directives/cam-tasklist-tasks',

  /* filters */
  './filters/cam-query-component',

], function(
  angular,

  /* directives */
  camTasklistSortingChoices,
  camTasklistSortingVariables,
  camTasklistSortingInputs,
  camTasklistSearch,
  camTasklistTasks,

  /* filters */
  camQueryComponent

) {
  'use strict';

  var module = angular.module('cam.tasklist.tasklist', [
    'ui.bootstrap'
  ]);

  /* directives */
  module.directive('camSortingChoices', camTasklistSortingChoices);
  module.directive('camSortingVariables', camTasklistSortingVariables);
  module.directive('camSortingInputs', camTasklistSortingInputs);
  module.directive('camTaskSearch', camTasklistSearch);
  module.directive('camTasks', camTasklistTasks);

  /* filters */
  module.filter('camQueryComponent', camQueryComponent);

  return module;

});
