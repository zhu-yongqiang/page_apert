var page_apart = function(pagesize){ //设置每页，你准备显示几条

    var a = 1;
    var $li = $('#pageCount li');//获取列表节点
    var liCount = $li.length;//获取获取记录条数
    var pageCount  = Math.ceil(liCount/pagesize);//计算出总共页数
    var currentPage = 1;//设置当前页
    var aArray = [];
    var array = [];
    var prePage;
    var pageArray = getPageArry(array);
    var i=0;

    function getPageArry(array) {
        $li.each(function(){
            array.push(this);
        });
        return array;
    }

    //初始化分页页面
    initPageList();
    function initPageList() {
        $('#pageCount').css("display", "none");
        for(var i = 0; i < pagesize; i ++){
            $('#pagingList').append(pageArray[i]);
        }
        for(i=1; i<= pageCount; i++){
            if(i > 2 && i < pageCount - 2) {
                continue;
            } else if(i == pageCount - 1) {
                $('a:last').html('...');
            }
            $('<a href="#" pageNum="'+i+'" >第'+i+'页</a>').appendTo('#pageIt');//显示分页按钮
            $('a:first').addClass('green');
        }
        aArray = $('#pageIt a');
    }

    //每次点击页码后都重新渲染页码表
    function initPageIt() {
        $('#pageIt').html('');
        if(currentPage <= 3) {
            for(var i = 1; i <= currentPage+1; i ++) {
                $('<a href="#" pageNum="'+i+'" >第'+i+'页</a>').appendTo('#pageIt');
            }
            $('#pageIt').append('<span>...</span>');
            $('<a href="#" pageNum="'+pageCount+'" >第'+pageCount+'页</a>').appendTo('#pageIt');
        }
        if(3 < currentPage && currentPage <= pageCount-3) {
            $('<a href="#" pageNum="'+1+'" >第'+1+'页</a>').appendTo('#pageIt');
            $('#pageIt').append('<span>...</span>');
            for(var i = currentPage-1; i <= currentPage+1; i++) {
                $('<a href="#" pageNum="'+i+'" >第'+i+'页</a>').appendTo('#pageIt');
            }
            $('#pageIt').append('<span>...</span>');
            $('<a href="#" pageNum="'+pageCount+'" >第'+pageCount+'页</a>').appendTo('#pageIt');
        }
        if(currentPage > pageCount-3) {
            $('<a href="#" pageNum="'+1+'" >第'+1+'页</a>').appendTo('#pageIt');
            $('#pageIt').append('<span>...</span>');
            for(var i = currentPage-1; i <= pageCount; i++) {
                $('<a href="#" pageNum="'+i+'" >第'+i+'页</a>').appendTo('#pageIt');
            }
        }

        aArray = $('#pageIt a');
        $('a').each(function(){
            if($(this).attr('pageNum') == prePage) {
                $(this).removeClass('green');
            }
            if($(this).attr('pageNum') == currentPage) {
                $(this).addClass('green');
            }
        })
    }
    //定义显示对应的页数的页面的函数
    function showPage(whichPage){
        $('#pagingList').html('');
        for(i = (whichPage-1)*15; i < 15*whichPage ; i++){
            $('#pagingList').append(pageArray[i]);
        }
    }

    //绑定页码的点击事件
    $('#pageIt').click(function(e){
        var event = e || window.event;
        var target = event.target || event.srcElement;
        console.log(target.tagName);
        if(target.tagName == 'SPAN') {
            return;
        }
        a = $(target).attr('pageNum');
        prePage = currentPage;
        currentPage = parseInt(a);
        initPageIt();
        showPage(currentPage);
    })


    $('#previous').click(function(e){
        prePage = currentPage;
        currentPage--;
        console.log(currentPage);
        initPageIt();
        showPage(currentPage);
    })
    $('#next').click(function(e){
        prePage = currentPage;
        currentPage++;
        console.log(currentPage);
        initPageIt();
        showPage(currentPage);
    })
};
page_apart(15);