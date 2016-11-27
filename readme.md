# ajax_downloader.js
___   
Need to download whatever object is responding from an Ajax call?
ajax_downloader.js will trigger browser's file save event after an Ajax response by Javascript and jQuery.
___
#### Usage:
1. Add script tag for jQuery in the html head.
2. Add script tag for ajax_downloader.js in html head. (after jQuery)
3. Use '$Adl' to define ajax_downlader. ```$Adl( object_for_download, file_extension );```

Example:
```<script>```
&nbsp;&nbsp;&nbsp;&nbsp; ```$.ajax({```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```url:'/api/user/1',```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```method:'get'```
&nbsp;&nbsp;&nbsp;&nbsp; ```}).done(function( response_data ){```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```$Adl( response_data );```
&nbsp;&nbsp;&nbsp;&nbsp; ```});```
```</script>```

Options:
The filename extension is '.json' if it is not specified. You can change the filename extension by:
&nbsp;&nbsp;&nbsp;&nbsp; ```$Adl( object_for_download, "txt" );```
&nbsp;&nbsp;&nbsp;&nbsp; ```$Adl( object_for_download, "js" );```
___
#### Demo:  
Visit https://jsfiddle.net/hszeto/kw5jmLu4/

