<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Request-Method: POST");
// header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With");


function callAPI($method, $url, $data){
    $curl = curl_init();
    switch ($method){
        case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);
            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            break;
        case "PUT":
            curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);			 					
            break;
        default:
            if ($data)
                $url = sprintf("%s?%s", $url, http_build_query($data));
    }
    
    // OPTIONS:
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    ));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    
    // EXECUTE:
    $result = curl_exec($curl);
    if(!$result){return 'fail';}
    return $result;
    curl_close($curl);
}
 
// print_r($_SERVER);
if($_SERVER['REQUEST_METHOD'] == "POST") {
    if (!isset($_SERVER['PHP_AUTH_USER'])) {
        header('WWW-Authenticate: Basic realm="Access to the staging site"');
        header('HTTP/1.1 401 Unauthorized');
        echo json_encode(
            array("message" => "Please provide login credential")
        );
    } else {
        $user = $_SERVER['PHP_AUTH_USER'];
        $pass = $_SERVER['PHP_AUTH_PW'];

        if($user == 'user' && $pass == 'pass'){
            // tell the user no products found

            $content_decoded = base64_decode ($_REQUEST['content']);
            //Write data back to pdf file
            
            $uploadPath = $_SERVER['DOCUMENT_ROOT'].'/restapi';
            $upload_directory = $uploadPath.'/upload-loa-files/';
            $filePathWriteLoa = $upload_directory.time().'-'.$_REQUEST['file_name'];

            $file_name_loa = fopen ($filePathWriteLoa,'w');
            fwrite ($file_name_loa,$content_decoded);
            //close output file
            fclose ($file_name_loa);

            $updateURI = 'URL_ENDPOINT';

			if (version_compare(PHP_VERSION, '5.5.0', '<')) {
				// Data Array
			}
		
			// PHP Version greater than 5.5
			if (version_compare(PHP_VERSION, '5.5.0', '>=')) {
				// Data Array
			}
            
            $dataArray = [];

            set_time_limit(30);
            $make_call = callAPI('POST', $updateURI, $dataArray);
			set_time_limit(30);

            echo json_encode(
                array("message" => "Done")
            );
        }
        else{
            echo json_encode(
                array("message" => "Invalid credential.")
            );
        }
    }
}else{
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(
        array("message" => "Invalid type.")
    );
}

// database connection will be here


