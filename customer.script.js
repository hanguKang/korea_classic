/* Author:HtmlCoder
 * Author URI:http://hom2box.com
 * Author e-mail:homebox78@gmail.com
 * Version: 1.0.1
 * Created:October 2015
 * License URI:http://hom2box.com/
 */

/* Author:HtmlCoder
 * Author URI:http://hom2box.com
 * Author e-mail:homebox78@gmail.com
 * Version: 1.0.1
 * Created:October 2015
 * License URI:http://hom2box.com/
 */

(function($){
	$(document).ready(function(){

		// Page Loader
		if (!$('html').is('.ie6, .ie7, .ie8')) {
			/* Loader */
			$(".page-loader-img").delay(600).fadeOut("slow");
			$('.page-loader').delay((3*100)+600).fadeOut(2*100, function () {
				$(this).remove();
			});
		}
		else {
			$(".page-loader").css('display','none');
		}


		// Scroll ToTop
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$(".scrollToTop").fadeIn();
			} else {
				$(".scrollToTop").fadeOut();
			}
		});
		$(".scrollToTop").click(function() {
			$("body,html").animate({scrollTop:0},800);
		});


		// Font Size
		function pxtopt(pxsize) {
			var ptsize = pxsize*72/96;
			return ptsize;
		}
		$(function(){
			$(".zoomin").click(function(){
				var size = parseInt($("#customer_container").css("font-size"));

				if( size < "17"){
					$("#customer_container").css({'font-size':pxtopt(size)+1+"pt"}) ;
				}
			});

			$(".zoomreset").click(function(){
				var size = parseInt($("#customer_container").css("font-size"));

				if( size = "14"){
					$("#customer_container").css({'font-size':pxtopt(size)+"pt"});
				}
			});

			$(".zoomout").click(function(){
				var size = parseInt($("#customer_container").css("font-size"));

				if( size > "14"){
					$("#customer_container").css({'font-size':pxtopt(size)-1+"pt"});
				}
			});
		});


		// SlideBar
		$(".sidebar_wrap .page-label span.clickable").on("click", function (e) {
			if ($(this).hasClass("sidebar-collapsed")) {
				// expand the sidebar
				$(this).parents(".sidebar_wrap").find("#sidebar_navi").slideUp();
				$(this).removeClass("sidebar-collapsed");
				$(this).find("i").removeClass("fa-minus").addClass("fa-plus");
			}
			else {
				// collapse the sidebar
				$(this).parents(".sidebar_wrap").find("#sidebar_navi").slideDown();
				$(this).addClass("sidebar-collapsed");
				$(this).find("i").removeClass("fa-plus").addClass("fa-minus");
			}
		});


		// Panel Collapsed
		$('.panel-heading span.clickable').on("click", function (e) {
			if ($(this).hasClass('panel-collapsed')) {
				// expand the panel
				$(this).parents('.panel').find('.panel-body').slideDown();
				$(this).removeClass('panel-collapsed');
				$(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
			}
			else {
				// collapse the panel
				$(this).parents('.panel').find('.panel-body').slideUp();
				$(this).addClass('panel-collapsed');
				$(this).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
			}
		});


		// Check Toggle
		$( ".btn-check" ).on( "click", function() {
			$( this ).toggleClass( "active" );
		});


		// 스위치
		$(".switch-hb").bootstrapSwitch();


		// 사이즈 변화에 따른 이미지맵
		/*$('img[usemap].area-map').rwdImageMaps();*/

	}); // End document ready

})(this.jQuery);




(function ($) {
  //탭 메뉴
	// Basic Tab
	$.fn.noticetab = function(options, configs) {
		//tab ON OFF
		var tabtitlist = jQuery(this);
		var list_type = (tabtitlist.find('.tab-contents').length)?'ul':'ol';
		tabtitlist.find(list_type).hide().end().find(list_type+':first').show();
		var tablink = tabtitlist.find('.title a');
		jQuery(tabtitlist).each(function(){
			//mouseover
			jQuery(this).find('.title a').bind('click keyup' , function(){
				//jQuery(this).find('.title a').bind('mouseover keyup' , function(){
				jQuery(this).attr("title", "선택됨").parent().siblings('.title').children('a').attr('title','');
				jQuery(tabtitlist).find(list_type).hide();
				var index = $(tablink).index(this);
				var temp = $(tabtitlist).find(list_type)
				$(temp[index]).show();
				$(this).parent().addClass('on').next().addClass('on').end().siblings().removeClass('on');
				$(this).parent().next().addClass('on')
			});
		});
	};

	/* 텍스트애니메이션 플러그인 */
	$.fn.animateNumbers = function(stop, commas, duration, ease) {
		return this.each(function() {
			var $this = $(this);
			var start = Number($this.text().replace(/,/g,""));
			commas = (commas == undefined) ? true : commas;
			$({value: start}).animate({value: stop}, {
				duration: duration == undefined ? 700 : duration,
				easing: ease == undefined ? "swing" : ease,
				step: function(){
					if(commas == true){
						$this.text(Math.floor(this.value).toLocaleString().split(".")[0]);
					}else{
						$this.text(Math.floor(this.value));
					}
				},
				complete: function(){
					if(Number($this.text()) != Number(stop)){
						if(commas == true){
							$this.text(Math.floor(Number(stop)).toLocaleString().split(".")[0]);
						}else{
							$this.text(Math.floor(Number(stop)));
						}
					}
				}
			});
		});
	};
})(jQuery);


// 160504 상단이벤트팝업 레이어
var date = new Date();
var year = String(date.getFullYear());
var month = String(date.getMonth() + 1);
var day = String(date.getDate());

var hours = String(date.getHours());

if (("" + month).length == 1){
	month = "0" + month;
}
if (("" + day).length == 1){
	day = "0" + day;
}
if (("" + hours).length == 1){
	hours = "0" + hours;
}

var todatehours = year + month + day + hours;
var intdate = parseInt(todatehours);
var todate = year + "-" + month + "-" + day;

function main_getCookie(name){
	var nameOfCookie = name + "=";
	var x = 0;
	while (x <= document.cookie.length) {
		var y = (x + nameOfCookie.length);
		if (document.cookie.substring(x, y) == nameOfCookie) {
			if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
				endOfCookie = document.cookie.length;
			return unescape(document.cookie.substring(y, endOfCookie));
		}
		x = document.cookie.indexOf(" ", x) + 1;
		if (x == 0)
			break;
	}
	return "";
}

function main_setCookie( name, value, expiredays ) {
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function main_closeWind( layer_name , form_name ) {
	if ( document.all[form_name].chkbox.checked ){
		main_setCookie( layer_name, "done" , 1 );
	}
	document.all[layer_name].style.visibility = "hidden";
}

//배너 팝업존
//popupzone
(function($){
	$.fn.PopupZone = function(options) {

		var settings = {
			prevBtn : '',
			nextBtn : '',
			playBtn : '',
			waitingTime : ''
		};

		$.extend(settings, options);
		settings.areaDiv = this;
		settings.prevBtn = $(settings.prevBtn);
		settings.nextBtn = $(settings.nextBtn);
		settings.playBtn = $(settings.playBtn);

		settings.cnt = settings.areaDiv.find('.popopTop_list li').length;
		settings.waitingTime = parseInt(settings.waitingTime);
		settings.nowNum = 0;
		settings.moveFlag = true;
		settings.moveType;
		settings.setTimeOut;
		var status=true;

		function emptySetting() {
			settings.areaDiv.find('.count').html(settings.nowNum+1);
			settings.areaDiv.find('.popopTop_list li').hide();
		}
		function setRolling(aniFlag) {
			if(!settings.moveFlag){
				if(settings.moveType=="next" || settings.moveType == null){
					settings.nowNum++;
					if(settings.nowNum == settings.cnt) settings.nowNum = 0;
				} else if(settings.moveType=="prev") {
					settings.nowNum--;
					if(settings.nowNum < 0) settings.nowNum = (settings.cnt-1);
				}
			}
			emptySetting();

			if(aniFlag) settings.areaDiv.find('.popopTop_list li').eq(settings.nowNum).show();
			else settings.areaDiv.find('.popopTop_list li').eq(settings.nowNum).fadeIn('normal');
			// 기본 : aniFlag 설정 없으면 fade 효과 - 조정

			aniFlag = false;
			settings.moveFlag = false;
			if(status){
				settings.setTimeOut= setTimeout(setRolling , settings.waitingTime);
			}
		}
		function playRolling(){
			if(status){
				clearTimeout(settings.setTimeOut);
				settings.playBtn.find('img').attr('src',"/site/gbeWeb/common/css/img/btn_popupTop_stop_on.png");
				settings.playBtn.find('img').attr('alt',"팝업 롤링 재생");
				status = false;
			}else{
				settings.playBtn.find('img').attr('src',"/site/gbeWeb/common/css/img/btn_popupTop_stop.png");
				settings.playBtn.find('img').attr('alt',"팝업 롤링 정지");
				status = true;
				setRolling();
			}
			return false;
		}
		function prevRolling(){
			clearTimeout(settings.setTimeOut);
			settings.moveType = "prev";
			setRolling();
			return false;
		}
		function nextRolling() {
			clearTimeout(settings.setTimeOut);
			settings.moveType = "next";
			setRolling();
			return false;
		}
		setRolling();
		settings.prevBtn.click(prevRolling);
		settings.nextBtn.click(nextRolling);
		settings.playBtn.click(playRolling);

	};
})(jQuery);

$(document).ready(function(){
	$('#popopTop').PopupZone({
		prevBtn : '.popopTop_btn_Prev',
		nextBtn : '.popopTop_btn_Next',
		playBtn : '.popopTop_btn_Play',
		waitingTime : '5000'
	});

	// 탭 선택됨 (웹접근성)
	if($('.tablist').length > 0) {
		$('.tablist li.on a').attr('title','선택됨');
	}
});



function is_ie() {
	if(navigator.userAgent.toLowerCase().indexOf("chrome") != -1) {
		return false;
	}
	if(navigator.userAgent.toLowerCase().indexOf("msie") != -1) {
		return true;
	}
	if(navigator.userAgent.toLowerCase().indexOf("windows nt") != -1) {
		return true;
	}

	return false;
}

function copy_to_clipboard(str) {
	if(is_ie()) {
		window.clipboardData.setData("Text", str);
		alert("복사되었습니다.");

		return;
	}

	prompt("Ctrl+C를 눌러 복사하세요.", str);
}

function cpp(area) {
	var rss = $("input[name*='" + area + "']").val();
	copy_to_clipboard(rss);
}