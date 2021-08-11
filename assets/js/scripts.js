$(document).ready(function () {
	$('.nav_icon').click(function () {
		$('.menu ul').slideToggle(2000);
		return false;
	})
})


//magnafic popup tajem  psd to html
$('.mag-pop').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});