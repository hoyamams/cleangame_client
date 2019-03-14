var app = angular.module('cleangame', ['ngRoute']);

local = true;

if(local){
  app.constant('ApiPath', "http://localhost:8080");
  app.constant('SocketServer', "http://localhost");
  app.constant('SocketPort', "2000");
  app.constant('Domain', "localhost");
}else{
  app.constant('ApiPath', "http://ec2-52-67-255-100.sa-east-1.compute.amazonaws.com:8080");
  app.constant('SocketServer', "http://ec2-52-67-255-100.sa-east-1.compute.amazonaws.com");
  app.constant('SocketPort', "8081");
  app.constant('Domain', "http://ec2-52-67-255-100.sa-east-1.compute.amazonaws.com");
}

 
app.config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  
 
  $routeProvider
    // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
    .when('/', {
      templateUrl: './views/skeleton.template.html',
      controller: 'SkeletonCtrl',
    })
    .when('/invite/:inviteid', {
      templateUrl: './views/skeleton.template.html',
      controller: 'SkeletonCtrl',
    })
    .when('/painel', {
      templateUrl: './views/skeleton.template.html',
      controller: 'RoomsCtrl',
    })
    // caso não seja nenhum desses, redirecione para a rota '/'
    .otherwise({ redirectTo: '/' });
});


app.run(function ($rootScope, $location) {
  $rootScope.pagesHistory = []; 
  
  
  //Executa ao iniciar carregamento da rota
  $rootScope.$on('$locationChangeStart', function () { //iremos chamar essa função sempre que o endereço for alterado
    
  });

  //Executa ao terminar carregamento da rota
  $rootScope.$on('$locationChangeSuccess', function () { //iremos chamar essa função sempre que o endereço for alterado
  
  });

});




$(document).keydown(function(e){
  if(e.keyCode == 13) {
      $('#send').click();
  }
});

