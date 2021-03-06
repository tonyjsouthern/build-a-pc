function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('root', {
    abstract: true,
    templateUrl: 'templates/root.templ.html',
    controller: 'RootController as vm'
  })

  .state('root.home', {
    url: '/',
    templateUrl: 'templates/home.templ.html',
    controller: 'HomeController as vm'
  })

  .state('root.login', {
    url: '/login',
    templateUrl: 'templates/login.templ.html',
    controller: 'LoginController as vm'
  })

    $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', "$urlRouterProvider"];
export { config }
