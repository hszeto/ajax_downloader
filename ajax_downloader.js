;(function(global, $){

  // Create a new object
  var Adl = function(data, file_extension){
    return new Adl.init(data, file_extension);
  }

  // The actual object creation
  Adl.init = function(data, file_extension){
    var self = this;

    // Set default values
    self.data = data || {};
    self.file_extension = file_extension || 'json';

    // Download data
    (function () {
      // Use date time as the file name
      var nd = new Date();
      var file_name = Date.parse(nd)+"."+self.file_extension;

      // Create blob and link for download click event
      var blob = new Blob([self.data]);
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = file_name;
      link.click();
    })();
  }

  // Attach Adl to the global object and provide a shorthand '$Adl'
  global.Adl = global.$Adl = Adl;

})(window, jQuery);