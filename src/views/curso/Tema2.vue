<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(
    :titulo="'Unidad 3. Dibujo Asistido por Computadora (CAD)'"
    :subTitulo="'2. Modelado de piezas industriales en 2D y 3D'"
  )
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El modelado de piezas industriales en CAD, ya sea en 2D o 3D, sigue un conjunto de pasos que facilita la creación precisa de piezas y componentes. A continuación, se explica el proceso básico para ambos tipos de modelado.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')


    h2(data-aos="fade-up") Modelado en 2D

    .row.mb-5
      .col-lg-6
        p(data-aos="fade-left") El modelado en 2D en CAD es similar al dibujo técnico tradicional, donde se representan dimensiones y geometrías básicas del objeto en dos dimensiones. Este enfoque es ideal para planos y esquemas.
        p(data-aos="fade-left").mb-4 A continuación, se presenta el proceso detallado para realizar un modelado en 2D.
        div(style="width: 100%")
          TarjetaAudio.color-primario.mb-3(
            texto="Modelado en 2D"
            :audio="require('../../assets/podcast/podcast_t2_1.mp3')"
            tiempo
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )

      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 6. 
          span Modelado en 2D con FreeCAD 
        figure
          img(src='@/assets/curso/figuras/f6.png', alt='').mb-2
          figcaption #[strong Nota]. #[span Tomado de Wikimedia Commons. (s.f.). FreeCAD PartDesign Sketch.]


    h2(data-aos="fade-up") Modelado en 3D

    .row.mb-5
      .col-lg-6
        p(data-aos="fade-left") El modelado en 3D permite crear una representación tridimensional de la pieza, lo que facilita el análisis visual y la simulación de sus características. Este proceso es ideal para proyectos complejos y prototipos.
        AcordionA(tipo="b")
          .div(titulo="Definir el esbozo 2D inicial")
            p Muchos programas de modelado 3D en CAD (como SolidWorks, AutoCAD 3D o Fusion 360) comienzan con un dibujo 2D en una vista principal.

          .div(titulo="Extrusión y revolución")
            p Extruir: convierte un perfil 2D en un objeto 3D al "empujarlo" a una longitud específica. 
            p Revolucionar: gira un perfil 2D alrededor de un eje, creando formas cilíndricas o simétricas (como ejes y discos).

      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 7. 
          span Modelado en 3D con Bath Interferometer CAD 
        figure
          img(src='@/assets/curso/figuras/f7.png', alt='').mb-2
          figcaption #[strong Nota]. #[span Tomado de Wikimedia Commons. (s.f.). Bath Interferometer CAD model.]


    h2(data-aos="fade-up") Herramientas CAD populares para el modelado 2D y 3D

    p(data-aos="fade-left") Existen varios programas de software especializados en modelado 2D y 3D, cada uno con funcionalidades específicas según el tipo de diseño.

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/2.png"
            alt=""
            style="width: 90px"
          )
          h5 AutoCAD
          p.mb-0.text-center Ideal para diseño 2D y con herramientas de modelado 3D.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/3.png"
            alt=""
            style="width: 90px"
          )
          h5 SolidWorks y Fusion 360 
          p.mb-0.text-center Populares para modelado 3D en ingeniería y diseño industrial.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/4.png"
            alt=""
            style="width: 90px"
          )
          h5 Inventor y Creo
          p.mb-0.text-center Ofrecen herramientas avanzadas para diseño mecánico y simulación.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/128621" target="_blank" rel="noopener noreferrer") Nava Vergara, E. (2012). Dibujo asistido por computadora 2D y 3D: ( ed.). Grupo Editorial Éxodo.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=3tRpCx0krCg" target="_blank" rel="noopener noreferrer") Francis Tz. Dibujar el plano de una casa paso a paso en Autocad - Parte 1 Tutorial en español 2020.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
