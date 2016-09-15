function readSingleFile(evt) {
  //Retrieve the first (and only!) File from the FileList object
  var f = evt.target.files[0]; 

  if (f) {
    var r = new FileReader();
    r.onload = function(e) { 
      var uploadContents = e.target.result;
      //alert(contents);
      var startContent = 'digraph {node [shape=circle fontsize=16] edge [length=100, color=blue, fontcolor=black] ';
      contents = startContent + uploadContents + "}";
      $("#data").val(contents);
      draw();
    }
    r.readAsText(f);
  } else { 
    alert("Failed to load file");
  }
}
document.getElementById('fileinput').addEventListener('change', readSingleFile, false);