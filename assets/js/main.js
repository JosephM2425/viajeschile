$(document).ready(function(){
    $('a').click(function(event){
        console.log(this.hash);
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash
            })
        }
    })
    $('[data-toggle="tooltip"]').tooltip(); 
})