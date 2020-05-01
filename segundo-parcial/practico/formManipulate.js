//Previsulized photo
$('#profilePhoto').change(e => {
  let file = e.target.files[0]
  let reader = new FileReader();
  reader.onload = e => {
    let result = e.target.result;
    $('#previewPhoto').attr("src",result);
  }
  reader.readAsDataURL(file);
})

// Calculate age
$('#birthdate').change(e => {
  var today = new Date()
  var birthdate = new Date(e.target.value.replace(/-/g,'/'))
  var age = today.getFullYear() - birthdate.getFullYear()
  var differenceMonths = today.getMonth() - birthdate.getMonth()
  if ( differenceMonths < 0 || (differenceMonths === 0 && today.getDate() < birthdate.getDate())) {
    age--
  }
  $('#age').val(age)
})

//Validate email
$('#email').keydown(e => {
  let regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
  let email = e.target.value

  if (regex.test(email.trim())) {
    $('#email').addClass('is-valid')
    $('#email').removeClass('is-invalid')
  } else {
    $('#email').addClass('is-invalid')
    $('#email').removeClass('is-valid')
  }
})

//Generate pdf
$('form').submit(e => {
  const information = {
    'photo': $('#previewPhoto').attr('src'),
    'name' : $('#name').val(),
    'surname' : $('#surname').val(),
    'birthdate' : new Date($('#birthdate').val().replace(/-/g,'/')),
    'age' : $('#age').val(),
    'gender' : $('#gender').val(),
    'cell-number': $('#cell-number').val(),
    'email': $('#email').val(),
    'residence' : [
      $('#city').val(),
      $('#type-street').val(),
      $('#main-street').val(),
      ` # ${$('#secondary-street').val()}`,
      ` - ${$('#end-street').val()}`
    ],
    'personal-info': $('#description').val()
  }
  console.log(information)
  generatePDF(information)
  e.preventDefault();
})

$('#reset').click(() => {
  $('#previewPhoto').attr("src",'');
})
