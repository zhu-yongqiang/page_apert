$(function(){
    var pageArray = [];
    var a = 1;
    var liCount = $('li').length;//获取获取记录条数
    var PageSize  = 15;//设置每页，你准备显示几条
    var PageCount  = Math.ceil(liCount/PageSize);//计算出总共页数
    var currentPage = 1;//设置当前页
    
    var i=0;
    $('#pageIt').append('<span id="previous" href="#">上一页</span>')//在pageIt前面放置上一页按钮
    for(i=1; i<=PageCount; i++){
        $('<a href="#" pageNum="'+i+'" >第'+i+'页</a>').appendTo('#pageIt');//显示分页按钮
        $('a:first').addClass('green');
        if(i > 2 && i < PageCount - 1){
            $('a:last').html('.')
        }
    }
    $('#pageIt').append('<span id="next" href="#">下一页</span>')//在pageIt后面放置下一页按钮
    
    var $li =  $('li');
    $li.each(function(){
        pageArray.push(this);
    });
    function add_list(){
        for(i=0;i<PageSize;i++){
            $('#pagingList').append(pageArray[i]);
        }
    }
    add_list();
    function showPage(whichPage){
        $('#pagingList').html('');
        for(i = (whichPage-1)*15; i < 15*whichPage ; i++){
            $('#pagingList').append(pageArray[i]);
        }
    }
    $('a').click(function(){
        $('a').css("color","black");
        $(this).css("color","#71C671");
        a = $(this).attr('pagenum');
        showPage(a);
        return a;
    })
    $('#previous').click(function(){
        if(a==1){
            return;
        }
        console.log(a)
        $('a').css("color","black");
        for(var i = 0;i<pageArray.length;i++){
            if($(pageArray[i]).attr("pageNum")== a){
                $(pageArray[i]).addClass("green");
            }
        }
        add_list();
        showPage(a-1);
        a = a-1;
        return a;
    })
    
});