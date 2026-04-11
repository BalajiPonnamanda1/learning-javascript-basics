<?php include 'config.php'; ?>
<!DOCTYPE html>
<html>
<head>
<title>Kumar Electrical Services</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header class="hero">
    <h1>Kumar Electrical Services ⚡</h1>
    <p>Fast • Reliable • Affordable</p>
    <a href="#contact" class="btn">Contact Now</a>
</header>

<section>
<h2>🔧 Our Services</h2>
<div class="cards">
    <div class="card">House Wiring</div>
    <div class="card">Fan Repair</div>
    <div class="card">Light Installation</div>
    <div class="card">Inverter Setup</div>
</div>
</section>

<section id="contact">
<h2>⭐ Give Feedback</h2>

<form action="submit.php" method="post">
<input type="text" name="name" placeholder="Your Name" required>

<select name="rating">
<option>⭐⭐⭐⭐⭐</option>
<option>⭐⭐⭐⭐</option>
<option>⭐⭐⭐</option>
<option>⭐⭐</option>
<option>⭐</option>
</select>

<textarea name="message" placeholder="Your Feedback"></textarea>

<button type="submit">Submit</button>
</form>
</section>

<section>
<h2>💬 Customer Reviews</h2>

<div class="reviews">
<?php
$result = $conn->query("SELECT * FROM feedback ORDER BY id DESC");

while($row = $result->fetch_assoc()) {
    echo "<div class='review-card'>";
    echo "<h4>".$row['name']."</h4>";
    echo "<span>".$row['rating']."</span>";
    echo "<p>".$row['message']."</p>";
    echo "</div>";
}
?>
</div>

</section>

</body>
</html>