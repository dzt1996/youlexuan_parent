package com.offcn.sellergoods.service;

import com.offcn.entity.PageResult;
import com.offcn.entity.Result;
import com.offcn.pojo.TbBrand;
import com.sun.javafx.logging.PulseLogger;

import java.util.List;
import java.util.Map;

public interface BrandService {

    public List<TbBrand> findAll();

    public PageResult findPage(int pageNum,int pageSize);

    public void add(TbBrand brand);

    public void update(TbBrand brand);

    public void delete(Long[] ids);

    public TbBrand selectOne(Long id);

    public PageResult findPage(int pageNum,int pageSize,TbBrand brand);

    public List<Map> selectOptionList();



}
