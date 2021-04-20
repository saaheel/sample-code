<?php



if($_POST){
    echo "<pre>";
        print_r($_POST);
}



?>



<html>
    <body>
        <form method="post" action="">
            <p>Amount Deposit: <input type="text" name="amount" value="5000" /></p>
            <p>Rate of Interest: <input type="text" name="rot" value="10" /></p>
            <p><input type="submit" name="submit" value="Calculate" /></p>
        </form>
    </body>

</html>
