/* global ngDefine: false */
ngDefine('cockpit.pages', [
  './dashboard',
  'module:ngRoute:angular-route',
  'module:cockpit.pages.processInstance:./processInstance',
  'module:cockpit.pages.processDefinition:./processDefinition'
], function() {});
