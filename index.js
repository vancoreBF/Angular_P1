
angular.module('myApp',[]).controller('myController', function($scope){
    $scope.visible = false;
    $scope.alumnos = [
        {id:1, nombre:'África', apellido:'Morales'},
        {id:2, nombre:'Manolo', apellido:'Fernandez'},
        {id:3, nombre:'Gonzalo', apellido:'Castillo'},
        {id:4, nombre:'Alonso', apellido:'Sport'}
    ];

    $scope.add = function()
    {
        //$scope.visible = !$scope.visible;
        //console.log($scope.alumnos.length);
        vaciar();
        $scope.accion ="AÑADIR ALUMNO";
        $scope.visible = true;
    }

    $scope.edit = function()
    {
        $scope.visible = true;
    }

    $scope.close = function()
    {
        $scope.visible= !$scope.visible;
    }

    $scope.agregar = function(newName, newLName)
    {
        $scope.alumnos.push({id: $scope.alumnos.length +1, nombre:newName, apellido: newLName});
        // console.log($scope.alumnos.length);
        //console.log($scope.alumnos); 


        /* como en el caso anterior estaba visible (true) esto dice que haga lo contrario */
        $scope.visible = !$scope.visible;
       vaciar();
       

    }


    $scope.edit = function(id)
    {
        $scope.add();
        $scope.accion ="EDITAR ALUMNO";
        $scope.nomb =$scope.alumnos[id-1].nombre;
        $scope.ape = $scope.alumnos[id-1].apellido;
    }


    /* función que limpia las casilla del formulario */
    vaciar = function()
    {
       
        $scope.accion ='';
        $scope.nomb ='';
        $scope.ape = '';
        $scope.passw1 ='';
        $scope.passw2 ='';
    }

});