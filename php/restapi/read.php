<?php


echo "<pre>";
print_r($_FILES);
print_r($_POST);
print_r($_REQUEST);

$uploadPath = $_SERVER['DOCUMENT_ROOT']."/wp-content/uploads";

$type = $_REQUEST['type']; 
		$reqId = $_REQUEST['reqId']; 
		$region = $_REQUEST['region'];

$fileNames = array();
		if ( 0 < $_FILES['file']['error'] ) {
			echo 'Error: ' . $_FILES['file']['error'] . '<br>';
		} else {
			if(count($_FILES["attachmentProd"]['name'])>0) {  //check if any file uploaded
				for($j=0; $j < count($_FILES["attachmentProd"]['name']); $j++) { //loop the uploaded file array
					$fileName = str_replace(" ","-",$_FILES['attachmentProd']['name'][$j]);
					$fileName = $reqId."-".$fileName;
					move_uploaded_file($_FILES['attachmentProd']['tmp_name'][$j], $uploadPath.'/et-uploads/'.$region.'/' . $fileName);
					$fileNames[] = $_FILES['attachmentProd']['name'][$j];
				}
			}
		}