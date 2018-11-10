$(function(){
    /**
     * 根据用户输入的关键字获取搜索结果
     * 
     * 1.获取到地址栏中用户输入的搜索关键字
     * 2.用关键字去调取搜索接口
     * 3.将搜索结果展示在页面中
     */

     var keyword = getParamsByUrl(location.href, 'keyword');
    //  console.log(keyword)

    $.ajax({
        url: '/product/queryProduct',
        type:'get',
        data: {
            page: 1,
            pageSize: 6,
            proName: keyword
        },
        success: function(response){
            console.log(response);
            var html = template('searchTpl', response);
            $('#search-box').html(html)
        }
    })

})

/**
 * 获取地址栏中的参数
 * @param {string} url 地址字符串
 * @param {string} name 要获取的参数名称
 * @param {string}      参数名称对应的参数值
 */

 function getParamsByUrl(url,name) {
     var params = url.substr(url.indexOf('?')+1);
     var param = params.split('&');
     for(var i = 0; i < param.length; i++){
        var current = param[i].split('=');
        if(current[0] == name){
           return current[1]; 
        }
     }
     return null;
 }