goog.require("ui.Events");
goog.require("ui.Broker");

goog.provide('ui.cloud_files.Bootstrap');

ui.cloud_files.Bootstrap.go = function () {
  var broker = new ui.Broker();
  goog.events.dispatchEvent(broker, ui.Events.SELECT_ALL_CONTAINERS);
};