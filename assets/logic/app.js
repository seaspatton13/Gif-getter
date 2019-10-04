 // Initial array
//  var Gifs = ['cat','dog','mouse','rabbit'];

//  function displayGif() {

//    var Gifs = $(this).attr("data-name");
//    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//    person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

//    $.ajax({
//      url: queryURL,
//      method: "GET"
//    }).then(function(response) {

    $("button").on("click", function() {
        var gif = $(this).attr("data-person");
  
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          gif + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
  
        $.ajax({
          url: queryURL,
          method: "GET"
        })
       
          .then(function(response) {
            var results = response.data;
  
            for (var i = 0; i < results.length; i++) {
            
                // Creating a div for the gif
                var gifDiv = $("<div>");
  
                // Creating an image tag
                var gifImage = $("<img>");
  
                gifImage.attr("src", results[i].images.fixed_height.url);
  
                gifDiv.append(gifImage);
  
                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gifs-appear-here").prepend(gifDiv);
              }
            });
          });
