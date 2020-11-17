jQuery(function(){
		jQuery("ul.nav.navbar-nav a").on('click',function(){
			jQuery("html,body").animate({
				scrollTop:jQuery(jQuery.attr(this,'href')).offset().top
			},1000);
		});
		if(window.location.hash){
			scroll(0,0);
			setTimeout(function(){
				 scroll(0,0); 
			},1);
		}
		
		if(window.location.hash){
			jQuery("html,body").animate({
				scrollTop:jQuery(window.location.hash)).offset().top + 'px'
			},1000);
		}
	})
