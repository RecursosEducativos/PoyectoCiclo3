<template>
    
<div class="container">

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    
                    <img src="@/assets/ppal-carrusel1.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>Esencias</h5>
                    <p > Nuestros productos son 100% naturales.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/ppal-carrusel2.jpg"  class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>Aceites</h5>
                    <p>Nuestros productos son 100% naturales.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/ppal-carrusel3.jpg"  class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    <h5 style="color: dimgray;">Mascarillas</h5>
                    <h6 style="color: dimgray;"><p> Nuestros productos son 100% naturales.</p></h6>
                    </div>
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>
</div>        
    
  
</template>

<script>
export default {
  name: 'Carrusel',
    
  }

</script>