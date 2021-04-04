<?php
# Add the root path
include_once('path.php');

include_once('app/include/header.php');

?>
<!-- services Section
   ================================================== -->
   <section id="services">

<div class="overlay"></div>

<div class="row section-intro">
   <div class="col-twelve">

       <h5>Services</h5>
       <h1>What Can I Do For You?</h1>

       <p class="lead">These are some of the services we provide for our customers.</p>

   </div>   		
</div> <!-- /section-intro -->

<div class="row services-content">

   <div id="owl-slider" class="owl-carousel services-list">

      <div class="service">	

          <span class="icon"><i class="icon-earth"></i></span>            

        <div class="service-content">	

             <h3>Webdesign</h3>

            <p class="desc">We help you to design beautiful simple and attractive website interface for our clients.
             </p>
             
         </div> 	         	 

        </div> <!-- /service -->

        <div class="service">	

            <span class="icon"><i class="icon-window"></i></span>                          

        <div class="service-content">	

            <h3>Web Development</h3>  

            <p class="desc">We build website from scratch for our customers. We do static, responsive and or dynamic website and we also handle both the backend and the frontend development for our clients.
             </p>

        </div>	                          

       </div> <!-- /service -->

       <div class="service">

           <span class="icon"><i class="icon-paint-brush"></i></span>		            

        <div class="service-content">

            <h3>Branding</h3>

            <p class="desc">We also help our clients in the area of branding of their products.
                </p> 

        </div> 	            	               

       </div> <!-- /service -->

        <div class="service">

            <span class="icon"><i class="icon-toggles"></i></span>	              

        <div class="service-content">

            <h3>UI/UX Design</h3>

            <p class="desc">We develop friendly and beautiful user interfaces for our cleints.
             </p> 
             
        </div>                

        </div> <!-- /service -->

       <div class="service">

           <span class="icon"><i class="icon-image"></i></span>	            

        <div class="service-content">

            <h3>Graphics Design</h3>

            <p class="desc">We also help in the graphic designing for our clients. We deal with logo, banners, flyers etc.</p> 

        </div>	               

       </div> <!-- /service -->

       <div class="service">

           <span class="icon"><i class="icon-chat"></i></span>	   	           

        <div class="service-content">

             <h3>Consultancy</h3>

            <p class="desc">We also provide consultancy in the field of we development for our clients.
                </p> 
                
        </div>	               

       </div> <!-- /service -->

  </div> <!-- /services-list -->
   
</div> <!-- /services-content -->

</section> <!-- /services -->	
<?php
# Counter of projects and hours section.
include_once('stats.php');


# Footer section of page.
include_once('app/include/footer.php');