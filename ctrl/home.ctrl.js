app.controller('HomeCtrl', function ($rootScope, $location, $scope) {
  console.log("Controlador HomeCtrl carregado!");
  $rootScope.pagesHistory.push("home"); 
   

    //Carregamento padrão
    //$rootScope.loadTemplate('./views/productsList.template.html');
  
  
    //renewNavs();
    // $rootScope.activetab = $location.path();
});
  
  