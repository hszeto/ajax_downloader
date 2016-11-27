# ajax_downloader.js
___   
Need to download whatever the object is coming back from an Ajax call?
ajax_downloader.js will trigger browser's file save event after an Ajax response by Javascript and jQuery.
___
#### Usage:
1. Add script tag for jQuery in the html head.
2. Add script tag for ajax_downloader.js in html head. (after jQuery)
3. Use '$Adl' to define ajax_downlader. 

Example:
``` <script>```
```$.ajax({```
```url:'/api/user/1',```
```method:'get'```
```}).done(function( response_data ){```
```$Adl( response_data );```
```});```
``` </script>```

Options:
The filename extension is '.json' if it is not specified. You can change the filename extension by:
```$Adl( object_for_download, "txt" );```
```$Adl( object_for_download, "js" );```
___
#### Demo:
Visit https://jsfiddle.net/hszeto/kw5jmLu4/