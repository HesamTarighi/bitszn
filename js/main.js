
$( function() {
	//tabs
    $( "#tabs" ).tabs();
	
	//show hide form
	$(".row-01").click(function(){
    $(".form-block").toggle("fast");
	});
} );
//captcha
function onSubmit(token) {
     document.getElementById("demo-form").submit();
}


//popup
;(function($) {
    $(function() {
        $('.btn-holder .button').bind('click', function(e) {
            e.preventDefault();
            $('#syt').bPopup({
				modalColor: 'rgba(144, 134, 254, 0.6);'
			});
        });
    });
	$(function() {
        $('.td .button').bind('click', function(e) {
            e.preventDefault();
            $('#sc').bPopup({
				modalColor: 'rgba(144, 134, 254, 0.6);'
			});
        });
    });
})(jQuery);

//copy
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
} 