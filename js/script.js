var images = new Array();
var i=0;
			function init()
			{
				var fileApi = (window.File && window.FileReader);
				if(!fileApi)
				{
					alert('browser not supported');
					return;
				}
			document.getElementById("filedrop").addEventListener("drop", onFilesDropped);
			document.getElementById("filedrop").addEventListener("dragover", onDragOver);
			}
			
			function next()
			{
			
			if(i != images.length-1)
				{ $('#pic').html('<img id="sm" src="'+images[i+1]+'" alt="" style="width:100%;height:100%;" />');
				
				 i = i+1;
				 }	 
			}
			
			function prev()
			{
			if(i >=1)
				{ $('#pic').html('<img src="'+images[i-1]+'" alt="" style="width:100%;height:100%;" />');
				 i = i-1;
				 }
			}
			
			function onDragOver(theEvt)
			{
				theEvt.stopPropagation();
				theEvt.preventDefault();
			}
			
			function pickme(i)
			{			
				if(!images[i].length)
				{
				$('#pic').html('<img src="'+images[i]+'" alt="" style="width:100%;height:100%;" />');	
				}
				if(images[i])
				{
				$('#pic').html('<img src="'+images[images.length+1]+'" alt="" style="width:100%;height:100%;" />');	
				}
			}
			function onFilesDropped(theEvt)
			{
				theEvt.stopPropagation();
				theEvt.preventDefault();
				
				var files = theEvt.dataTransfer.files;
				var totalBytes=0;
				
				$('#pic').html('<img src="'+files[0].name+'" alt="" style="width:100%;height:100%;" />');
				
				for (var i=0;i<files.length;i++)
				{
				$('#smallpics').append('<img id="slide'+i+'" src="'+files[i].name+'" alt="" width="75px" height="75px" onclick="pickme('+i+')"  />&nbsp;&nbsp; ');
				images.push(files[i].name);
				console.log(files[i].name);
					
			var fileInfo = "<p>File name: " + files[i].name + "; size: " + files[i].size + "; type: " + files[i].type + "</p>";
            totalBytes += files[i].size;			
            document.getElementById('filedata').innerHTML += fileInfo;
				}
			document.getElementById('filedata').innerHTML += "<p>Total of " + files.length + " files, " + totalBytes + " bytes.";
			}
			
			window.addEventListener("load",init);