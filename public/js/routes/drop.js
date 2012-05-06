// Generated by CoffeeScript 1.3.1
(function() {

  define(["smog/server", "smog/notify", "templates/confirm"], function(server, notify, templ) {
    return function(_arg) {
      var name;
      name = _arg.name;
      $('#content').append(templ({
        title: 'Drop',
        text: 'Dropping a collection will completely remove it from the database.\nYou will not be able to recover any data lost.'
      }));
      $('#confirm-modal').modal();
      $('#confirm-modal').on('hidden', function() {
        return $('#confirm-modal').remove();
      });
      return $('#confirm-button').click(function() {
        return server.collection({
          collection: name.toLowerCase(),
          type: 'drop'
        }, function(err) {
          if (err != null) {
            return notify.error("Error dropping collection: " + err);
          }
          $('#confirm-modal').modal('hide');
          notify.success("Collection dropped");
          return window.location.hash = '#/home';
        });
      });
    };
  });

}).call(this);
