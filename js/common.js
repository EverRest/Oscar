$(document).ready(function () {
	//jQuery UI tooltips
	$(document).tooltip();
	//Waypoint
	var navLi = $('.menu');

	$('.tracked').waypoint(function () {
		var hash = $(this).attr('id');
		$('.menu a').removeClass('selected-section');

		$.each( navLi, function() {
			if ($(this).children('a').attr('href').slice(1) == hash) {
				$(this).children('a').addClass('selected-section');
			};
		});
	}, {
		offset:'30%'
	});

	//init BXslider
	$('.bxslider').bxSlider({
		adaptiveHeight: true,
		mode: 'fade',
		captions: true,
		auto: true,
		autoControls: true,
  		slideMargin: 15
	});

	//

	//ajax form sending
	$("#callback").submit(function () {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done( function () {
			alert("Ми зв'яжемося з Вами!");
			setTimeout(function () {
				$.fancybox.close();
			}, 100);
		});
		return false;
	});

	//init Fancybox
	//$(".fancybox").fancybox();
	
	//modal form jQuery UI
	$('.phone-link').click(function () {
		$('#callback').dialog({
			height: 300,
			width: 400,
			modal: true,
		});
	});
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    //Services "tabs"
    $(".btn-services").click(function() {
		var btn_id = $(this).attr('id');
		var divs = $('.hidden_text');
		
		$.each(divs, function() {
			if ($(this).attr('data-services') == btn_id) {
				$(this).slideToggle(300);
			};
		});
    });

    // #callback form's script

    $('.form-input').focusout(function () {
    	$(this).css('background-color','#fff');
    });

    $('.form-input').focus(function () {
    	$(this).css('background-color','rgba(52, 152, 219,.1)');
    });

});