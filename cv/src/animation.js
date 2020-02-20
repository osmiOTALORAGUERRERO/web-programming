const myFullPage = new fullpage('#fullpage', {
  //navegación
  menu: '#menu',
  anchors: ['main','aboutMe','studies','skills'],
  navigartionToolTips: ['main', 'aboutMe', 'studies', 'skills'],
  navigation: true,
  navigationPosition: 'right',
  //desplazamiento
  css3: true,
  sectionsColor: [ '#1abc9c','#48c9b0', '#76d7c4'],
  scrollingSpeed: 1000,
  animateAnchor: 'true',
  recordHistory: false
})
