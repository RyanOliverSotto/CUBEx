$(document).ready(function() {
    $("#addSubmit").on("click", function() {
        event.preventDefault();
        
        //check if user has entered a valid title
        var inputTitle = $("#titleInput").val();

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
                $("#bookTitle").text(data.title);
                $("#bookAuthor").text(data.author);
            });
        
        } //end of if
        else{
            alert("Please enter a title for the book");
            $("#titleInput").focus();
            event.preventDefault();
            event.stopPropagation();
        }
    });

});
