# page_apert
简单的前端分页，基本功能实现了，但是代码写的很烂，有待优化。

使用说明：

* 使用该js脚本基于jquery,需要在加载完jquery后加载该脚本，全局暴露了一个page_apert函数，可以在你需要的地方去调用它。
* 将你需要分页的内容包裹在id名为pageCount的div中，显示分页的内容包裹在id名为pagingList的div中，页码显示区包裹在div名为pagelist的div中，里面的上一页下一页id分别为previous，next，页码列表id名为pageIt,样式自己去写。
* page_apert接收一个number型的参数用于指定每一页显示多少条内容。
