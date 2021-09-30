import { createStore } from 'vuex'

export default createStore({
  state: {

    productos:[  
      {
       codigo:"AE-10-100",
       nombre:"A.E. DE ARBOL DE TE DE 10ML",
       descripcion:"Entre los principales beneficios del aceite esencial de Árbol de Té,destaca que favorece la circulación sanguínea, aumenta el sistema inmunitario mental,estimula y da energía. Asimismo, es muy utilizado para el cuidado de la piel grasa y con acné,así como para actuar ante las picaduras de mosquitos o heridas difíciles de curar.",
       capacidad:"10 ML",
       inventario:20,
       precio_p:28000,
       urlfoto:"/assets/ArbolTe2.png"
     },

     {
       codigo:"AE-10-104",
       nombre:"A.E. DE LAVANDA DE 10ML",
       descripcion:"El aceite esencial de Lavanda tiene propiedades calmantes, relajantes y equilibrantes. Es desinfectante y descongestionante,antiséptico. Muy buena tolerancia en la piel. Para uso en pieles grasientas,con impurezas, acne, piel irritada y con tendencia a alergias, quemaduras y pequeñas heridas,picaduras de mosquitos, tiene propiedades antimicrobiales. Repele a mosquitos y pollila.",
       capacidad:"10 ML",
       inventario:20,
       precio_p:28000,
       urlfoto:"/assets/Lavanda2.png"
   },
   {
    codigo:"AE-05-100",
    descripcion:"A.E. DE ARBOL DE TE DE 5ML",
    capacidad:"5 ML",
    inventario:20,
    precio_p:14000,
    urlfoto: "/assets/ArbolTe1.png"
},
{codigo:"AE-10-100",
    nombre:"A.E. DE ARBOL DE TE DE 10ML",
    descripcion:"Entre los principales beneficios del aceite esencial de Árbol de Té,destaca que favorece la circulación sanguínea, aumenta el sistema inmunitario mental,estimula y da energía. Asimismo, es muy utilizado para el cuidado de la piel grasa y con acné,así como para actuar ante las picaduras de mosquitos o heridas difíciles de curar.",
    capacidad:"10 ML",
    inventari:20,
    precio_p:28000,
    urlfoto: "/assets/ArbolTe2.png"
},
{codigo:"AE-05-103",
    descripcion:"A.E. DE EUCALIPTO DE 5ML",
    capacidad:"5 ML",
    inventario:20,
    precio_p:15000,
    urlfoto: "/assets/Eucalipto1.png"
},
{codigo:"AE-10-103",
    descripcion:"A.E. DE EUCALIPTO DE 10ML",
    capacidad:"10 ML",
    inventario:20,
    precio_p:30000,
    urlfoto: "/assets/Eucalipto2.png"
},
{codigo:"AE-05-104",
    descripcion:"A.E. DE LAVANDA DE 5ML",
    capacidad:"5 ML",
    inventario:20,
    precio_p:14000,
    urlfoto: "/assets/Lavanda1.png"
},
{codigo:"AE-10-104",
    nombre:"A.E. DE LAVANDA DE 10ML",
    descripcion:"El aceite esencial de Lavanda tiene propiedades calmantes, relajantes y equilibrantes. Es desinfectante y descongestionante,antiséptico. Muy buena tolerancia en la piel. Para uso en pieles grasientas,con impurezas, acne, piel irritada y con tendencia a alergias, quemaduras y pequeñas heridas,picaduras de mosquitos, tiene propiedades antimicrobiales. Repele a mosquitos y pollila.",
    capacidad:"10 ML",
    inventario:20,
    precio_p:28000,
    urlfoto: "/assets/Lavanda2.png"
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
