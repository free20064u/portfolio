<?php
# Add the root path
include_once('path.php');

include_once('app/include/header.php');

?>



<!-- about section
   ================================================== -->
   <section id="about">  

   	<div class="row section-intro">
   		<div class="col-twelve">

   			<h5>About</h5>
   			<h1>Let me introduce myself.</h1>

   			<div class="intro-info">

   				<img src="<?php ROOT_PATH?>assets/images/profile.jpg" alt="Profile Picture">

   				<p class="lead">I am new to web development. I started self tutoring about six month ago and am now able to develop website to a hight standard using PHP, PYTHON and MYSQL. Even though am new am very good and focus on any thin i want to do.</p>
   			</div>   			

   		</div>   		
   	</div> <!-- /section-intro -->

   	<div class="row about-content">

   		<div class="col-six tab-full">

   			<h3>Profile</h3>

   			<ul class="info-list">
   				<li>
   					<strong>Fullname:</strong>
   					<span>Alfred Alabi Borteye</span>
   				</li>
   				<li>
   					<strong>Birth Date:</strong>
   					<span>March 1, 1990</span>
   				</li>
   				<li>
   					<strong>Job:</strong>
   					<span>Freelancer, Frontend Developer, Backend Developer, Chemistry tutor</span>
   				</li>
   				<li>
   					<strong>Website:</strong>
   					<span>www.alfysweb.com</span>
   				</li>
   				<li>
   					<strong>Email:</strong>
   					<span>free20064U@gmail.com</span>
   				</li>

   			</ul> <!-- /info-list -->

   		</div>

   		<div class="col-six tab-full">

   			<h3>Skills</h3>

				<ul class="skill-bars">
				   <li>
				   	<div class="progress percent90"><span>90%</span></div>
				   	<strong>HTML5</strong>
				   </li>
				   <li>
				   	<div class="progress percent85"><span>85%</span></div>
				   	<strong>CSS3</strong>
				   </li>
				   <li>
				   	<div class="progress percent70"><span>70%</span></div>
				   	<strong>JQuery</strong>
				   </li>
				   <li>
				   	<div class="progress percent95"><span>95%</span></div>
				   	<strong>PHP</strong>
				   </li>
				   <li>

				   	<div class="progress percent75"><span>75%</span></div>
				   	<strong>Python</strong>
				   </li>
      
				</ul> <!-- /skill-bars -->		

   		</div>

   	</div>

   	<div class="row button-section">
   		<div class="col-twelve">
   			<a href="<?php ROOT_PATH?>contact.php" title="Hire Me" class="button stroke">Hire Me</a>
   			<a href="#" title="Download CV" class="button button-primary">Download CV</a>
   		</div>   		
   	</div>

   </section> <!-- /process-->    

   <?php

   include_once('app/include/footer.php');
