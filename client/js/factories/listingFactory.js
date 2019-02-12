angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://localhost:' + config.port + '/api/listings');
    },

  	create: function(listing) {
  	  return $http.post('http://localhost:' + config.port + '/api/listings', listing);
    },

    delete: function(id) {
  	   /**TODO
          return result of HTTP delete method
         */
      return $http.delete('http://localhost:' + config.port + '/api/listings/' + id);
    }
  };

  return methods;
});
