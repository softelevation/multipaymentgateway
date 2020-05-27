$(function() {

//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

// $(".next").click(function(){
	// if(animating) return false;
	// animating = true;
	
	// current_fs = $(this).parent();
	// next_fs = $(this).parent().next();
	
	// // activate next step on progressbar using the index of next_fs
	// $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	// // show the next fieldset
	// next_fs.show(); 
	// // hide the current fieldset with style
	// current_fs.animate({opacity: 0}, {
		// step: function(now, mx) {
			// // as the opacity of current_fs reduces to 0 - stored in "now"
			// // 1. scale current_fs down to 80%
			// scale = 1 - (1 - now) * 0.2;
			// // 2. bring next_fs from the right(50%)
			// left = (now * 50)+"%";
			// // 3. increase opacity of next_fs to 1 as it moves in
			// opacity = 1 - now;
			// current_fs.css({'transform': 'scale('+scale+')'});
			// next_fs.css({'left': left, 'opacity': opacity});
		// }, 
		// duration: 800, 
		// complete: function(){
			// current_fs.hide();
			// animating = false;
		// }, 
		// // this comes from the custom easing plugin
		// easing: 'easeInOutBack'
	// });
// });

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})

});



  
  
  
  
   $(document).ready(function () {

        $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);

                $name.text($tab.text());

                $info.show();
            }
        });

        $('#ChildVerticalTab_1').easyResponsiveTabs({
            type: 'vertical',
            width: 'auto',
            fit: true,
            tabidentify: 'ver_1', // The tab groups identifier
            activetab_bg: '#fff', // background color for active tabs in this group
            inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
            active_border_color: '#c1c1c1', // border color for active tabs heads in this group
            active_content_border_color: '#5AB1D0' // border color for active tabs contect in this group so that it matches the tab head border
        });

    });