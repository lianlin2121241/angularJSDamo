var directives=angular.module("guthub.directives",[]);

directives.directive("butterbar",[$rootScope,function($rootScope){
	return {
		restrice:"A",
		link:function(scope,iElement,iAttrs){
			iElement.addClass("hide");

			$rootScope.$on("$routeChangeStart",function(){
				iElement.removeClass("hide");
			})

			$rootScope.$on("$routeChangeSuccess",function(){
				iElement.addClass("hide");
			})
		}
	}
}])

directives.directive("focus",function(){
	return {
		restrice:"A",
		link:function(scope,iElement,iAttrs){
			iElement[0].focus();
		}
	}
})