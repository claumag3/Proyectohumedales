// <!-- como usar api - fetch -->
fetch('https://www.7timer.info/bin/civillight.php?lon=-59.6631&lat=-33.6758&ac=0&lang=es&unit=metric&output=json&tzshift=0')
  .then(r => r.json())
  .then(j => {
    // window.j = j
    console.log((j['dataseries'][0].temp2m.max));
    document.getElementById("maxima").innerText=(j['dataseries'][0].temp2m.max)
  })

// function maximaHoy(){
    
// }