<?php

?>

<!-- <html>
    <head>
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@nytimes">
        <meta name="twitter:creator" content="@SarahMaslinNir">
        <meta name="twitter:title" content="Parade of Fans for Houston’s Funeral">
        <meta name="twitter:description" content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here.">
        <meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg">
    </head>
</html> -->


<?php  
/* OUTPUT */
// Count tweets for debug
$number_tweets = count($tweet_array['statuses']);
echo "<div class='cols'>";
// Loop through each tweet
foreach ($tweet_array['statuses'] as $tweet ) {
  // Get tweet ID
  $id = $tweet["id"];
  // Create grid item to be targeted by Twitter's widgets.js
  echo "<div class='grid-item'><div id='container-$id'></div></div>";
  // Add to array for JS objet
  $js_array[] = "twttr.widgets.createTweet('$id', document.getElementById('container-$id'));";
}
echo "</div>";
// Begin Javascript
echo '<script>';
// Print out JS to convert items to Tweets
$t = 1;
foreach ($js_array as $js ) {
  echo $js;

  $t++;
}
echo '</script>';

?>

<?php
$tweet_array = json_decode(json_encode($tweets), true);
  // Turn each item into tweet
  foreach ($tweet_array['statuses'] as $tweet ) {
    // Variables
    $tweet_text = $tweet['text'];
    $twitter_username = $tweet['user']['name'];
    $twitter_handle = $tweet['user']['screen_name'];
    $output = "";
    // Blockquote wrapper
    $output .= "<blockquote class='twitter-tweet' data-lang='en'>";
    // Text
    $output .= "<p lang='en' dir='ltr'>$tweet_text</p>";
    // User name and Handle
    $output .= "&mdash; $twitter_username (@$twitter_handle)";
    // Link to tweet
    foreach ($tweet['entities'] as $key) {
      // So don't break search
      if (empty($key)) {
        // Do nothing
      } else {
        // Check for extended_url key
        if (array_key_exists("expanded_url",($key[0]))) {
          // Boolean to confirm retrieval of URL
          $url = true;
          // URL output
          $url_string = $key[0]['expanded_url'];
          $output .= "<a href='$url_string'>$url_string</a>";
        }
      }
    }
    $output .= "</blockquote>";
    // if URL present, output code
    if ($url == true) {
      echo $output;
    }
  }