(function(){
    'use strict';
    angular.module("myModule",[])
           .controller("LunchCheckController",function($scope){
            //    $scope.employee="Pranjal";
            //    $scope.inputValue
               $scope.submit=function(){
                   var inputval=$scope.inputValue;
                  
                   console.log(inputval);
                   if(inputval===undefined){
                    alert("Please Enter some value");
                   return;
                }
                var arr= inputval.split(',');
                   if(arr.length >0 && arr.length ===3 ){
                       alert("Enjoy!!!!");
                       console.log(arr);
                       return;
                       
                }
                   else if(arr.length>3){
                    alert("Can enter max 3 values");
                    return;
                }
                   else{
                       alert(' Please enter atleast 3 values');
                       return;
                   }
                    
                    
               }
           });
})();