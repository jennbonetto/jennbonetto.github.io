


let fotos= [
        "./Andes/img/Ropa1.jpg",
        "./Andes/img/Ropa2.jpg"

]
cad=""
for (let foto of fotos){
    //document.write(`<img src=${elemento}>`)
    cad = cad + `
    <img src=${elemento}>
    `
}
document.getElementById("fotos").innerHTML= cad