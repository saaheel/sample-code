<?php 
// include config and twitter api wrappe
require_once( 'config.php' );
require_once( 'TwitterAPIExchange.php' );

// settings for twitter api connection
$settings = array(
    'oauth_access_token' => TWITTER_ACCESS_TOKEN, 
    'oauth_access_token_secret' => TWITTER_ACCESS_TOKEN_SECRET, 
    'consumer_key' => TWITTER_CONSUMER_KEY, 
    'consumer_secret' => TWITTER_CONSUMER_SECRET
);

$twitter = new TwitterAPIExchange( $settings );


$file = file_get_contents('quote.jpg');
$data = base64_encode($file);

// Upload image to twitter
$url = "https://upload.twitter.com/1.1/media/upload.json";
$method = "POST";
$params = array(
    "media_data" => $data,
);

$json = $twitter
->buildOauth($url, $method)
->setPostfields($params)
->performRequest();

// Result is a json string
$res = json_decode($json);
// Extract media id
$id = $res->media_id_string;

$url = 'https://api.twitter.com/1.1/statuses/update.json';
$requestMethod = 'POST';
$postfields = array(
    'media_ids' => $id,
    'in_reply_to_status_id' => '@bloggingpages',
    'status' => 'Sharing Quote for today-2 ' 
);

echo "<pre>";
print_r($postfields);
// die();
if(strlen($postfields['status']) <= 140)
{
//$twitter = new TwitterAPIExchange($settings);
echo $twitter->buildOauth($url, $requestMethod)
->setPostfields($postfields)
->performRequest();
}else{
echo "140 char exceed";
}