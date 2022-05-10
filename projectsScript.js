document.getElementById('changeImage').addEventListener('click', changeImage);
document.getElementById('nextButton').addEventListener('click', ghNextImage)
document.getElementById('backButton').addEventListener('click',ghBackImage)
let imageNumb = 0
let imageSrcArray = ['imgs/LoginScreen.PNG','imgs/HomePage.PNG','imgs/Welcome.PNG','imgs/taskPage.png']
let imageArrayNumb = 0
function changeImage(){
    console.log('hello')
    if (imageNumb == 0){
        document.getElementById('portfolioImage').src = "imgs/stockGraphImage.PNG"
        imageNumb = 1
    }else if (imageNumb == 1){
        document.getElementById('portfolioImage').src = "imgs/portfolioImage.PNG"
        imageNumb = 0
    }

}
function ghNextImage(){
    if (imageArrayNumb == 3){
        imageArrayNumb = 0
    } else{
        imageArrayNumb++
    }
    document.getElementById('ghillAppImage').src = imageSrcArray[imageArrayNumb]
}
function ghBackImage(){
    if (imageArrayNumb == 0){
        imageArrayNumb = 3
    } else{
        imageArrayNumb--
    }
    document.getElementById('ghillAppImage').src = imageSrcArray[imageArrayNumb]
}