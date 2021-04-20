<?php

$dir = getcwd();

// Open a directory, and read its contents
if (is_dir($dir)){
  if ($dh = opendir($dir)){
    while (($file = readdir($dh)) !== false){
        $filetype = mime_content_type($file);
        if($filetype == "text/x-php" && $file != "index.php"){
            echo "<a href='./".$file."' target='_blank'>" . $file . "</a><br>";
        }
            
    }
    closedir($dh);
  }
}

?>
