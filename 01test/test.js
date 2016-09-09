var myModule=angular.module("myModule",[]);
myModule.controller("firstController",["$scope","$injector","data",function($scope,$injector,data){
	/*console.log(angular);
	console.log($scope);
	console.log(myModule);*/
	$injector.invoke(function(data){
		console.log(data);
	})
	console.log(data);
	console.log($injector);
	console.log($injector.annotate(function(arg1,arg2){

	}))
	$scope.testValue="测试";
	$scope.content={
		label:"fwef"
	}

	console.log(angular.injector);

	var $div = $('<div>{{content.label}}</div>');
	$(document.body).append($div);

	angular.element(document).injector().invoke(function($compile) {
	  var scope = angular.element($div).scope();
	     $compile($div)(scope);
	});
}])

myModule.service("data",function(){
	return {
		name:"ceshi name"
	}
})

myModule.directive("hello",function(){
	return {
		restrict:"E",
		template:"<div>Hi everyone</div>",
		replace:true,
		link:function(scope,el,attrs,controller) {
			console.log(scope);
			console.log(el);
			console.log(attrs);
			console.log(controller);
			el
				.on("mouseover",function(){
					$(this).css("color","#ff0000");
				})
				.on("mouseout",function() {
					$(this).css("color","#000000");
				})

		}
	}
})

myModule.directive("repeatCount",function(){
	return {
		restrict:"A",
		compile:function(el,attrs,transclude){
			console.log("编译阶段^^");
			var childEle=el.children().clone();
			var count=attrs.repeatCount;
			for(var i=0;i<count-1;i++){
				el.append(childEle.clone());
			}
			return function(scope,el,attrs,controller){
				el
					.on("mouseover","p",function(){
						$(this).css("color","#00ff00");
					})
					.on("mouseout","p",function() {
						$(this).css("color","#000000");
					})
			}
		}
	}
})

myModule.directive("sayhello",function(){
	return {
		restrict:"E",
		template:"<div>这么大的hello</div>",
		replace:true,
		compile:function(el,attrs,transclude){
			console.log("compile block");
			return function(scope,el,attrs,controller){
				console.log("compile link block");
				el
					.on("click",function(){
						console.log("link click");
					})
			}
		},
		link:function(scope,el,attrs,controller){
			console.log("link block");
			el
				.on("click",function(){
					console.log("link click");
				})
		}
	}
})