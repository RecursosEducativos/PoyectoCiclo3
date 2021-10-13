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
    contenido:"Las mantecas y ceras son ingredientes esenciales en la cosmetología. Uno de los principales aportes de las mantecas y ceras es su poder para conferir diversas texturas a los productos.En la creación de cremas y jabones para el rejuvenecimiento facial"
  },
  
{ 
  categoria:"ARC",
  nombre:"ARCILLAS",
  nombre_foto:"A_P.png",
  urlfoto:"/assets/A_P.png",
  contenido:"En general todas las arcillas por su composición rica en aluminio son potentes desinfectantes y antimicrobianos, recordar la piedra de alumbre y su uso antiséptico. Por su grano fino son un magnifico exfoliante o micropeeling natural, son el grano mineral más fino que hay!"

}

],

productos:[
  {codigo:"ARC-250B",categoria:"ARC",nombre:"ARCILLA BLANCA",descripcion:"ARCILLA BLANCA 250 GR",presentacion:"250 GR",inv:20,precio:34000,disponibilidad:"SI", imagen:"arcilla1.png"},
  {codigo:"ARC-250M",categoria:"ARC",nombre:"ARCILLA AMARILLA",descripcion:"ARCILLA AMARILLA 250 GR",presentacion:"250 GR",inv:20,precio:34000,disponibilidad:"SI", imagen:"arcilla2.png"},
  {codigo:"ARC-250A",categoria:"ARC",nombre:"ARCILLA AZUL",descripcion:"ARCILLA AZUL 250 GR",presentacion:"250 GR",inv:20,precio:45000,disponibilidad:"SI", imagen:"arcilla3.png"},
  {codigo:"ARC-250R",categoria:"ARC",nombre:"ARCILLA ROJA",descripcion:"ARCILLA ROJA 250 GR",presentacion:"250 GR",inv:20,precio:34000,disponibilidad:"SI", imagen:"arcilla4.png"},
  {codigo:"ARC-250V",categoria:"ARC",nombre:"ARCILLA VERDE",descripcion:"ARCILLA VERDE 250 GR",presentacion:"250 GR",inv:20,precio:34000,disponibilidad:"SI", imagen:"arcilla5.png"},
  {codigo:"ARC-250U",categoria:"ARC",nombre:"ARCILLA UVA",descripcion:"ARCILLA UVA 250 GR",presentacion:"250 GR",inv:20,precio:45000,disponibilidad:"SI", imagen:"arcilla6.png"},
  {codigo:"AM-120-100",categoria:"AM",nombre:"ACEITE DE ZANAHORIA",descripcion:"ACEITE DE ZANAHORIA 120 ML",presentacion:"120 ML",inv:20,precio:18000,disponibilidad:"SI", imagen:"AM1.png"},
  {codigo:"AM-120-103",categoria:"AM",nombre:"ACEITE DE MORINGA",descripcion:"ACEITE DE MORINGA DE 120 ML",presentacion:"120 ML",inv:20,precio:18000,disponibilidad:"SI", imagen:"AM2.png"},
  {codigo:"AM-120-106",categoria:"AM",nombre:"ACEITE DE MANZANILLA",descripcion:"ACEITE DE MANZANILLA DE 120 ML",presentacion:"120 ML",inv:20,precio:18000,disponibilidad:"SI", imagen:"AM3.png"},
  {codigo:"AM-120-109",categoria:"AM",nombre:"ACEITE DE CALENDULA",descripcion:"ACEITE DE CALENDULA DE 120 ML",presentacion:"120 ML",inv:20,precio:18000,disponibilidad:"SI", imagen:"AM4.png"},
  {codigo:"AM-120-112",categoria:"AM",nombre:"ACEITE DE DIENTE DE LEON",descripcion:"ACEITE DE DIENTE DE LEON DE 120 ML",presentacion:"120 ML",inv:20,precio:18000,disponibilidad:"SI", imagen:"AM5.png"},
  {codigo:"AM-120-115",categoria:"AM",nombre:"ACEITE DE ROMERO",descripcion:"ACEITE DE ROMERO DE 120 ML",presentacion:"120 ML",inv:20,precio:18000,disponibilidad:"SI", imagen:"AM6.png"},
  {codigo:"AE-05-100",categoria:"AE",nombre:"ACEITE ESENCIAL DE ARBOL DE TÉ",descripcion:"A.E. DE ARBOL DE TE DE 05 ML",presentacion:"5 ML",inv:20,precio:14000,disponibilidad:"SI", imagen:"AE1.png"},
  {codigo:"AE-05-103",categoria:"AE",nombre:"ACEITE ESENCIAL DE EUCALIPTO",descripcion:"A.E. DE EUCALIPTO DE 5ML",presentacion:"5 ML",inv:20,precio:15000,disponibilidad:"SI", imagen:"AE2.png"},
  {codigo:"AE-05-104",categoria:"AE",nombre:"ACEITE ESENCIAL DE LAVANDA",descripcion:"A.E. DE LAVANDA DE 5ML",presentacion:"5 ML",inv:20,precio:14000,disponibilidad:"SI", imagen:"AE3.png"},
  {codigo:"AE-05-105",categoria:"AE",nombre:"ACEITE ESENCIAL DE NARANJA DULCE",descripcion:"A.E. DE NARANJA DULCE DE 5ML",presentacion:"5 ML",inv:20,precio:10000,disponibilidad:"SI", imagen:"AE4.png"},
  {codigo:"AE-05-107",categoria:"AE",nombre:"ACEITE ESENCIAL DE ROMERO",descripcion:"A.E. DE ROMERO DE 5ML",presentacion:"5 ML",inv:20,precio:15000,disponibilidad:"SI", imagen:"AE5.png"},
  {codigo:"AE-05-108",categoria:"AE",nombre:"ACEITE ESENCIAL DE TOMILLO",descripcion:"A.E. DE TOMILLO DE 5ML",presentacion:"5 ML",inv:20,precio:18000,disponibilidad:"SI", imagen:"AE6.png"},
  {codigo:"AV-120-100",categoria:"AV",nombre:"ACEITE DE ALMENDRAS",descripcion:"ACEITE DE ALMENDRAS DE 120 ML",presentacion:"120 ml",inv:20,precio:27000,disponibilidad:"SI", imagen:"AV1.png"},
  {codigo:"AV-120-103",categoria:"AV",nombre:"ACEITE DE JOJOBA",descripcion:"ACEITE DE JOJOBA DE 120 ML",presentacion:"120 ml",inv:20,precio:55000,disponibilidad:"SI", imagen:"AV2.png"},
  {codigo:"AV-120-106",categoria:"AV",nombre:"ACEITE DE AGUACATE",descripcion:"ACEITE DE AGUACATE 120 ML",presentacion:"120 ml",inv:20,precio:25000,disponibilidad:"SI", imagen:"AV3.png"},
  {codigo:"AV-120-109",categoria:"AV",nombre:"ACEITE DE SALVADO DE ARROZ",descripcion:"ACEITE DE SALVADO DE ARROZ 120 ML",presentacion:"120 ml",inv:20,precio:16000,disponibilidad:"SI", imagen:"AV4.png"},
  {codigo:"AV-120-112",categoria:"AV",nombre:"ACEITE DE NUEZ DEL MAGDALENA",descripcion:"ACEITE DE NUEZ DEL MAGDALENA DE 120 ML",presentacion:"120 ml",inv:20,precio:65000,disponibilidad:"SI", imagen:"AV5.png"},
  {codigo:"AV-120-115",categoria:"AV",nombre:"ACEITE DE ARGÁN",descripcion:"ACEITE DE ARGÁN DE 120 ML",presentacion:"120 ml",inv:20,precio:110000,disponibilidad:"SI", imagen:"AV6.png"}

  
],


usuarios:[
    {
    nombre:"RAUL SOTO VILLAMIZAR",
    correo:"TODOLIBROLTDA@GMAIL.COM",
    password:"parez"
    },
    {
  
    
      nombre:"ANA SILVIA",
      correo:"AIGLEETLIOR@GMAIL.COM",
      password:"parez"
      },
      {
    
        nombre:"EDELMIRA MONCADA",
        correo:"EDMAN75@GMAIL.COM",
        password:"parez"
      },
      {
        nombre:"PAULA",
        correo:"PAULA761022@GMAIL.COM",
        password:"parez"
      },
      {
        nombre:"ZORAIDA ZAMBRANO",
        correo:"COSMETICACASERA@GMAIL.COM",
        password:"parez"
      },
      
  
],


     
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
