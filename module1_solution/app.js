(function (){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope) {
  $scope.item="";
  $scope.totalItemCount=0;


  $scope.itemList=function(){
    var totalItems= itemCount($scope.item);
    $scope.totalItemCount=totalItems;
  }
  function itemCount(string){
  var stringArray = (string).split(',');
  return stringArray.length;
 }

$scope.CheckIfTooMuch= function(){
  if($scope.totalItemCount===0){
  $scope.sayMessage=function(){
     return "Please Enter the order";
   }
  }
  else if($scope.totalItemCount<=3){
    $scope.sayMessage=function(){
       return "Enjoy !!";
     }
  }
  else if ($scope.totalItemCount>3) {
    $scope.sayMessage=function(){
       return "Too Much !!";
     }
  }
 }
}

})();
