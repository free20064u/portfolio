<?php

define("ROOT_PATH", realpath(dirname(__FILE__)));
define("BASE_URL", "http://localhost:9090/");


function head(){
    echo '<!DOCTYPE html>
    <!--[if IE 8 ]><html class="no-js oldie ie8" lang="en"> <![endif]-->
    <!--[if IE 9 ]><html class="no-js oldie ie9" lang="en"> <![endif]-->
    <!--[if (gte IE 9)|!(IE)]><!--><html class="no-js" lang="en"> <!--<![endif]-->
    <head>
    
       <!--- basic page needs
       ================================================== -->
       <meta charset="utf-8">
        <title>Kards</title>
        <meta name="description" content="">  
        <meta name="author" content="">
    
       <!-- mobile specific metas
       ================================================== -->
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
         <!-- CSS
       ================================================== -->
       <link rel="stylesheet" href="'. ROOT_PATH .'css/base.css">  
       <link rel="stylesheet" href="css/main.css">
       <link rel="stylesheet" href="css/vendor.css">     
    
       <!-- script
       ================================================== -->   
        <script src="assets/js/modernizr.js"></script>
        <script src="assets/js/pace.min.js"></script>
    
       <!-- favicons
        ================================================== -->
        <link rel="icon" type="image/png" href="assets/images/favicon.png">
    
    </head>';
}