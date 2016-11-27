$(document).ready(function(){
  // Mock Ajax response
  var mock_ajax_response_data = JSON.stringify( {greeting: "Hello World!", date: new Date()} );

  // Fire up the download!
  $Adl(mock_ajax_response_data, "txt");
  $Adl(mock_ajax_response_data, "js");
  $Adl(mock_ajax_response_data);
});