angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://murmuring-springs-45115.herokuapp.com/');
    },

  	create: function(listing) {
  	  return $http.post('https://murmuring-springs-45115.herokuapp.com/', listing);
    },

    delete: function(id) {
  	   /**TODO
          return result of HTTP delete method
         */
      return $http.delete('https://murmuring-springs-45115.herokuapp.com/' + id);
    }
  };

  return methods;
});
