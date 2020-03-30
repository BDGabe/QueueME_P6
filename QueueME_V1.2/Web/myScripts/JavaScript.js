﻿function previewFile()
{
    var preview = document.querySelector('#preview');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
      preview.src = "../QueueME_v1/Resources/CSS/img/error.png";
  }
}

/**function myFunction()
{
    document.getElementById("frm1").submit();
}*/