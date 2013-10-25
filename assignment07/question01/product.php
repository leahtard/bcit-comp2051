<?php

$id = $_POST["id"];

mysql_connect('localhost', 'root', 'root') or die('Error connecting to server');
mysql_select_db('bcitassign7') or die('Error connecting to database');
$query = 'SELECT * FROM products WHERE id = '.$id;
$result = mysql_query($query);

if (mysql_num_rows($result) == 0) {
	echo "Product id can not be found.";
	return;
}

$row = mysql_fetch_array($result);

echo "Product id: {$row['id']} <br>";
echo "Product name: {$row['name']} <br>";
echo "Product cost: {$row['cost']} dollars<br>";

?>