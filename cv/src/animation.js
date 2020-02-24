const myFullPage = new fullpage('#fullpage', {
  //navegación
  menu: '#menu',
  navigation: true,
  anchors: ['main','aboutMe','studies','skills'],
  navigationTooltips: ['Información Principal', 'Perfil', 'Estudios', 'Habilidades'],
  navigationPosition: 'right',
  //desplazamiento
  css3: true,
  sectionsColor: [ ' #1976d2','#217fdd', '#2584e3', '#2a8ae9'],
  scrollingSpeed: 1000,
  animateAnchor: 'true',
  recordHistory: false
})
