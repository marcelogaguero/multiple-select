
/**
 *
 */
'use strict';
const MODULE_NAME = 'multiple-select',
      angular = require('angular');

var app = angular.module(MODULE_NAME, [])
.directive('multipleSelect', require('./src/multiple-select-directive'));

module.exports = MODULE_NAME;
