function generatePDF(information){

  docDefinition = {
    info: {
    	title: 'Personal information',
    	author: 'Forms Osmi',
      subject: 'basic personal information ',
    	keywords: 'information personal',
    },
    pageSize: 'A5',
    header: 'Personal information',
    content: [
      {
        image: information.photo,
        width: 150,
        alignment: 'center'
      },
      {text: 'Description', bold:true, alignment: 'center', margin: [5, 2]},
      {text:information['personal-info'], alignment:'center', margin: [5, 2]},

      {
        text: [{text: 'Full name : ', style:'target'},`${information.name} ${information.surname}`],
        margin: [5, 5]
      },
      {
        text: [{text: 'Birthdate : ', style:'target'},information.birthdate.toDateString()],
        margin: [5, 5]
      },
      {
        text: [{text: 'Age : ', style:'target'},information.age],
        margin: [5, 5]
      },
      {
        text: [{text: 'Gender : ', style:'target'},information.gender],
        margin: [5, 5]
      },
      {
        text: [{text: 'Cell number: ', style:'target'},information['cell-number']],
        margin: [5, 5]
      },
      {
        text: [{text: 'Email : ', style:'target'}, information.email],
        margin: [5, 5]
      },
      {
        text: [{text: 'Direction : ', style:'target'}, `${information.residence[0]}, ${information.residence[1]} ${information.residence[2]} ${information.residence[3]} ${information.residence[4]}`],
        margin: [5, 5]
      }
    ],
    styles: {
      target:{
        bold: true,
        color: 'blue'
      }
    },
    defaultStyle: {
      fontSize: 12
    }
  }

  pdfMake.createPdf(docDefinition).open()
}
