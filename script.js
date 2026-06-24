const image=[
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
];


const imgElements=document.querySelectorAll("img");

function loadImage(index){
    if(index>=image.length)
        return;

    imgElements[index].src=image[index];

    imgElements[index].onload=()=>{
        loadImage(index+1);
    };

}
loadImage(0);