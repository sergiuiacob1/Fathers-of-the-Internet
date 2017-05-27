// JavaScript Document
$(document).ready(function () {
	$(window).load(function() {$("#welcome").fadeOut('fast'); })
$('.sl').first().addClass('active');
$('.sl').hide();    
$('.active').show();
$(".buton_optiuni").css("width", $(window).width*5/100);
$(".buton_optiuni").css("height", $(window).height*5/100);
$(".meniu_stanga").hide(0);
$("#negru1").hide(0);
$("#negru2").hide(0);
$("#negru2").css("top", $(window).height()+100);
$("#minus").hide(0);
$(".buton").hide(0);

$(".timeslide").hide(0);


var availableTags = [
    {value: "Vint Cerf: Părinte al Internetului", id:"1b"},
    {value: "Bob Kahn: Părinte al Internetului", id:"2b"},
	{value: "Tim Berners Lee: Inventatorul World Wide Web", id:"3b"},
	{value: "Raymond Samuel Tomlinson: Inventatorul e-mailului", id:"4b"},
	{value: "Michael Hart: Creatorul e-bookului", id:"5b"},
	{value: "Gary Thuerk: Părintele e-spamului", id:"6b"},
	{value: "Marc Andreessen: Părinte al primului browser web pe scară largă", id:"7b"},
	{value: "Jarkko Oikarinen: Părintele chat-ului online", id:"8b"},
	{value: "Robert Tappan Morris: Părintele primului virus pe Internet", id:"9b"},
	{value: "David Bohnett: Inventatorul GeoCities", id:"10b"},
	{value: "Warg Cunningham: Părintele primei enciclopedii pe Internet", id:"11b"},
	{value: "Sabeer Bhatia: Inventatorul Hotmail", id:"12b"},
	{value: "Matt Drudge: Iniţiatorul „Drudge Report”", id:"13b"},
	{value: "Scott Fahlman: Părinte al emoticon-ului", id:"14b"},
	{value: "David Filo: cofondator al YAHOO!", id:"15b"},
	{value: "Jerry Yang: cofondator al YAHOO!", id:"16b"},
	{value: "Jimmy Wales: fondator al Wikipedia", id:"17b"},
	{value: "Niklas Zennström: cofondator al Skype", id:"18b"},
	{value: "Chad Hurley: cofondator al Youtube", id:"19b"},
	{value: "Steve Chen: cofondator al Youtube", id:"20b"},
	{value: "Mark Zuckerberg: cofondatorul și președintele rețelei Facebook", id:"21b"},
	{value: "Sergey Mikhaylovich Brin: Cofondator al companiei Google", id:"22b"},
	{value: "Larry Page: Părinte al motorului de căutare Google", id:"23b"},
	{value: "Caterina Fake: Cofondator al firmelor Flickr și Hunch", id:"24b"},
	{value: "Daniel Stewart Butterfield: Cofondator al firmei Flickr", id:"25b"},
	{value: "Peter Andres Thiel: Fondatorul PayPal", id:"26b"},
	{value: "Pierre Omidyar: Fondatorul eBay", id:"27b"},
	{value: "Steve Paul Jobs: Fondatorul Apple", id:"28b"},
	{value: "Christopher Poole: Fondator 4chan şi Canvas", id:"29b"},
	{value: "Craig Newmark: Fondator Craiglist şi Craigconnects", id:"30b"},
	{value: "Jawed Karim: Cofondator YouTube", id:"31b"},
	{value: "Jeff Bezos: Fondator și CEO al companiei Amazon.com, Inc, Blue Origin", id:"32b"},
	{value: "Joshua Schachter: Creatorul Delicious, GeoURL, şi cofondatorul Memepool", id:"33b"},
	{value: "Julian Assange: Editorul-șef al WikiLeaks", id:"34b"},
	{value: "Dick Costolo: CEO la Twitter", id:"35b"},
	{value: "Bram Cohen: Creatorul BitTorrent", id:"36b"},
	{value: "Reid Hoffman: Fondatorul LinkedIn", id:"37b"},
	{value: "Shawn Fanning: Fondator Napster", id:"38b"}
    ];
$( "#tags" ).autocomplete({
      source: availableTags,
        select:function(event, ui) {
        //window.open(ui.item.url);
		var nume=ui.item.id.replace("b", "s");
		$('#cuprins').slideUp(700);
		$('.sl').slideUp(700);
		$('.active').removeClass('active');
		$('#'+nume).addClass('active');
		$('#'+nume).slideDown(700);        
 		}
});

$('#button-next').click(function(){
	if ($('.active').is(':last-child')) {}
	else
	{$('.active').next().addClass('active');
	$('.active').first().removeClass('active');}
	$('.sl').slideUp(700);
	$('.active').show(0);
	$('.active').slideDown(700);
    });
    
$('#button-previous').click(function(){
    
	if ($('.active').is(':first')) {}
	else
	{$('.active').prev().addClass('active');
	$('.active').last().removeClass('active');}
	$('.sl').slideUp(700);
	$('.active').slideDown(700);
	$('.active').show(0);
    });
	$('#pagina_personalitati').slideUp(0);
	$('#contact').slideUp(0);
	
        
    updateContainer();
    $(window).resize(function() {
        updateContainer();
    });
	
	
	var mouseX, mouseY;
	$(document).mousemove(function(e) {
    	mouseX = e.pageX;
    	mouseY = e.pageY;
	}).mouseover();

});

function apare_meniu() {
	
	$("#plus").hide(0);
	$("#minus").show(0);
	
	$("#negru1").show();
	$("#negru1").animate({left:"+=100"}, 300);
	
	$("#banner_sus").animate({left:"+=100"}, 300);
	
	$("#costel_banner").animate({left:"+=100"}, 300);
	
	$(".buton").show();
	$(".buton").animate({left:"+=100"}, 300);
	
    $(".main_d").animate({left:"+=100"}, 300, function(){
	});
}

function dispare_meniu() {
	$("#plus").show(0);
	$("#minus").hide(0);
	
	$("#negru1").animate({left:"-=100"}, 300, function(){
		$("#negru1").hide();
	});
	
	$("#banner_sus").animate({left:"-=100"}, 300);
	$(".buton").animate({left:"-=100"}, 300, function(){
		$(".buton").hide();
	});
	
	$("#costel_banner").animate({left:"-=100"}, 300);
	
    $(".main_d").animate({left:"-=100"}, 300, function(){
	});
}



function updateContainer() {
	//de la 550 in jos, pt mobil
	if ($(window).width()<=550){
		$('.derulare').addClass('derulare_mobile');
		$('.derulare_mobile').removeClass('derulare');
		
		$('.main_d').addClass('main_d_mobile');
		$('.main_d_mobile').removeClass('main_d');
		
		$('.thumbs').addClass('thumbs_mobile');
		$('.thumbs_mobile').removeClass('thumbs');
		
		$('.panel').addClass('panel_mobile');
		$('.panel_mobile').removeClass('panel');
		
		$('.main_d_mobile').css('width', $(window).width()*95/100);
		$('.derulare_mobile').css('width', $(window).width()*95/100);
		$('.thumb').css('height', $(window).height()/100*20);
		$('#home_page').css('height', $(window).height()/100*70);
		$('#pozawww').css('width', $(window).width());
	}
	else{
		var x=$("#cssmenu").width();
		$("#cssmenu").css("left", $(window).width()/2-200);
		
		$("#negru1").css("height", $(window).height());
		$("#negru1").css("width", "100px");
		
		$('.derulare_mobile').addClass('derulare');
		$('.derulare').removeClass('derulare_mobile');
		
		$('.main_d_mobile').addClass('main_d');
		$('.main_d').removeClass('main_d_mobile');
		
		$('.thumbs_mobile').addClass('thumbs');
		$('.thumbs').removeClass('thumbs_mobile');
		
		$('.panel_mobile').addClass('panel');
		$('.panel').removeClass('panel_mobile');
		
    	$('.main_d').css('width', $(window).width()/100*80);
		$('.main_d').css('left', $(window).width()*10/100);
		$('.derulare').css('width', $(window).width()/100*60);
		$('.panel >img').css('height', $(window).height()/100*40);
		$('.thumb').css('height', $(window).height()/100*5);
		$('.thumbs').css('width', $(window).width()/100*60);
		$('#home_page').css('height', $(window).height()/100*70);
		$('#pozawww').css('width', $(window).width()/100*40);
		
	}
	
}

