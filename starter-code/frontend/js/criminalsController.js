angular.module('infamousCriminalsApp').factory('Criminals', function($resource) {
  return $resource('localhost:3000/criminals/:id', null,
    {
      update: {method: 'PUT' },
      query: {isArray: false}
    });
});


angular.module('infamousCriminalsApp').controller('CriminalsController', CriminalsController);



CriminalsController.$inject = ['$resource'];
function CriminalsController(Criminals){
  
  // this.addCriminal = addCriminal;
  // this.newCriminal = {};
  var self = this;
  self.all = [];
  // this.getCriminals = getCriminals
  // self.deleteCriminal = deleteCriminal;
  
  var response = Criminals.query(function() {
    self.all = response.criminals
  });
  // function deleteCriminal(criminal) {
  //   Criminals.delete({ id: criminal._id});
  // };
  // function addCriminal(){
  //   $http.post('http://localhost:3000/criminals', self.newCriminal)
  //   .then(function(response) {
  //     self.all.push(self.newCriminal);
  //     self.newCriminal = {};
  //   })
  // }

  // function getCriminals() {
  //   $http.get('http://localhost:3000/criminals')
  //     .then(function(response) {
  //       console.log(response);
  //       self.all = response.data.criminals
  //     });
  // };
  // getCriminals();
  
  }



