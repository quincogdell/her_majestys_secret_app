$(function(){



  var Router = Backbone.Router.extend({
    routes: {
      "": "home"
    }
  });

  var filmList = new FilmView();

  var router = new Router();

  router.on('route:home', function(){
    filmList.render();
  });




  Backbone.history.start();
});
