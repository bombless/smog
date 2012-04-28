// Generated by CoffeeScript 1.3.1
(function() {

  define(["smog/server", "smog/routes", "smog/notify", "templates/navigation"], function(server, routes, notify, nav) {
    $('#navigation').html(nav({
      loggedIn: false
    }));
    server.ready(function(services) {
      console.log("Connected - Available services: " + services);
      return $.routes(routes);
    });
    return server.close(function() {
      return notify.error('Connection lost - reload to re-establish');
    });
  });

}).call(this);
