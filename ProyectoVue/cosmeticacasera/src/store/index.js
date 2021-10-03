import { createStore } from 'vuex'

export default createStore({
  state: {

     
categorias:[
  
  {
    categoria:"HD",
    nombre:"HIDROLATOS",
    nombre_foto:"H_P.png",
    urlfoto:"/assets/H_P.png",
    contenido:"Cuando se destila una planta aromática, en un alambique, después de todos los procesos que se producen, por el arrastre de corriente de vapor de agua obtenemos dos productos finales PUROS. En la parte de arriba, queda el aceite esencial. Es un líquido que contiene moléculas aromáticas, de baja densidad (por ello quedan en la parte de arriba). Volátiles. Y son solubles en grasas (liposolubles), por ello se absorben tan bien por la piel."
            },
      
  {
  
  categoria:"AV",
  nombre:"ACEITES VEGETALES PUROS",
  nombre_foto:"AV_P.png",
  urlfoto:"/assets/AV_P.png",
  contenido:"Los aceites vegetales son sustancias de naturaleza grasa e insolubles en agua, líquidos a temperatura ambiente. Normalmente se obtienen por prensado de semillas o frutos y son ricos en ácidos grasos insaturados.La utilización de aceites naturales para uso cosmético no es algo nuevo, ya que se ha estado utilizando hace siglos como tratamiento de belleza."
},
{
  categoria:"AM",
  nombre:"ACEITES VEGETALES MACERADOS",
  nombre_foto:"AM_P.png",
  urlfoto:"/assets/AM_P.png",
  contenido:"El aceite de maceración es el resultado de una maceración de plantas (hojas, flores, raíces, tallos) en un aceite vegetal. El aceite vegetal absorbe los principios activos contenidos en la planta. Entre los aceites base comúnmente utilizados para macerar se encuentran, entre otros, los de oliva o girasol.Algunas plantas que no contienen una cantidad suficiente de aceite para obtenerlo mediante prensión en frío, y ahí es donde entra en escena la maceración."
  
},
{
  categoria:"AE",
  nombre:"ACEITES ESENCIALES",
  urlfoto:"/assets/AE_P.png",
  contenido:"Los aceites esenciales son concentrados que se extraen directamente de árboles y plantas aromáticas. Al obtenerse de forma tan directa, se les considera aceites puros, y contienen un sinfín de propiedades que pueden ayudar muy positivamente si se usan bien (nunca directamente; siempre diluidos en otros elementos)."
          },

  {
    categoria:"MT",
    nombre:"MANTECAS Y CERAS",
    nombre_foto:"MT_P.png",
    urlfoto:"/assets/MT_P.png",
    contenido:""
  },
  
{ 
  categoria:"ARC",
  nombre:"ARCILLAS",
  nombre_foto:"A_P.png",
  urlfoto:"/assets/A_P.png",
  contenido:""

},
{
  categotria:"KIT",
  nombre:"KIT COSMETICA NATURAL",
  nombre_foto:"",
  urlfoto:"",
  contenido:""
}
]
     
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
