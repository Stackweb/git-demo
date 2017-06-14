/**
 * Created by Administrator on 2017/5/16.
 */

$(function () {
	function resize() {
		//获取屏幕宽度
		var windowWidth = $(window).width();
	    //判断屏幕是大屏还是小屏
	    var isSmallScreen = windowWidth < 768;
	    //根据屏幕大小为每张轮播图设置背景图片
	    $('#main-ad > .carousel-inner > .item').each(function(i,item){
	    	var $item = $(item);//因为拿到的是DOM对象，所以需要转换
	    	var imgSrc = isSmallScreen ? $item.data('image-sm') : $item.data('image-lg');
	    	$item.css('backgroundImage','url("'+imgSrc+'")');

	    	//如果是小图，则换成img标签方式显示，不用背景图方式(img方式可以让图片自适用)
	    	if (isSmallScreen) {
	    		$item.html('<img src="'+imgSrc+'" alt="" />');
	    	}else{
	    		$item.empty();	    		
	    	};
	    });
	}
	$(window).on('resize',resize).trigger('resize');

    // 初始化工具提示组件
	$('[data-toggle="tooltip"]').tooltip();

	/**
	 * 控制标签页的标签容器宽度
	 */
	var $ulContainer = $('.nav-tabs');
	//获取所有子元素li的宽度和
	var width = 30;  //本身有一个20px的padding-left，所以初始width需要加上，可能还有边框，所以width设置的稍微大一些
	//遍历子元素，得到width
    $ulContainer.children().each(function(index, el) {
    	width += el.clientWidth;
    });

    //判断当前ul宽度是否超出屏幕，如果超出，才设置ul的宽度为li的总和；否则，宽度为100%
    if (width > $(window).width()) {
    	$ulContainer
    	  .css('width',width)
    	  .parent().css('overflow-x','scroll');
    };    
});


