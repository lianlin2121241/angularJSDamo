var myApp=angular.module("myApp",[]);

myApp.config(["$interpolateProvider",function($interpolateProvider){
  $interpolateProvider.startSymbol("__");
  $interpolateProvider.endSymbol("__");
}])

myApp.factory("EmailPaser",["$interpolate",function($interpolate){
  return {
    parse:function(body,context){
      var temp=$interpolate(body);
      return temp(context);
    }
  }
}])

//$parse应用
myApp.controller("parserController",["$scope","$parse",function($scope,$parse){
  $scope.$watch("parserText",function(newVal,oldVal,scope){
    console.log(newVal);
    if(newVal!=oldVal){
      var temp="'"+newVal+"'+firstName";
      var parsed=$parse(temp);
      $scope.parserPreviewText=parsed(scope);
    }
  })
}])

//$interpolate应用
myApp.controller("interpolateController",["$scope","EmailPaser",function($scope,EmailPaser){
  $scope.to='ari@fullstack.io';
  $scope.emailBody='Hello __ to __,\n\nMy name is Ari too!';
  $scope.$watch("emailBody",function(newVal,oldVal,scope){
    scope.previewText=EmailPaser.parse(scope.emailBody,{
      to:$scope.to
    });
  })
}])