export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 3.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '1',
        titulo: 'Dibujo Asistido por Computadora (CAD)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Manejo básico de software CAD.',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Capas y organización',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '2',
        titulo: 'Modelado de piezas industriales en 2D y 3D',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '3',
        titulo: 'Edición y exportación de planos técnicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      // {
      //   icono: 'fas fa-file-download',
      //   titulo: 'Descargar PDF',
      //   download: 'downloads/material.zip',
      // },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      // {
      //   icono: 'far fa-registered',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
    ],
  },
  referencias: [
    {
      referencia:
        'Martínez Abad, O. & Pineda Piñón, R. (2017). Dibujo Técnico I: basado en competencias: ( ed.). Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/128621',
    },
    {
      referencia:
        'Marulanda, J. (2018). Introducción al diseño arquitectónico: ( ed.). El Cid Editor.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/36746',
    },
    {
      referencia:
        'Nava Vergara, E. (2012). Dibujo asistido por computadora 2D y 3D: ( ed.). Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/128623',
    },
    {
      referencia:
        'Company Calleja, P. & González Lluch, C. (2013). CAD 3D con SolidWorks®: diseño básico: ( ed.). D - Universitat Jaume I. Servei de Comunicació i Publicacions.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/51752',
    },
  ],
  glosario: [
    {
      termino: 'Bloques',
      significado:
        'conjuntos de elementos reutilizables, como puertas o ventanas en arquitectura, que pueden insertarse y editarse en distintos proyectos.',
    },
    {
      termino: 'CAD (Computer-Aided Design)',
      significado:
        'tecnología de diseño asistido por computadora que permite crear, modificar, analizar y optimizar diseños a través de software.',
    },
    {
      termino: 'Capas',
      significado:
        'herramienta de organización en CAD que permite gestionar diferentes partes de un diseño, facilitando la edición y visualización de componentes específicos.',
    },
    {
      termino: 'Cotas (Dimensions)',
      significado:
        'herramienta para agregar medidas y especificaciones directamente en el diseño, asegurando que cada parte del proyecto tenga las dimensiones correctas.',
    },
    {
      termino: 'Dibujo y Modelado en 2D y 3D',
      significado:
        'característica de CAD que permite trabajar en dos y tres dimensiones, donde se crean planos o modelos tridimensionales visualizables desde diferentes ángulos.',
    },
    {
      termino: 'Escalas',
      significado:
        'proporción de representación del diseño en CAD, como 1:1 para diseños a tamaño real o escalas específicas para planos arquitectónicos.',
    },
    {
      termino: 'Exportación',
      significado:
        'proceso de guardar un archivo CAD en diferentes formatos (como PDF, DWG, DXF) para impresión, presentación o uso en otros software.',
    },
    {
      termino: 'Extrusión',
      significado:
        'herramienta en modelado 3D que convierte un perfil 2D en un objeto tridimensional extendiéndolo a lo largo de una longitud específica.',
    },
    {
      termino: 'Fillets y Chamfers',
      significado:
        'herramientas de modelado que suavizan (fillets) o angulan (chamfers) los bordes de un diseño, aplicando acabados específicos.',
    },
    {
      termino: 'Interoperabilidad',
      significado:
        'posibilidad de CAD de exportar e intercambiar archivos en varios formatos para facilitar la colaboración e integración con otras tecnologías.',
    },
    {
      termino: 'Precisión y escalabilidad',
      significado:
        'capacidad de trabajar con alta precisión en CAD, desde pequeñas piezas hasta grandes estructuras, ajustando la escala del diseño según el proyecto.',
    },
    {
      termino: 'Renderizado',
      significado:
        'técnica de visualización que crea vistas más realistas del diseño en 3D, aplicando materiales y texturas para una mejor presentación.',
    },
    {
      termino: 'Revolución',
      significado:
        'herramienta de modelado 3D que gira un perfil 2D alrededor de un eje para crear objetos simétricos, como ejes o discos.',
    },
    {
      termino: 'Simulación y análisis',
      significado:
        'función avanzada de algunos programas CAD que permite realizar simulaciones de comportamiento y análisis de propiedades como resistencia y durabilidad.',
    },
  ],
  complementario: [],
  creditos: [],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
