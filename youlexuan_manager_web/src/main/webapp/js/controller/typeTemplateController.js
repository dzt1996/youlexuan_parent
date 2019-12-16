//type_template控制层 
app.controller('typeTemplateController' ,function($scope, $controller, typeTemplateService,brandService,specificationService){
	
	// 继承
	$controller("baseController", {
		$scope : $scope
	});
	
	// 保存
	$scope.save = function() {
		typeTemplateService.save($scope.entity).success(function(response) {
			if (response.success) {
				// 重新加载
				$scope.reloadList();
			} else {
				alert(response.message);
			}
		});
	}
	
	//查询实体 
	$scope.findOne = function(id){				
		typeTemplateService.findOne(id).success(
			function(response){
				$scope.entity= response;
				$scope.entity.specIds=JSON.parse($scope.entity.specIds);
				$scope.entity.brandIds=JSON.parse($scope.entity.brandIds);
				$scope.entity.customAttributeItems=JSON.parse($scope.entity.customAttributeItems);

			}
		);				
	}
	
	//批量删除 
	$scope.dele = function(){			
		//获取选中的复选框			
		typeTemplateService.dele($scope.selectIds).success(
			function(response){
				if(response.success){
					$scope.reloadList();
					$scope.selectIds=[];
				}						
			}		
		);				
	}
	
	// 定义搜索对象 
	$scope.searchEntity = {};
	// 搜索
	$scope.search = function(page,size){			
		typeTemplateService.search(page,size,$scope.searchEntity).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;
			}			
		);
	}


	//定义品牌资源
	$scope.brandList={};

	//获取品牌id与name
	$scope.findBrandList = function () {
		brandService.selectOptionList().success(
			function (response) {
				$scope.brandList = {data:response};
			}
		)
	}

	//定义规格资源
	$scope.specList={};
	//获取规格id与name
	$scope.findSpecList = function () {
		specificationService.selectOptionList().success(
			function (response) {
				$scope.specList = {data:response};
			}
		)
	}

	//定义初始化的方法
	$scope.selectInit = function () {
		$scope.findBrandList();
		$scope.findSpecList();
	}

	//添加行
	$scope.addTableRow = function () {
		$scope.entity.customAttributeItems.push({});
	}
	
	//删除行
	$scope.deleteTableRow = function (index) {
		$scope.entity.customAttributeItems.splice(index,1);
	}
    
});	
