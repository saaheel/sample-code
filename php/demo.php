<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = date('r');
//echo "data: The server time is: {$time}\n\n";

$t = 30;

for($i=1;$i<11;$i++){
    $mul = $t*$i;
    echo "data: Table {$t} x {$i} = {$mul} {$_SERVER["REMOTE_ADDR"]}\n\n";
}

flush();
?>