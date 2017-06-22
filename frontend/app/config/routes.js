angular.module('cupomFacil').config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider.state('dashboard', {
			url: "/dashboard",
			templateUrl: "dashboard/dashboard.html"
		}).state('client', {
			url: "/dashboardTabs",
			templateUrl: "/dashboardTabs/client.html"
		}).state('business', {
			url: "/dashboardTabs",
			templateUrl: "/dashboardTabs/business.html"
		}).state('cupom', {
			url: "/dashboardTabs",
			templateUrl: "/dashboardTabs/cupom.html"
		})

		$urlRouterProvider.otherwise('/dashboard')
	} 
])