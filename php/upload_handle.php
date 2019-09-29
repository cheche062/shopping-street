<?php
  // sae存储文件的方法
  $s = new SaeStorage();

  ob_start();
  readfile($_FILES['fileup']['tmp_name']);
  $img = ob_get_contents();
  ob_end_clean();



?>