app.controller('baseController',function($scope){
    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 5,
        perPageOptions: [5, 10, 20, 30],
        onChange: function(){
            //切换页码，重新加载
            $scope.reloadList();
        }
    }

    //刷新
    $scope.reloadList = function () {
        $scope.search( $scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    }

    /*删除品牌信息*/
    //获取要删除的id
    //定义一个id的数组
    $scope.selectIds = [];

    $scope.updateSelection = function ($event,id) {

        if($event.target.checked){
            //点击按钮该标签内有checked属性表示被选中,则把id添加到id 数组
            $scope.selectIds.push(id);
        }else{
            //没有checked属性表示取消选中,则从id数组内把该id去除

            //获取该id在数组中的索引
            var idx = $scope.selectIds.indexOf(id);

            //根据索引位置删除该id
            $scope.selectIds.splice(idx,1);
        }

    }


    /*全选*/
    $scope.selectAll = function ($event) {
        $scope.selectIds = [];
        var state = $event.target.checked;
        $(".eachbox").each(function (i,obj) {
            obj.checked = state;
            //获取id
            var id = parseInt($(obj).parent().next().text());
            if(state){
                $scope.selectIds.push(id);
            }else{
                var idx = $scope.selectIds.indexOf(id);
                $scope.selectIds.splice(idx,1);
            }
        })
    }

    //提取json字符串数据中某个属性，返回拼接字符串 逗号分隔
    $scope.jsonToString=function(jsonString,key){
        var json=JSON.parse(jsonString);//将json字符串转换为json对象
        var value="";
        for(var i=0;i<json.length;i++){
            if(i>0){
                value+=","
            }
            value+=json[i][key];
        }
        return value;
    }


})

