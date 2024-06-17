/* passar o mouse nos links do header e muudarem de cor */
let linkHome = document.getElementById('linkHome')
let linkSobre = document.getElementById('linkSobre')
let linkEnFu = document.getElementById('linkEnsFun')
let linkEnsMed = document.getElementById('linkEnsMedio')
let linkContato = document.getElementById('linkContato')

function mudacorTextoHome(){
    linkHome.style.color = "White"
}
function mudacorTextoSobre(){
    linkSobre.style.color = "White"
}
function mudacorTextoEnsFun(){
    linkEnFu.style.color = "White"
}
function mudacorTextoEnsMed(){
    linkEnsMed.style.color = "White"
}
function mudacorTextoConta(){
    linkContato.style.color = "White"
}

function voltarcorAzul(){
    linkHome.style.color = "rgb(26, 13, 171)"
    linkSobre.style.color = "rgb(26, 13, 171)"
    linkEnFu.style.color = "rgb(26, 13, 171)"
    linkEnsMed.style.color = "rgb(26, 13, 171)"
    linkContato.style.color = "rgb(26, 13, 171)"
    
}

linkHome.addEventListener('mouseover', mudacorTextoHome)
linkHome.addEventListener('mouseout', voltarcorAzul)

linkSobre.addEventListener('mouseover', mudacorTextoSobre)
linkSobre.addEventListener('mouseout', voltarcorAzul)

linkEnFu.addEventListener('mouseover', mudacorTextoEnsFun)
linkEnFu.addEventListener('mouseout', voltarcorAzul)

linkEnsMed.addEventListener('mouseover', mudacorTextoEnsMed)
linkEnsMed.addEventListener('mouseout', voltarcorAzul)

linkContato.addEventListener('mouseover', mudacorTextoConta)
linkContato.addEventListener('mouseout', voltarcorAzul)
/* passar o mouse nos links do header e muudarem de cor */

/* passar o mouse no botao do header muuda de cor */
let btNavAgendarVis = document.getElementById('botAgendarvisita')

function mudacorBotAgeVis(){
    btNavAgendarVis.style.color = "rgb(26, 13, 171)"
    btNavAgendarVis.style.backgroundColor = "White"
}
function BotAgeVisNormal(){
    btNavAgendarVis.style.color = "White"
    btNavAgendarVis.style.backgroundColor = "rgb(26, 13, 171"
}

btNavAgendarVis.addEventListener('mouseover', mudacorBotAgeVis)
btNavAgendarVis.addEventListener('mouseout', BotAgeVisNormal)
/* passar o mouse no botao do header muuda de cor */
