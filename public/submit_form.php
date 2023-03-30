<?php

$errors = [];

// Verification of data
$required_attributes = [
  "first_name",
  "address",
  "city",
  "state",
  "zip",
  "country",
  "email",
  "tutoring_nature",
  "tutoring_type",
  "service_reception",
  "subject"
];

foreach ($required_attributes as $attribute) {
  if (!isset($_POST[$attribute]) || empty($_POST[$attribute])) {
    $errors[] = "The field $attribute is required.";
  }
}


// Set default values
$default_values = [
  "last_name" => "",
  "phone" => "",
  "hours" => "",
  "info_physical" => FALSE,
  "info_virtual" => FALSE,
];

foreach ($default_values as $attribute => $value) {
  if (!isset($_POST[$attribute])) {
    $_POST[$attribute] = $value;
  }
}

// If there are errors, return to the form
// Put errors in the header as a JSON array
if (!empty($errors)) {
  header("FormErrors: " . json_encode($errors));
  header("Location: /form");
  http_response_code(400);
  exit;
}

$name = trim($_POST["first_name"] . " " . $_POST["last_name"]);

// Send email
$to = getenv("EMAIL_TO");
$subject = "[savants.network] Tutoring request from $name";
$address = "{$_POST['address']} {$_POST['city']} {$_POST['state']} {$_POST['zip']}, {$_POST['country']}";
$message = "
Contact Information:
Name: $name
Address: $address
Email: {$_POST['email']}
Phone: {$_POST['phone']}

Tutoring Information:
Nature: {$_POST['tutoring_nature']}
Type: {$_POST['tutoring_type']}
Reception Preference: {$_POST['service_reception']}
Subject Interests: {$_POST['subject']}
Hours: {$_POST['hours']}
" . $_POST['info_physical'] ? 'I would like to receive information regarding all courses offered in my town, city, or region\n': ''
  . $_POST['info_virtual'] ? 'I would like to receive information regarding all courses offered virtually\n': '';

$headers = [
  "From" => "Savants Network Form <automated-form@savants.network>",
  "Reply-To" => "$name <{$_POST['email']}>",
];
mail($to, $subject, $message, $headers);

http_response_code(204);

?>
