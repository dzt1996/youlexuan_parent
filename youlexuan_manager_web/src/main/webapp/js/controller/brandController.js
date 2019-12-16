app.controller('brandController',function($scope,$controller,brandService){
    $controller("baseController",{$scope:$scope})
    $scope.findAll=function () {
        brandService.findAll().success(
            function (response) {
                $scope.list=response;
            }
        )
    }

    //分页
    $scope.findPage=function(page,size){
        brandService.findPage().success(
            function(response){
                $scope.list = response.rows;
                $scope.paginationConf.totalItems = response.total;//更新总记录数
            }
        );
    }

    /*根据条件查询加分页*/
    //定义模糊查询条件存放的类
    $scope.searchEntity={};
    $scope.search = function (page,size) {
        brandService.search(page,size,$scope.searchEntity).success(
            function (response) {
                $scope.list=response.rows;
                $scope.paginationConf.totalItems=response.total;
            }
        )
    }

    //新增|修改 品牌信息
    $scope.save  = function () {

        brandService.save($scope.entity).success(
            function (response) {
                if(response.success){
                    $scope.reloadList();
                }else{
                    alert(response.message)
                }
            }
        )
    }

    //获取单个商品信息
    $scope.findOne = function(id){
        brandService.findOne(id).success(
            function (response) {
                $scope.entity=response;
            }
        )
    }

    //删除
    $scope.delete = function () {
        if($scope.selectIds.length>0){
            brandService.delete($scope.selectIds).success(
                function (response) {
                    if(response.success){
                        $scope.reloadList();
                        $scope.selectIds=[];
                    }else{
                        alert(response.message)
                    }
                }
            )
        }else{
            alert("请选择要删除的记录")
        }

    }

})