/*let text = document.getElementById(accrooms)

images.addEventListener('click', function(){
    text.style.visibility='visible'
    text.style.backgroundColor='rgba(6,31,95,0.5)'
})
let calander = new Date()
document.getElementById('date').innerHTML = calander
*/

console.log(window.innerWidth)
console.log(window.innerHeight)

let logo = document.querySelector('.logodesigen')
let imagemain = document.querySelector('#main-imag')
let card = document.querySelector('#dicribtioncard')
let readmore = document.querySelector('#moretxt');
let readmorebutton = document.querySelector('#readmore');


if(window.innerWidth > 1192){
    logo.style.width = '15%';
    console.log(logo.style.width);
}else if(window.innerWidth < 1192 && window.innerWidth > 899){ 
    logo.style.width = '20%';
    console.log(logo.style.width);
}else if(window.innerWidth < 900 && window.innerWidth > 724){
    logo.style.width = '25%';
    console.log(logo.style.width)
}else if(window.innerWidth < 724 && window.innerWidth > 607){
    logo.style.width = '30%';
    console.log(logo.style.width);
}else if(window.innerWidth < 608 && window.innerWidth > 461){
    logo.style.width = '40%';
    console.log(logo.style.width)
}else if(window.innerWidth < 462 && window.innerWidth > 360){
    logo.style.width = '60%';
    console.log(logo.style.width);
}
else {
    logo.style.width = '70%';
    console.log(logo.style.width);
} 


readmorebutton.addEventListener('click' , function(){
    if(readmore.style.display == 'none'){
    readmore.style.display = 'inline'
    readmorebutton.innerHTML = 'read less' 
} else{
    readmore.style.display = 'none'
    readmorebutton.innerHTML = 'read more' 
}})

let display = document.querySelector('.adverting')
let galleryimage = document.querySelector('.galleryimage')

function imagefunction(){
    if(galleryimage.style.position =='relative'){
        galleryimage.style.position = 'absolute';
        galleryimage.attribute ='col-10'
    }else{
        galleryimage.style.position =='relative'
    }

}


/*let x =new Date()
console.log()
console.log()
console.log()

document.querySelector('#calanderdate').innerHTML = 'Today:' + x.getFullYear() + x.getDay() +" " + x.getUTCMonth() ;

*/






