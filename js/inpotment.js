<script type="text/javascript">
	
		jQuery(function(){
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
</script>

<script type="text/javascript">
//弹出隐藏层
function ShowDiv(show_div,bg_div){
document.getElementById(show_div).style.display='block';
document.getElementById(bg_div).style.display='block' ;
var bgdiv = document.getElementById(bg_div);
bgdiv.style.width = document.body.scrollWidth;
// bgdiv.style.height = $(document).height();
$("#"+bg_div).height($(document).height());
};
//关闭弹出层
function CloseDiv(show_div,bg_div)
{
document.getElementById(show_div).style.display='none';
document.getElementById(bg_div).style.display='none';
};
</script>