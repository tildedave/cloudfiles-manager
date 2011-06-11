goog.require("ui.Events");
goog.require("ui.Broker");

goog.provide('ui.cloud_files.Bootstrap');

ui.cloud_files.Bootstrap.go = function () {
  var broker = new ui.Broker();

  if (window.location.hash) {
    var container = unescape(window.location.hash.split("#!")[1]);
    var event = new goog.events.Event(ui.Events.SELECT_CONTAINER,
                                      { name: container });
    goog.events.dispatchEvent(broker, event);
  }
  else {
    goog.events.dispatchEvent(broker, ui.Events.SELECT_ALL_CONTAINERS);
  }
};








