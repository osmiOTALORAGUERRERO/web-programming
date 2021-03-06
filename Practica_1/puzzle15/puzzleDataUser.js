const table = displayData()

table.on('draw', ()=>{
  var rows = table.rows().count();
  table.button(1).enable(rows > 0)
})

function saveNewResult(data) {
  if (data && typeof data === 'object') {
    console.log(data)
    let scores = JSON.parse(localStorage.getItem('scores'))
    data['# attempt'] = scores.length + 1
    let today = new Date()
    data.date = `${today.getDay()}/${today.getMonth()}/${today.getFullYear()}  ${today.getHours()}:${today.getMinutes()}`
    scores.push(data)
    localStorage.setItem('scores', JSON.stringify(scores))
    updateDataTable()
  }
}

function deleteResult(dataAttempt) {
  console.log(typeof dataAttempt === 'object')
  if (dataAttempt && typeof dataAttempt === 'object') {
    let scores = JSON.parse(localStorage.getItem('scores'))
    dataAttempt.forEach((dataDelete, i) => {
      indexDelete = scores.findIndex( dataOriginal => dataDelete['# attempt'] === dataOriginal['# attempt'])
      scores.splice(indexDelete,1)
    });
    localStorage.setItem('scores', JSON.stringify(scores))
    updateDataTable()
  }
}

function updateDataTable() {
  table.clear()
  table.rows.add(JSON.parse(localStorage.getItem('scores')))
  table.draw()
}

function displayData() {
  if (!localStorage.getItem('scores')) {
    localStorage.setItem('scores', '[]')
  }
  let table = $('#scores').DataTable({
    data: JSON.parse(localStorage.getItem('scores')),
    columns: [
      {data: '# attempt'},
      {data: 'time'},
      {data: 'movements'},
      {data: 'difficulty'},
      {data: 'date'}
    ],
    paging: true,
    scrollY: 300,
    scroller: true,
    searching: true,
    dom : 'Bfrtip',
    select: {
      style: 'multi',
      blurable: true
    },
    buttons: [
      {
          extend: 'selected',
          text: 'Delete',
          action: function ( e, dt, node, config ) {
              var rows = dt.rows( { selected: true } ).data().toArray();
              deleteResult(rows)
          }
      },
      {
        text: 'clean',
        action: ( e, dt, node, config ) => {
          localStorage.setItem('scores','[]')
          updateDataTable()
        }
      }
    ],
    initComplete: (settings, json) => {
      let api = new $.fn.dataTable.Api( settings );
      let rows = api.rows().count() ;
      api.button(1).enable(rows > 0)
    }
  })
  return table
}
