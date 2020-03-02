const url = 'https://www.datos.gov.co/resource/hrtu-9f5g.json?'
const query = '$where='

const selectMunicipio = document.getElementById('municipio')
const responseField = document.getElementsByTagName('table')[0]

const selectGroups = () => {
  const municipioChoosed = selectMunicipio.value
  const encodeQuery = encodeURI("NME_MUNICIPIO_GR = ")+'%27'+encodeURI(municipioChoosed)+'%27'
  const endPoint = `${url}${query}${encodeQuery}`
  const columns = []

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json'

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(endPoint, xhr.response)
      xhr.response.forEach((group, i) => {
        let row = []
        let td = document.createElement('td')
        let content = document.createTextNode(group.cod_grupo_gr)
        td.appendChild(content)
        row.push(td)
        td = document.createElement('td')
        content = document.createTextNode(group.ano_convo)
        td.appendChild(content)
        row.push(td)
        td = document.createElement('td')
        content = document.createTextNode(group.nme_grupo_gr)
        td.appendChild(content)
        row.push(td)
        td = document.createElement('td')
        content = document.createTextNode(group.nme_area_gr)
        td.appendChild(content)
        row.push(td)
        columns.push(row)
      });

      trResult = responseField.getElementsByClassName('result')
      while ( trResult.length > 0) {
        for (var tr of trResult) {
          responseField.removeChild(tr)
          count++
        }
      }

      columns.forEach((col, i) => {
        const tr = document.createElement("tr")
        tr.className = 'result'
        col.forEach((attr, i) => {
          tr.appendChild(attr)
        });
        responseField.appendChild(tr)
      });
    }
  }
  xhr.open('GET', endPoint);
  xhr.send()
}
