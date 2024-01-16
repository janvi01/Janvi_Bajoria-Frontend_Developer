<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization");
header("Content-Type: application/json");

$api_url = "https://api.spacexdata.com/v3/rockets";
$data = file_get_contents($api_url);

echo $data;
