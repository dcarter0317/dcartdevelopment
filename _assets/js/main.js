(function(){


(function selectNavLink(){
  var navLink = $('.breadcrumbs a'),
      linkAttr = navLink.html(),
      pageLoc = window.location.href.slice(59);
  

     
      navLink.on("click", function(e){
      	var $this = $(this);
      	
         if($this.hasClass() === "selected"){
         	$this.removeClass("selected");		 
         }else{
         	$this.addClass("selected");
         } 
                
      });
      
  console.log(linkAttr);
  console.log(pageLoc);
}());


$('.slider').glide({
	navigation: false,
	autoplay: false,
	arrowRightText: '',
	arrowLeftText: ''
});

// do not delete
  	var crDate = new Date(),
        ytd = crDate.getFullYear();
    $('.copy').text(ytd);

}());
