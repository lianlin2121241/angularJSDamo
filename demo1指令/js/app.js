var myApp=angular.module("myApp",[]);

myApp.controller("SomeController",["$scope",function($scope){
	$scope.expanders=[
		{
			title:"Click me to expand",
			text:"Hi there folks,I an the content that was hidden but is now shown"
		},{
			title:"Click this",
			text:"I am event better text than you have seen previously"
		},{
			title:"No, click me",
			text:"I am text that should be seen before seeing other texts"
		}
	]
}])

myApp.directive("accordion",function(){
	return {
		restrict:"EA",
		replace:true,
		template:"<div class='accordion' ng-transclude></div>",
		transclude:true,
		controller:function(){
			var expanders=[];

			this.gotOpened=function(selectedExpander){
				angular.forEach(expanders,function(expander){
					if(selectedExpander!=expander){
						expander.showMe=false;
					}
				})
			}

			this.addExpander=function(expander){
				expanders.push(expander);
			}
		}
	}
})

myApp.directive("expander",function(){
	return {
		restrict:"EA",
		replace:true,
		templateUrl:"templates/temp1.html",
		transclude:true,
		require:"^?accordion",
		scope:{title:"=expanderTitle"},
		compile:function(tElement,tAttrs,transclude){
			console.log("exec compile");
			console.log(transclude);
			return function(scope,iElement,iAttrs,accordionController){
				console.log("exec link");
				scope.showMe=false;
				accordionController.addExpander(scope);

				scope.toggle=function(){
					scope.showMe=!scope.showMe;
					accordionController.gotOpened(scope);
				}
			}
		},
		// link:function(scope,iElement,iAttrs,accordionController){
		// 	console.log("exec link");
		// 	scope.showMe=false;
		// 	accordionController.addExpander(scope);

		// 	scope.toggle=function(){
		// 		scope.showMe=!scope.showMe;
		// 		accordionController.gotOpened(scope);
		// 	}
		// }
	}
})