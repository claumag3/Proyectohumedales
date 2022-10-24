
document.getElementById("pieDePagina").innerHTML = ` 
<div id="piePaginaTexto" style="font-size: 20px"> Seguinos en nuestras redes: .</div>
        <img
            src="imagenes/twitter1.ico"
            title="twitter"
            onclick="aunNo()"
         />
          <img
            src="imagenes/facebook1.ico"
            title="facebook"
            onclick="aunNo()"
          />
          <img
            src="imagenes/instagram.ico"
            title="instagram"
            onclick="aunNo()"
          />
          <span id="mensaje" style="visibility:hidden">_   Proximamente ... </span>

   `
  //     function aunNo() {
  //     window.alert("En breve habilitaremos ...: " );
  //  }
  function aunNo() {
    var mensaje = document.getElementById('mensaje');
    mensaje.style.visibility = 'visible';
    function aviso(){
      mensaje.style.visibility = 'hidden';
    }
    
    setTimeout(aviso, 1500);
 }
