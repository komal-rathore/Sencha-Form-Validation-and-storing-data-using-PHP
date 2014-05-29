

<?php
    $con=mysqli_connect("localhost","root","","sencha");
    header('Access-Control-Allow-Origin: *');

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        header('Access-Control-Allow-Headers: origin, X-Requested-With, Authorization, Content-Type');
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
        exit;
    }
    
    header('Content-type: application/json');
	$fname=$_POST['username'];
	$lname=$_POST['password'];
	$email=$_POST['email'];
	$cno=$_POST['website'];
	$occ=$_POST['aboutyou'];
	mysqli_query($con,"INSERT INTO bathak (fname,lname,email,cno,occupation,address) 
VALUES ('$fname','$lname','$email','$cno','$occ','saveform')");

mysqli_close($con);
    $response = array(
        'success' => true,
        'message' => 'Success: ' . $_POST["email"] . " " . $_POST["aboutyou"]
    );
    echo json_encode($response);
?>
