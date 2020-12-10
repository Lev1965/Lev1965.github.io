// The following  function adds a smooth scrolling to all links

$(document).ready(function(){
    $("a").on('click', function(event){

        // Mare sure this.Link has a value before overriding default behavior
        if (this.Link !== "") {
            //Prevent default anchor click behaviour
            event.preventDefault();

            //Store Link
            var Link = this.Link;

            //Using jQuery's animate() method to add smooth page scroll
            // Tha optional number (2000) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(Link).offset().top
            }, 3000, function(){
                // Add Link (#)to URL when done Scrolling( default click behavior)
            window.location.Link = Link;
            });
        } //End if
    });
});

