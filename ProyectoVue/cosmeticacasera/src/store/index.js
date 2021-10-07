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
},

],

productos:[
  {
      cod_interno:"KIT-001",
      codigo:"KIT-001",
      categoria:"KIT",
      nombre:"KIT COSMETICA NATURAL - BALSAMO",
      descripcion:"KIT COSMETICA NATURAL - BALSAMO (7 PRODUCTOS CERA CANDELILLA, MANTECA DE CACAO, MANTECA DE KARITE, SABORIZANTE 3 ML, COLORANTE 3 GR, ENVASES Y ETIQUETAS)",
      presentacion:"CAJA",
      inv:20,
      precio:65000,
      disponibilidad:"DISPONIBLE",
      estado:"ACTIVO",
      imagen:"KIT1.png",
      url:"/assets/KIT1.png"
  },
  {
      cod_interno:"KIT-002",
      codigo:"KIT-002",
      categoria:"KIT",
      nombre:"KIT 3 ESENCIALES 2 MINI ACEITES PORTADORES",
      descripcion:"KIT 3 ESENCIALES 2 MINI ACEITES PORTADORES (LAVANDA 5 ML, ROMERO 5 ML, LIMÓN 5 ML, ACEITE DE ALMENDRAS DE 8 ML, ACEITE DE SEMILLAS DE UVA DE 8 ML)",
      presentacion:"CAJA",
      inv:20,
      precio:45000,
      disponibilidad:"DISPONIBLE",
      estado:"ACTIVO", 
      imagen:"KIT2.png",
      url:"/assets/KIT2.png"
  },
  {cod_interno:"KIT-003",codigo:"KIT-003",categoria:"KIT",nombre:"KIT DE INICIO DE UTENSILIOS",descripcion:"KIT DE INICIO DE UTENSILIOS (TERMOMETRO DIGITAL, MINI-BALANZA DIGITAL, 10 PALITOS PARA REVOLVER, VASO DE LABORATOIO PLASTICO DE 100 ML, 10 TIRAS DE PH, ESPATULA DE PLASTICO, VARILLA DE VIDRIO, RECIPIENDO PARA ALCOHOL DE 120 ML CON VALVULA SPRAY)","presentacion":"CAJA",inv:20,precio:175000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"KIT3.png",url:"/assets/KIT3.png"},
  {cod_interno:"KIT-004",codigo:"KIT-004",categoria:"KIT",nombre:"KIT PARA ACEITE PARA LA BARBA",descripcion:"ACEITE PARA LA BARBA, 30 ML DE ACEITE DE SEMILLAS DE UVA, 20 ML DE ACEITE DE JOJOBA, 1 ML DE A.E. ROMERO, 1 ML A.E. MENTA, 1 ML DE ACEITE CEDRO, 3 ML VITAMINA E, ENVASE Y ETIQUETA","presentacion":"CAJA",inv:20,precio:45000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"KIT4.png",url:"/assets/KIT4.png"},
  {cod_interno:"ARC-250B",codigo:"ARC-B",categoria:"ARC",nombre:"ARCILLA BLANCA",descripcion:"ARCILLA BLANCA 250 GR","presentacion":"250 GR",inv:20,precio:34000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"arcilla1.png",url:"/assets/arcilla1.png"},
  {cod_interno:"ARC-250M",codigo:"ARC-M",categoria:"ARC",nombre:"ARCILLA AMARILLA",descripcion:"ARCILLA AMARILLA 250 GR","presentacion":"250 GR",inv:20,precio:34000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"arcilla2.png",url:"/assets/arcilla2.png"},
  {cod_interno:"ARC-250A",codigo:"ARC-A",categoria:"ARC",nombre:"ARCILLA AZUL",descripcion:"ARCILLA AZUL 250 GR","presentacion":"250 GR",inv:20,precio:45000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"arcilla3.png",url:"/assets/arcilla3.png"},
  {cod_interno:"ARC-250R",codigo:"ARC-R",categoria:"ARC",nombre:"ARCILLA ROJA",descripcion:"ARCILLA ROJA 250 GR","presentacion":"250 GR",inv:20,precio:34000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"arcilla4.png",url:"/assets/arcilla4.png"},
  {cod_interno:"ARC-250V",codigo:"ARC-V",categoria:"ARC",nombre:"ARCILLA VERDE",descripcion:"ARCILLA VERDE 250 GR","presentacion":"250 GR",inv:20,precio:34000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"arcilla5.png",url:"/assets/arcilla5.png"},
  {cod_interno:"ARC-250U",codigo:"ARC-U",categoria:"ARC",nombre:"ARCILLA UVA",descripcion:"ARCILLA UVA 250 GR","presentacion":"250 GR",inv:20,precio:45000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"arcilla6.png",url:"/assets/arcilla6.png"},
  {cod_interno:"AM-120-100",codigo:"AM-100",categoria:"AM",nombre:"ACEITE DE ZANAHORIA",descripcion:"ACEITE DE ZANAHORIA 120 ML","presentacion":"120 ML",inv:20,precio:18000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AM1.png",url:"/assets/AM1.png"},
  {cod_interno:"AM-120-103",codigo:"AM-103",categoria:"AM",nombre:"ACEITE DE MORINGA",descripcion:"ACEITE DE MORINGA DE 120 ML","presentacion":"120 ML",inv:20,precio:18000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AM2.png",url:"/assets/AM2.png"},
  {cod_interno:"AM-120-106",codigo:"AM-106",categoria:"AM",nombre:"ACEITE DE MANZANILLA",descripcion:"ACEITE DE MANZANILLA DE 120 ML","presentacion":"120 ML",inv:20,precio:18000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AM3.png",url:"/assets/AM3.png"},
  {cod_interno:"AM-120-109",codigo:"AM-109",categoria:"AM",nombre:"ACEITE DE CALENDULA",descripcion:"ACEITE DE CALENDULA DE 120 ML","presentacion":"120 ML",inv:20,precio:18000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AM4.png",url:"/assets/AM4.png"},
  {cod_interno:"AM-120-112",codigo:"AM-112",categoria:"AM",nombre:"ACEITE DE DIENTE DE LEON",descripcion:"ACEITE DE DIENTE DE LEON DE 120 ML","presentacion":"120 ML",inv:20,precio:18000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AM5.png",url:"/assets/AM5.png"},
  {cod_interno:"AM-120-115",codigo:"AM-115",categoria:"AM",nombre:"ACEITE DE ROMERO",descripcion:"ACEITE DE ROMERO DE 120 ML","presentacion":"120 ML",inv:20,precio:18000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AM6.png",url:"/assets/AM6.png"},
  {cod_interno:"AE-05-100",codigo:"AE-100",categoria:"AE",nombre:"ACEITE ESENCIAL DE ARBOL DE TÉ",descripcion:"A.E. DE ARBOL DE TE DE 05 ML","presentacion":"5 ML",inv:20,precio:14000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AE1.png",url:"/assets/AM1.png"},
  {cod_interno:"AE-05-103",codigo:"AE-103",categoria:"AE",nombre:"ACEITE ESENCIAL DE EUCALIPTO",descripcion:"A.E. DE EUCALIPTO DE 5ML","presentacion":"5 ML",inv:20,precio:15000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AE2.png",url:"/assets/AM2.png"},
  {cod_interno:"AE-05-104",codigo:"AE-104",categoria:"AE",nombre:"ACEITE ESENCIAL DE LAVANDA",descripcion:"A.E. DE LAVANDA DE 5ML","presentacion":"5 ML",inv:20,precio:14000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AE3.png",url:"/assets/AM3.png"},
  {cod_interno:"AE-05-105",codigo:"AE-105",categoria:"AE",nombre:"ACEITE ESENCIAL DE NARANJA DULCE",descripcion:"A.E. DE NARANJA DULCE DE 5ML","presentacion":"5 ML",inv:20,precio:10000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AE4.png",url:"/assets/AM4.png"},
  {cod_interno:"AE-05-107",codigo:"AE-107",categoria:"AE",nombre:"ACEITE ESENCIAL DE ROMERO",descripcion:"A.E. DE ROMERO DE 5ML","presentacion":"5 ML",inv:20,precio:15000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AE5.png",url:"/assets/AM5.png"},
  {cod_interno:"AE-05-108",codigo:"AE-108",categoria:"AE",nombre:"ACEITE ESENCIAL DE TOMILLO",descripcion:"A.E. DE TOMILLO DE 5ML","presentacion":"5 ML",inv:20,precio:18000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AE6.png",url:"/assets/AM6.png"},
  {cod_interno:"AV-120-100",codigo:"AV-100",categoria:"AV",nombre:"ACEITE DE ALMENDRAS",descripcion:"ACEITE DE ALMENDRAS DE 120 ML","presentacion":"120 ml",inv:20,precio:27000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AV1.png",url:"/assets/AM1.png"},
  {cod_interno:"AV-120-103",codigo:"AV-103",categoria:"AV",nombre:"ACEITE DE JOJOBA",descripcion:"ACEITE DE JOJOBA DE 120 ML","presentacion":"120 ml",inv:20,precio:55000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AV2.png",url:"/assets/AM2.png"},
  {cod_interno:"AV-120-106",codigo:"AV-106",categoria:"AV",nombre:"ACEITE DE AGUACATE",descripcion:"ACEITE DE AGUACATE 120 ML","presentacion":"120 ml",inv:20,precio:25000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AV3.png",url:"/assets/AM3.png"},
  {cod_interno:"AV-120-109",codigo:"AV-109",categoria:"AV",nombre:"ACEITE DE SALVADO DE ARROZ",descripcion:"ACEITE DE SALVADO DE ARROZ 120 ML","presentacion":"120 ml",inv:20,precio:16000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AV4.png",url:"/assets/AM4.png"},
  {cod_interno:"AV-120-112",codigo:"AV-112",categoria:"AV",nombre:"ACEITE DE NUEZ DEL MAGDALENA",descripcion:"ACEITE DE NUEZ DEL MAGDALENA DE 120 ML","presentacion":"120 ml",inv:20,precio:65000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AV5.png",url:"/assets/AM5.png"},
  {cod_interno:"AV-120-115",codigo:"AV-115",categoria:"AV",nombre:"ACEITE DE ARGÁN",descripcion:"ACEITE DE ARGÁN DE 120 ML","presentacion":"120 ml",inv:20,precio:110000,disponibilidad:"DISPONIBLE",estado:"ACTIVO", imagen:"AV6.png",url:"/assets/AM6.png"}
]
     
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
