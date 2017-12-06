/*
=======================================================

    ** Week 7 - Project 1  **
*** Ajax and JSON with OMDB ***

This assignment is more open than the past assignments.
You are free to build a simple web page that interacts
with OMBD. It can simply display data within the HTML
page or buttons and text fields can be added to interact
with the data and update the page accordingly.

Have fun!

=======================================================
*/

$('document').ready(function() {
  console.log('JS is connected');
  // TODO: add click handler to button
  $('#search-button').on('click', function() {
    // TODO: write .getJSON request
    var query = $('#search-criteria').val();
    var url = `http://www.omdbapi.com/?apikey=9cdde713&s=${query}`;

    var $xhr = $.getJSON(url);
    $xhr.done(function(results) {
      if($xhr.status !== 200) {
        return;
      }
      console.log('RESULTS: ', results.Search);
      $xhr.fail(function(err) {
        console.log(err);
      });
      // TODO: display the results
      for (var i = 0; i < results.Search.length; i++) {
        var title = results.Search[i].Title;
        var year = results.Search[i].Year;
        $('#results').append('<p>' + title + ', ' + year + '</p>');
      }

    });

  });


});
