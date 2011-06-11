goog.provide('ui.Providers');

goog.require('model.cache.ContainerProvider');
goog.require('model.cache.ObjectProvider');
goog.require('model.cache.FileProvider');

goog.require('model.xhr.ContainerProvider');
goog.require('model.xhr.ObjectProvider');
goog.require('model.xhr.FileProvider');

ui.Providers.xhr = true;

ui.Providers.getContainerProvider = function () {
  var testData = [
    { name: "Lucky",
      count: 154,
      bytes: 1000
    },
    { name: "Siggy",
      count: 20,
      bytes: 500 
    },
    { name: "Simon",
      count: 0,
      bytes: 123
    }
  ];

  if (!ui.Providers.xhr) {
    return new model.cache.ContainerProvider(testData);
  }
  return new model.xhr.ContainerProvider();
};

ui.Providers.getObjectProvider = function (container) {
  var testData = [
    { name: "Puppy",
      hash: "35987158127295187",
      bytes: 1000,
      content_type: "text/xml",
      last_modified: "Today"
    } ];

  if (!ui.Providers.xhr) {
    return new model.cache.ObjectProvider(container, testData);      
  }

  return new model.xhr.ObjectProvider(container, testData);
};

ui.Providers.getFileProvider = function (container, name) {
  return new model.xhr.FileProvider(container, name);
};