'use strict';

var CC, ngRouteUrl = "//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.js";

InitLoader(document.getElementById('loader'), document.getElementById('bar'), 
		   ["/app/js/libs/jquery-1.7.2.min.js",		    
		    "//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js",	
		    "//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-sanitize.min.js",
		    ngRouteUrl,
			"/app/js/controllers/home.js"], 
		   ngRouteUrl,
		   startNgApp,
		   startApp);

function startNgApp(){
	CC = angular.module('createchar', ['ngRoute']);

	
}

function startApp() {
	setTimeout(function(){
		var root = document.getElementById('root');
		root.style.transition = 'all 1s linear';
	    root.style.opacity =  '1';	
	}, 1000);	
}

function log(value){
	if(console.log) console.log(value);
}