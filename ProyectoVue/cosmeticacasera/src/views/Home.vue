<template>

  <div class="home"> 
   
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
      <br>
      
        <h3 >Catálogo de Productos</h3>
       <div>
          <div class="container overflow-hidden">
                <div class="row gy-5">
                    <div class="col-4">
                        <div class="p-3 border bg-light">
                            <div class="card" style="width: 18rem;">
                                <img src="@/assets/ArbolTe1.png" class="card-img-top" alt="Imagene Producto">
                                <div class="card-body">
                                    <h5 class="card-title">Aceite de Árbol de Té</h5>
                                    <p class="card-text">Entre los principales beneficios del aceite esencial de Árbol de Té,
                                    destaca que favorece la circulación sanguínea, aumenta el sistema inmunitario mental, 
                                    estimula y da energía. Asimismo, es muy utilizado para el cuidado de la piel grasa y con acné,
                                    así como para actuar ante las picaduras de mosquitos o heridas difíciles de curar.</p>
                                    <router-link to="/aceites" class="btn btn-primary" >Comprar</router-link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                  <div class="col-4">
                <div class="p-3 border bg-light">
                    <div class="card" style="width: 18rem;">
                        <img src="@/assets/tomillo1.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Aceite de Tomillo</h5>
                            <p class="card-text">El aceite esencial de Tomillo del tiene propiedades antibacterianas, antivirales y antifúngicas.
                            Facilita la expectoración y es muy adecuado para la inhalación en casos de resfriados ya que tiene efecto positivo 
                            al tracto respiratorio y ayuda a aliviar tos, bronquitis, dolores de oído y sinusitis. En la piel, también se utiliza 
                            para piel con impurezas y piel con acné.</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>  

<div class="col-4">
                <div class="p-3 border bg-light">
                    <div class="card" style="width: 18rem;">
                        <img src="@/assets/menta1.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Aceite de Menta</h5>
                            <p class="card-text">El aceite esencial de menta es útil en trastornos respiratorios de carácter general.
                                Excelente para la fatiga mental y la depresión. En aromaterapia, se usa contra problemas respiratorios,
                                digestivos, cansancio, dolor de cabeza y tensiones nerviosas. El aceite esencial de menta es casi incoloro,
                                y tiene un olor fuerte y penetrante, dulce y picante.</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>  


    <div class="col-4">
                <div class="p-3 border bg-light">
                    <div class="card" style="width: 18rem;">
                        <img src="@/assets/romero2.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Aceite de Romero</h5>
                            <p class="card-text">El aceite esencial de Romero tiene un aroma fuerte y vigorizante que actúa como descongestionante al sistema respiratorio.
                                Aplicado externamente, el romero del tipo cineol tiene propiedades curativas y calmantes en la cicatrización de heridas y enfermedades fúngicas. 
                                Muy útil en casos de los trastornos circulatorios. Incluso con el cuidado del cabello, especialmente del cabello graso. 
                                Este tipo de aceite esencial de romero también es usado en problemas como trastornos nerviosos, agotamiento mental y apatía.</p>
                                <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>  


      <div class="col-4">
                <div class="p-3 border bg-light">
                    <div class="card" style="width: 18rem;">
                        <img src="@/assets/Llavanda1.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Aceite de Lavanda</h5>
                                <p class="card-text">El aceite esencial de Lavanda tiene propiedades calmantes, 
                                    relajantes y equilibrantes. Es desinfectante y descongestionante, 
                                    antiséptico. Muy buena tolerancia en la piel. Para uso en pieles grasientas, 
                                    con impurezas, acne, piel irritada y con tendencia a alergias, quemaduras y pequeñas heridas,
                                    picaduras de mosquitos, tiene propiedades antimicrobiales. Repele a mosquitos y pollila.</p>
                                <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                    </div>
                </div>
            </div>

         <div class="col-4">
                <div class="p-3 border bg-light">
                    <div class="card" style="width: 18rem;">
                        <img src="@/assets/BlendFlorar1.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Aceite Mezcla Floral</h5>
                            <p class="card-text">Los beneficios, usos y propiedades del Aceite Esencial Mezcla Floral
                                (Lavanda, Rosas, Geranio y aceite de Mandarina,  se usa o sirven para: cosméticos, cremas, jabones, lociones,
                                perfumería, terapéutico, alimentos y aromaterapia. Es excelente emoliente, refrescante, especial para relajar la tensión,
                                es muy delicado para la piel, se recomienda para baños, lociones corporales. Presenta propiedades terapéuticas: analgésico,
                                antialérgico, antiinflamatorio, antidepresivo, antiespasmódico, antiséptico, antiviral, emenagogo, sedante.</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>

<div class="col-4">
                <div class="p-3 border bg-light">
                    <div class="card" style="width: 18rem;">
                        <img src="@/assets/Eucalipto1.png" class="card-img-top" alt="Imagene Producto">
                        <div class="card-body">
                            <h5 class="card-title">Aceite de Eucalipto</h5>
                            <p class="card-text">El aceite esencial de eucalipto, es un poderoso desinfectante 
                                natural con amplio espectro de acción.
                                Abre los pulmones y tiene acción refrescante general. 
                                Tónico vigorizante. Reafirma los tejidos y facilita la cicatrización de heridas.</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>

 <div class="col-4">
                <div class="p-3 border bg-light">
                    <div class="card" style="width: 18rem;">
                        <img src="@/assets/naranja2.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Aceite de Naranja</h5>
                            <p class="card-text">
                                El aceite esencial de naranjas dulces tiene propiedades calmantes, relajantes...
                                y ayuda a mejorar el ánimo.</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>            

 <div class="col-4">
                <div class="p-3 border bg-light">
                    <div class="card" style="width: 18rem;">
                        <img src="@/assets/mandarina1.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Aceite de Mandarina</h5>
                            <p class="card-text">
                                El aceite esencial de mandarina, como otros aceites esenciales se extrae de la cascara de la mandarina y
                                es muy utilizado en la aromaterapia, y posee propiedades antisépticas, antiespasmódicas, depurativas,
                                sedantes, digestivas y tónicas.</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
            </div> 


       </div>
        
      
  </div>     
       </div></div>
      
</template>

<script>
import Contenido from '../components/Contenido.vue'
import Carrusel from '../components/Carrusel.vue'


export default {

  name: 'Home',
  componets:{
    Contenido,
    Carrusel,
  }
}
</script>


