
	
		$jQuery(function(){
			var list = jQuery('.eventsnum a');
			list.click(function(){
				
				 var dotoggle = $(this).attr("dotoggle");
 if ( dotoggle == "1" ) {
 jQuery(this).removeClass('active');
  $(this).attr("dotoggle","0");
  }
  else {
  
   jQuery(this).addClass('active');;
  $(this).attr("dotoggle","1");
 }
				return false;
			});
			
			
		});