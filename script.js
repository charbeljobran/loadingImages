const image=[
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
];


const imgElement=document.querySelectorAll("img");

function loadingImage(index){
    if(index>=image.length)
        return;

    imgElement[index].src=image[index];

    imgElement[index].onload=()=>{
        loadImage(index+1);
    };

}
loadingImage(0);