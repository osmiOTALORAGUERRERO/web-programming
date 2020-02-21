const myFullPage = new fullpage('#fullpage', {
  //navegación
  menu: '#menu',
  anchors: ['main','aboutMe','studies','skills'],
  navigartionToolTips: ['main', 'aboutMe', 'studies', 'skills'],
  navigation: true,
  navigationPosition: 'right',
  //desplazamiento
  css3: true,
  sectionsColor: [ '#000033','#000043', '#000053', '#000063'],
  scrollingSpeed: 1000,
  animateAnchor: 'true',
  recordHistory: false
})
