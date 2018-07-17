$(document).ready(function() {

    $("#booksSelected").hide();
    $("#showBooksBTN").hide();
    $("#bookSelectedBTN").hide();
    $("#delete").hide();

    var arrayId = [];
    // Capture the form inputs
     $("#fetch").on("click", function (event) {
        event.preventDefault();

        $("#bookSelectedBTN").show();
        $("#showBooksBTN").hide();
    
        // console.log ("Location " + $("#location").val());
        // console.log ("Genre " + $("#genre").val());
    
        var searchObj = {
            kioskid: $("#location").val(),
            genre: $("#genre").val()
        }
        
        var currentURL = window.location.origin;
        $.get(currentURL + "/api/catalog/books" , searchObj, function(data) {
            
            $("#imgSection").empty();
            $("#imgSelect").empty();
            
            for (var i = 0; i < data.length; i++) { 
                var bookDiv = $("<div>");
                var bookImg = "<img class='bookImg' value='" + i + "' src=" + data[i].imgurl + "id='" + data[i].id + "' alt = 'book'>";
                bookDiv.append(bookImg);
                $("#imgSection").prepend(bookImg);
                //console.log(`Data ${data}`);
            }

            $(".bookImg").on("click", function() {
                //console.log($(this).attr("value"));

                if ($(this).hasClass("selected"))
                 {
                    $(this).removeClass("selected");
                    $("#imgSection").prepend($(this));
                } 
                else 
                {
                    $(this).addClass("selected");
                    $("#imgSelect").prepend($(this));
                    
                }
            });

            $("#bookSelectedBTN").on("click", function () {
                $("#books").hide();
                $("#booksSelected").show();
                $("#bookSelectedBTN").hide();
                $("#showBooksBTN").show();
                $("#delete").show();
            });

            $("#showBooksBTN").on("click", function() {
                $("#showBooksBTN").hide();
                $("#bookSelectedBTN").show();
                $("#booksSelected").hide();
                $("#books").show();
                $("#delete").hide();
            });


            $("#delete").on("click",function(){
                //event.preventDefault();
                var currentURL = window.location.origin;
                $(".selected").each(function(){
                    console.log("ID: " + $(this).attr('id'));
                    var id = $(this).attr('id');  
                  
                    $.ajax({
                        method: "DELETE",
                        url: "/api/pickbooks/" + id
                      })
                        .then(function() {
                          console.log("It Worked!");
                         // $(this).attr('id').remove();
                        });

                  
                    //$.post(currentURL + "api/delete",id, function(data) {
                    //console.log(data);
                })
                $("#imgSelect").empty();

            });

        });
     }); //END SUBMIT ON CLICK
    }); //END DOCUMENT READY

