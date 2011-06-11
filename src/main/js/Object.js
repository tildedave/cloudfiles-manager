goog.provide('ui.cloud_files.Object');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('ui.Events');

/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
ui.cloud_files.Object = function (broker, container, dom) {
  goog.events.EventTarget.call(this);
  var text = goog.dom.getTextContent(dom);

  goog.events.listen(dom, goog.events.EventType.CLICK, function (e) {
    var event = new goog.events.Event(ui.Events.SELECT_OBJECT,
                                      { container: container,
                                        name: text });
    
    goog.events.dispatchEvent(broker, event);
  });
};

goog.inherits(ui.cloud_files.Object, goog.events.EventTarget);
