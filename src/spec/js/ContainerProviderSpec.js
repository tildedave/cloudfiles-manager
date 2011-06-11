goog.require('model.cache.ContainerProvider');
goog.require('model.xhr.ContainerProvider');

describe("ContainerProvider", function () {

  var table;

  beforeEach(function () {
    table = {
      getResponse : function () { }
    };
    spyOn(table, "getResponse");
  });
  
  it("renders the table from cache", function () {

    var data = [ {
        name: "Lucky",
        count: 154,
        bytes: 1000
    } ];
    
    var cacheProvider = new model.cache.ContainerProvider(table);
    cacheProvider.setData(data);
    
    cacheProvider.get(table);
    expect(table.getResponse).toHaveBeenCalledWith(data);
  });

  it("renders the table from xhr", function () {

    var data = [ {
      name: "Siggy",
      count: 54,
      size: 1999
    } ];
    
    goog.net.XhrIo.send = function( path, handler) {
      handler({
        target: {
          getResponseJson : function () {
            return data;
          }
        }
      });
    };
    
    var xhrProvider = new model.xhr.ContainerProvider(table);

    xhrProvider.get(table);
    expect(table.getResponse).toHaveBeenCalledWith(data);
    
  });

});