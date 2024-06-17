//Ao passar o Mouse sob uma Imagem as outras escuresem



let imagensTodas = document.querySelectorAll("#imagens img") 

function escurecer(valor){
  console.log(valor)
  imagensTodas.forEach(x =>{
    if(valor == x.getAttribute("value")) {
      x.style.opacity = "10"
      x.style.transition = "10"

    } else {
      x.style.opacity = "0.1"
      x.style.transition = "10"

    }
  }

  )
}
function clarear(){
  imagensTodas.forEach(x =>{
    x.style.opacity = "10"
    x.style.transition = "opacity 500ms"
  } )

  
}

imagensTodas.forEach( x => {
  x.style.opacity = "10"
  x.addEventListener("mouseover",()=>{
    escurecer(x.getAttribute("value"))
  })
  x.addEventListener("mouseout",()=>{
    clarear()
  })


}

)
//Ao passar o Mouse sob uma Imagem as outras escuresem