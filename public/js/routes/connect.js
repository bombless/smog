// Generated by CoffeeScript 1.3.3
(function() {

  define(["smog/server", "smog/notify", "templates/connect"], function(server, notify, templ) {
    return function() {
      $('#content').html(templ());
      $('#connect-modal').modal({
        backdrop: false
      });
      return $('#connect-button').click(function() {
        var host;
        host = $('#host').val();
        return server.connect(host, function(err, okay) {
          if (err != null) {
            if (typeof err === 'object' && Object.keys(err).length === 0) {
              err = "Server unavailable";
            }
            return notify.error("Connection error: " + (err.err || err));
          } else {
            $('#connect-modal').modal('hide');
            return window.location.hash = '#/home';
          }
        });
      });
    };
  });

}).call(this);
