let image=document.querySelector(".imag");
let nextBtn=document.querySelector(".nextBtn");
let preBtn=document.querySelector(".preBtn");

let imgdata=["img/hiking-v1.jpg","img/outdoor-image-01.jpg","img/walking-v1.jpg"];
let count=0;
let interval;
let slide=()=>{
        interval=setInterval(nextImg,3000);
}
slide();
function nextImg(){
    
    count++;
    console.log(image)
    // preBtn.classList.remove("preBtn_hide");
    if(count==3){
        count=0;
        image.src=imgdata[count];
        // nextBtn.classList.add("nextBtn_hide");
    }else{
        image.src=imgdata[count];
    }
}
function preImg(){
    count--;   
    if(count<0){
        count=imgdata.length-1;
        console.log(count)
        image.src=imgdata[count]
        // preBtn.classList.add("preBtn_hide");
    }
    else{
        image.src=imgdata[count];
    }
    // nextBtn.classList.remove("nextBtn_hide");
}