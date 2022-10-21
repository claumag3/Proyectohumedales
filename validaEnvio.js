document.getElementById("envio").addEventListener('click', e => {
  if (vasio("apellido")
    || vasio("nombre")
    || vasio("documento")
    || vasio("email")) {
    window.alert("DEBE COMPLETAR TODOS LOS CAMPOS !!!")
  }
  else { window.alert("TODO OK!!") }
})

function vasio(id) {
  return document.getElementById(id).value == ""
}
