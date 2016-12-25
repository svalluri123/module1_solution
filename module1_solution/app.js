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
  var stringCount=0;  
  var stringArray = (string).split(',');
   for (var i=0;i<stringArray.length;i++){
     stringCount = stringCount+1;
   }
  return stringCount;
 }

$scope.CheckIfTooMuch= function(){
  if($scope.totalItemCount===0){
  $scope.sayMessage=function(){
     return "Please Enter the order!!";
   }
  }
  else if($scope.totalItemCount>0&&$scope.totalItemCount<=3){
    $scope.sayMessage=function(){
       return "Enjoy!!";
     }
  }
  else if ($scope.totalItemCount>3) {
    $scope.sayMessage=function(){
       return "Too Much!!";
     }
  }
 }
}

})();
