// Slider do Banner da Home

let countBanner =1;
document.getElementById('radio-banner1').checked = true;

setInterval( function(){
    nextBannerImage();
},3000)

function nextBannerImage(){
    countBanner++;
    if (countBanner>3){
        countBanner=1
    }
    document.getElementById("radio-banner"+countBanner).checked = true;
}


// Slide da Seção Quem Somos

let count =1;
document.getElementById('radio1').checked = true;

setInterval( function(){
    nextImage();
},3000)

function nextImage(){
    count++;
    if (count>3){
        count=1
    }
    document.getElementById("radio"+count).checked = true;
}


