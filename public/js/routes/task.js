// Generated by CoffeeScript 1.3.1
(function() {

  define(["smog/server", "smog/notify"], function(server, notify) {
    return function(_arg) {
      var id, name;
      name = _arg.name, id = _arg.id;
      return server.collection({
        collection: name.toLowerCase(),
        type: 'delete',
        query: {
          _id: id
        }
      }, function(err) {
        if (err != null) {
          return notify.error("Error deleting document: " + err);
        }
      });
    };
  });

}).call(this);
