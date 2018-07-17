$(document).ready(function() {
    $("#addSubmit").on("click", function() {
        event.preventDefault();
        
        //check if user has entered a valid title
        var inputTitle = $("#titleInput").val();
        console.log(inputTitle);

        if(inputTitle !== null && inputTitle !== ""){
                console.log("Inside if " + inputTitle);

                var newBook = {
                KioskId: $("#location").val(),
                title: $("#titleInput").val(),
                author: $("#authorInput").val(),
                genre: $("#genre").val()
            }
            console.log("This is the NEw Book: ", newBook);
            var currentURL = window.location.origin;
            $.post(currentURL + "/api/addBook", newBook, function(data) {

                console.log(data.title);
                $("#bookTitle").text("Title:" + data.title);
                $("#bookAuthor").text("By: " + data.author);

                var divImg = $("<div>");
                var image = $("<img>");
                image.attr("src", data.imgurl);
                image.addClass("modalImage");
                divImg.append(image);
                $("#bookImage").prepend(divImg);
            });
        
        } //end of if
        // else{
        //     alert("Please enter a title for the book");
        //     $("#titleInput").focus();
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
    });

});
