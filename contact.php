<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Determine which form was submitted
    $formType = $_POST['form_type'];

    // Sanitize form input data
    function sanitize_input($data) {
        return htmlspecialchars(stripslashes(trim($data)));
    }

    // Email function to send emails
    function send_email($to, $subject, $message, $from) {
        $headers = "From: $from\r\n";
        $headers .= "Reply-To: $from\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        return mail($to, $subject, $message, $headers);
    }

    // Process the "Contact Us" form
    if ($formType == 'contact') {
        $name = sanitize_input($_POST['name']);
        $email = sanitize_input($_POST['email']);
        $comments = sanitize_input($_POST['comments']);

        // Validate inputs
        if (!empty($name) && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Save to file
            $file = fopen("contact_submissions.txt", "a");
            fwrite($file, "Name: $name\nEmail: $email\nMessage: $comments\n\n");
            fclose($file);

            // Send email
            $to = "your-email@example.com"; // Replace with your email address
            $subject = "Contact Form Submission from $name";
            $message = "Name: $name\nEmail: $email\nMessage: $comments";
            $from = $email;

            if (send_email($to, $subject, $message, $from)) {
                echo "Contact form submitted successfully and email sent!";
            } else {
                echo "Contact form submitted but email could not be sent.";
            }
        } else {
            echo "Invalid input.";
        }

        
    }
    // Process the "Band Booking" form
    elseif ($formType == 'booking') {
        $name = sanitize_input($_POST['name']);
        $email = sanitize_input($_POST['email']);
        $phone = sanitize_input($_POST['phone']);
        $date = sanitize_input($_POST['date']);
        $time = sanitize_input($_POST['time']);
        $venue = sanitize_input($_POST['venue']);
        $comments = sanitize_input($_POST['comments']);

 // Validate inputs
 if (!empty($name) && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($phone) && !empty($date) && !empty($time) && !empty($venue)) {
    // Save to file
    $file = fopen("booking_submissions.txt", "a");
    fwrite($file, "Name: $name\nEmail: $email\nPhone: $phone\nDate: $date\nTime: $time\nVenue: $venue\nComments: $comments\n\n");
    fclose($file);

    // Send email
    $to = "your-email@example.com"; // Replace with your email address
    $subject = "Band Booking Form Submission from $name";
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nDate: $date\nTime: $time\nVenue: $venue\nComments: $comments";
    $from = $email;

    if (send_email($to, $subject, $message, $from)) {
        echo "Band booking form submitted successfully and email sent!";
    } else {
        echo "Band booking form submitted but email could not be sent.";
    }
} else {
    echo "Invalid input.";
}
}
} else {
echo "Invalid request.";
}
?>