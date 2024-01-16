<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization");
header("Content-Type: application/json");

$rockets_url = "https://api.spacexdata.com/v3/rockets";
$capsules_url = "https://api.spacexdata.com/v3/capsules";

$rockets_data = file_get_contents($rockets_url);
$capsules_data = file_get_contents($capsules_url);

$response = [
    'rockets' => json_decode($rockets_data, true),
    'capsules' => json_decode($capsules_data, true),
];

echo json_encode($response);