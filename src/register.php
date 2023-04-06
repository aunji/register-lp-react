<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
     
     
    $name = $request->name;
    $surname = $request->surname;
    $email = $request->email;
    $tel = $request->tel;
    $password = $request->password;
    $occupation = $request->occupation;
    $address = $request->address;
    $district = $request->district;
    $city = $request->city;
    $province = $request->province;
    $zip = $request->zip;
    $location_id = $request->location_id;
    $bank_id = $request->bank_id;
    $amount = $request->amount;
    $date = $request->date;
    $time = $request->time;
    $path = $request->path;
    $created = $request->created;

    $sql = "INSERT INTO users (name,surname,tel,email,password,occupation,address,district,city,province,zip,loction_id,bank_id,amount,date,time,path,created) 
    VALUES ('$name','$surname','$tel','$email','$password','$occupation','$address','$district','$city','$province','$zip','$loction_id','$bank_id','$amount','$date','$time','$path','$created')";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
    }
    else{
         http_response_code(422); 
    }
         
}

?>