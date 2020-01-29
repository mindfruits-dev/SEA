let app = angular.module("okMod",[])
app.controller('header', function($scope){
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  $scope.menu=[
    {text: "Generators", url:"#generator", color: "#4285f4", sousmenu:
      [
        {text:"generator_1", url:"#generator_1"}
      ]
    },
    {text: "Reports", url:"#report", color: "#fbbc04",  sousmenu:
      [
        {text:"report_1", url:"#report_1"}
      ]
    },
    {text: "Checkers", url:"#checker", color: "#34a853",  sousmenu:
      [
        {text:"checker_1", url:"#checker_1"}
      ]
    },
  ]
})
app.controller('nav', ()=>{

})
app.controller('main', ()=>{

})
app.controller('footer', ()=>{

})
