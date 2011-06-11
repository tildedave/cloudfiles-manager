goog.provide('ui.Events');

goog.require('goog.events');

ui.Events = {
  SELECT_ALL_CONTAINERS : goog.events.getUniqueId('all-containers'),
  SELECT_CONTAINER : goog.events.getUniqueId('select-container'),
  SELECT_OBJECT : goog.events.getUniqueId('select-object')
};