var myApp=angular.module("myApp",["ngDialog"]);

myApp.controller('thirdController', ['$scope', function($scope){
	$scope.name="limingle";
	
}])

myApp.controller('secondController', ['$scope','$rootScope','ngDialog', function($scope,$rootScope,ngDialog){
	$scope.customName="lemingli"

	$scope.openDialog=function(){
		ngDialog.openConfirm({
			template:'views/dialog1.html',
			className:'ngdialog-theme-default',
			controller:customController,
			resolve: {
		        dep: function() {
		            return 'dep value';
		        }
		    },
		    scope: $scope,
		    data:{
		    	aa:"aa",
		    	bb:"bb"
		    },
		    appendClassName: 'ngdialog-custom',
		    disableAnimation:false,
		    // overlay:false,
		    showClose:true,
		    closeByDocument:false,
		    name:"fwef"

		})
		.then(function(value){
			console.log(value)
			console.log("success "+value);
		},function(reason){
			console.log("fail "+reason);
		})
	}

	function customController($scope,dep){
		$scope.form={
			userName:$scope.customName,
			password:dep
		};

		console.log($scope.ngDialogData);
	}
}])	