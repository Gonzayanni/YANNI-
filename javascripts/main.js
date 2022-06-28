// variables
const containerLayout=document.querySelector(".contenedor-layout");
const fullImg=document.querySelector(".fullImg" );
const closeImgSpan=document.querySelector(".closeImg");


const imgDivSecundario=document.getElementById("img-div-secundario");
// event listener





// ---------------------------------

// este event genera que cuando demos click en la cruz se salga de la vista full de la imagen
closeImgSpan.addEventListener("click",closeImg);
// funciones


// este event genera la vista de full de la imagen
function openFullImg(reference){
   containerLayout.style.display="flex";
   
fullImg.src=reference;
}

function closeImg(){
   containerLayout.style.display="none";
}



// hay que mirar que no esta funcionando el engache de clases de las imagenes con los event listeners



