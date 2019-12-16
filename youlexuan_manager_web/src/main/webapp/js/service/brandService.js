//定义一个服务层
//参数一:服务的名字
//参数二:服务干的事情
app.service('brandService',function ($http) {
    this.findAll = function () {
        return $http.get('../brand/findAll.do');
    }

    this.findPage = function (page,size) {
        return $http.get('../brand/findPage.do?page=' + page + '&size=' + size);
    }

    this.search = function (page,size,searchEntity) {
        return $http.post('../brand/search.do?page='+page+'&size='+size,searchEntity);
    }

    this.save = function (entity) {
        /*新增*/
        var methodName='add';
        if(entity.id != null){
            /*修改*/
            methodName = 'update';
        }
        return $http.post('../brand/'+methodName+'.do',entity);
    }

    this.findOne = function (id) {
        return $http.get('../brand/selectOne?id='+id);
    }

    this.delete = function (selectIds) {
        return $http.get('../brand/delete.do?ids='+selectIds);
    }

    /*获取品牌的id和name*/
    this.selectOptionList = function () {
        return $http.get('../brand/selectOptionList.do');
    }

})