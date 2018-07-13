$(function(){

    // Capture the form inputs
     $("#fetch").on("click", function (event) {
        event.preventDefault();
    
        console.log ("Location " + $("#location").val());
        console.log ("Genre " + $("#genre").val());
    
        var searchObj = {
            location: $("#location").val(),
            genre: $("#genre").val()
        }
    
        $.get("/api/catalog/books" , searchObj, function(data) {
            console.log("Inside Get function");
        });
    
        
     }); //END SUBMIT ON CLICK
    
    
    }); //END DOCUMENT READY