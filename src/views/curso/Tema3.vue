<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(
    :titulo="'Unidad 3. Dibujo Asistido por Computadora (CAD)'"
    :subTitulo="'3. Edición y exportación de planos técnicos'"
  )
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La edición y exportación de planos técnicos en CAD es crucial para comunicar claramente los detalles del diseño. Estos procesos aseguran que los proyectos estén listos para presentación o producción.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')


    .row.mb-5
      .col-lg-6
        h2 Edición de planos técnicos
        p(data-aos="fade-left") La edición de planos técnicos permite organizar, ajustar y perfeccionar el diseño para que sea claro y funcional, optimizando su presentación para otros usuarios o aplicaciones.
        p(data-aos="fade-left") Estas funciones permiten estructurar y personalizar el diseño según las necesidades del proyecto, mejorando la calidad de presentación.
      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 8. 
          span Configuración de capas en la edición de planos
        figure
          img(src='@/assets/curso/figuras/f8.png', alt='').mb-2
          figcaption #[strong Nota]. #[span Tomado de Wikimedia Commons. (s.f.). Edit layer set. ]

    .row.align-items-start.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/2.png", alt="").mb-4.mb-lg-0
      .col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Organización con capas")
            p Permite agrupar contornos, cotas, textos, líneas de ejes y detalles específicos, facilitando la visibilidad y aplicación de estilos de línea o grosores.

          .div(titulo="Escalas y vista")
            p La escala se ajusta al tamaño de papel o presentación deseado; ventanas de vista permiten distintas perspectivas (planta, isométricas, secciones).

          .div(titulo="Anotaciones y acotaciones")
            p Herramientas de cotas para añadir dimensiones precisas, eligiendo cotas lineales, radiales o angulares.


    .row.mb-5
      .col-lg-6
        h2 Preparación para la exportación
        p(data-aos="fade-left") Antes de la exportación, es importante configurar el archivo CAD para que cumpla con los requisitos de impresión y presentación, manteniendo la claridad y precisión en los detalles.

        p(data-aos="fade-left") Ajustar el tamaño de papel, la escala y los estilos de color garantiza que los planos sean consistentes y fáciles de interpretar.
      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 9. 
          span Ejemplo de exportación en InteriCAD 
        figure
          img(src='@/assets/curso/figuras/f9.png', alt='').mb-2
          figcaption #[strong Nota]. #[span Tomado de Wikimedia Commons. (s.f.). InteriCAD T6 export to text file.]


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.png", style="max-width: 90px").mx-auto
            .col-lg
              h5 Ventana de impresión o trazado
              p.mb-0 Se ajusta el tamaño de papel y la escala de impresión para que el plano quede dentro de los márgenes.

        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/4.png", style="max-width: 90px").mx-auto
            .col-lg
              h5 Estilos de impresión y asignación de colores
              p.mb-0 Se asignan colores de capa y estilos de trazado para uniformidad de estilos en diferentes planos.


    h2(data-aos="fade-left") Consejos para presentaciones profesionales

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Para mejorar la presentación de los planos técnicos, es importante mantener un diseño limpio y organizado, usar una paleta de colores adecuada y, en proyectos grandes, incluir una portada o tabla de contenido.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/5.png', alt='')


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/51752" target="_blank" rel="noopener noreferrer") Company Calleja, P. & González Lluch, C. (2013). CAD 3D con SolidWorks®: diseño básico: ( ed.). D - Universitat Jaume I. Servei de Comunicació i Publicacions. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=7jXY5vxfRKc" target="_blank" rel="noopener noreferrer") Rebolledo, A. (Alonso Rebolledo Arellano) (2023, 9 de noviembre) How to make 2D drawing in Autodesk Fusion 360

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Sistemas numéricos y álgebra de Boole',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el objetivo principal de un "cuadro de datos" en un plano técnico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mostrar vistas en perspectiva',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Organizar las capas',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Incluir información relevante del plano',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Seleccionar el tamaño de hoja',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué formato es ideal para imprimir planos de CAD?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '.dwg',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: '.pdf',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: '.stl',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: '.mp4',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes industrias utiliza comúnmente el software CAD?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Medicina',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Publicidad',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Ingeniería automotriz',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Agronomía',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Para qué se utilizan las "Capas" en CAD?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Para exportar el diseño en diferentes formatos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Para organizar el diseño en diferentes elementos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Para definir colores',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Para ajustar escalas de trabajo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué permite hacer la herramienta "Extruir" en el modelado 3D?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Crear una capa nueva',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Añadir dimensiones',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Convertir un perfil 2D en un objeto 3D',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Importar un archivo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
