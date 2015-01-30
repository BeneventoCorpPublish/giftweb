/**************************************************
	
	Global
	
	Coded by Park.C.Y & Kim.N.Y
	
**************************************************/
//gnb myzone dropdown menu
$(document).ready(function(){
	$('#gnb .myzone > *').not('ul').click(function(e){
		e.preventDefault();
		$('#gnb .myzoneMenu').slideToggle(200);
	});
});

//top button
function document_topBtn_position(){
	var $btn = $('#footer .topBtn');
	var windowWidth = $(window).width();
	$btn.css({
		'left':(windowWidth/2)+580,
		'bottom':50
	});
};
function document_topBtn_visible(){
	var $btn = $('#footer .topBtn');
	var documentHeight = $(document).height();
	var scrollTop = $(window).scrollTop();
	if(scrollTop>300){
		$btn.fadeIn();
	}else{
		$btn.fadeOut();	
	}
}
$(document).ready(function(){
	document_topBtn_position();
});
$(window).resize(function(){
	document_topBtn_position();
});
$(window).scroll(function(){
	document_topBtn_visible();
});

//checkbox style
$(document).ready(function(){
	$('input[type=checkbox]').each(function(){
		if($(this).is(':checked')==true){
			$(this).parent('label.__checkboxArea').addClass('active');
		}else{
			$(this).parent('label.__checkboxArea').removeClass('active');
		}
	});
	$(document).on('click','input[type=checkbox]',function(){
		if($(this).is(':checked')==true){
			$(this).parent('label.__checkboxArea').addClass('active');
		}else{
			$(this).parent('label.__checkboxArea').removeClass('active');
		}
	});
});

//radio style
$(document).ready(function(){
	$('input[type=radio]').each(function(){
		if($(this).is(':checked')==true){
			$(this).parent('label.__radioArea').addClass('active');
		}else{
			$(this).parent('label.__radioArea').removeClass('active');
		}
	});
	$(document).on('click','input[type=radio]',function(){
		var radio_name = $(this).attr('name');
		$('input[type=radio][name='+radio_name+']').parent('label.__radioArea').removeClass('active');
		if($(this).is(':checked')==true){
			$(this).parent('label.__radioArea').addClass('active');
		}else{
			$(this).parent('label.__radioArea').removeClass('active');
		}
	});
});

//layer popyp
function layer_popup_position(){
	if($('#layer_popup').length>0){
		var $popup = $('#layer_popup');
		var $popup_bg = $('#layer_popup_bg');
		var windowWidth = $(window).width();
		var popup_width = $popup.width();
		$popup.css({
			'left':(windowWidth/2)-(popup_width/2)
		});
		//click close btn
		$(document).on('click','a.close',$popup,function(e){
			e.preventDefault();
			$popup_bg.remove();
			$popup.remove();
		});
	}
}
$(window).resize(layer_popup_position);


/**************************************************
	main
**************************************************/
//main rolling
$(document).ready(function(){
	$('#main .mainVisual').slidesjs({
		navigation:false,
		play:{
          auto:true,
		  interval:2500
        }
	});
	$('#main .rollingBanners > div').slidesjs({
		width:300,
		height:175,
		navigation:false,
		pagination:false
	});
	$('#main .hotBrand .items_container').slidesjs({
		navigation:false,
		play:{
          auto:true,
		  interval:2500
        },
		callback:{
			complete:function(number){
				$('#main .hotBrand .hb_title a').hide().eq(number-1).fadeIn();
			}
		}
	});
});

/**************************************************
	edit_card
**************************************************/
//click card
function edit_card_change(src){
	var $card = $('.edit_cardIMG');
	$card.attr('src',src);
}
$(document).on('click','#layer_popup.edit_card .card_list li img',function(){
	var src = $(this).attr('src');
	edit_card_change(src);
});

/**************************************************
	brand
**************************************************/
//brand rolling
$(document).ready(function(){
	$('#brand .brandGate .item_container').slidesjs({
		navigation:false,
		play:{
          auto:true
        }
	});
});

/**************************************************
	theme
**************************************************/
//theme gate rolling
$(document).ready(function(){
	$('#theme .item_container').slidesjs({
		navigation:false,
		pagination:false,
		play:{
          auto:true
        }
	});
	//click thumbnails
	var $thumbnails = $('#theme .item_container li');
	var $themeBanner = $('#theme .gate img');
	$thumbnails.click(function(e){
		e.preventDefault();
		var src_ch = $('a img',$(this)).attr('src_ch');
		$themeBanner.hide().attr('src',src_ch).fadeIn();
		$thumbnails.removeClass('active_banner');
		$(this).addClass('active_banner');
	});
});

/**************************************************
	details
**************************************************/
//click gift recipient
$(document).ready(function(){
	$(document).on('click','#details .recip_list tbody td a',function(e){
		e.preventDefault();
		var $spr = $('> img',$(this));
		var $item_table = $('table.recip_inner_tb',$(this).parent());
		var path = $spr.attr('src').substring(0,parseInt($spr.attr('src').lastIndexOf('/')+1));
		if($item_table.css('display')=='none'){
			$item_table.show();
			$spr.attr('src',path+'article_table_spr_up.png');
		}else{
			$item_table.hide();
			$spr.attr('src',path+'article_table_spr_down.png');
		}
	});
});

/**************************************************
	buy
**************************************************/
//Toggle menu
$(document).ready(function(){
	$('#buy td[toggleBtns] label input').click(function(){
		$('p[toggle]').hide();
		$('p[toggle='+$(this).parent().attr('toggle')+']').show();
	});
});
//click refunds informations
$(document).ready(function(){
	$(document).on('click','#myzone_refund .refunds_info',function(e){
		e.preventDefault();
		var $spr = $('.title > img',$(this));
		var $txt = $('.text',$(this).parent())
		var path = $spr.attr('src').substring(0,parseInt($spr.attr('src').lastIndexOf('/')+1));
		if($txt.css('display')=='none'){
			$txt.show();
			$spr.attr('src',path+'article_table_spr_up.png');
		}else{
			$txt.hide();
			$spr.attr('src',path+'article_table_spr_down.png');
		}
	});
});

/**************************************************
	faq
**************************************************/
//click list subject
$(document).ready(function(){   
	$("#faq .__article_table tr").click(function(){
		$(this).next('tr.text').slideToggle();
	});
});


