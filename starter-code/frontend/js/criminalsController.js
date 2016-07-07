angular.module('infamousCriminalsApp', [])
  .controller('CriminalsController', CriminalsController);
CriminalsController.$inject = ['$http'];
function CriminalsController($http){
  this.all = []
  this.addCriminal = addCriminal;
  this.newCriminal = {};
  this.getCriminals = getCriminals
  var self = this
  function addCriminal(){
    $http.post('http://localhost:3000/criminals', self.newCriminal)
    .then(function(response) {
      this.newCriminal = {};
    })
    this.all.push(this.newCriminal);
  }
function getCriminals() {
  $http.get('http://localhost:3000/criminals')
    .then(function(response) {
      console.log(response);
      self.all = response.data.criminals
    });
};


  getCriminals();
};
