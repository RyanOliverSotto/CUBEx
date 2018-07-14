$(document).ready(function() {

    // Capture the form inputs
     $("#fetch").on("click", function (event) {
        event.preventDefault();
    
        console.log ("Location " + $("#location").val());
        console.log ("Genre " + $("#genre").val());
    
        var searchObj = {
            kioskid: $("#location").val(),
            genre: $("#genre").val()
        }
        
        var currentURL = window.location.origin;
        $.get(currentURL + "/api/catalog/books" , searchObj, function(data) {
            
            $("#imgSection").empty();

            for (var i = 0; i < data.length; i++) { 
                var bookDiv = $("<div>");
                var bookImg = "<img class='bookImg' value='" + i + "' src=" + data[i].imgurl + " alt = 'book'>";
                bookDiv.append(bookImg);
                $("#imgSection").prepend(bookImg);
            }

            $(".bookImg").on("click", function() {
                
                if ($(this).hasClass("selected")) {
                    $(this).removeClass("selected");
                } else {
                    $(this).addClass("selected");
                }

            });
        });
     }); //END SUBMIT ON CLICK
    }); //END DOCUMENT READY

