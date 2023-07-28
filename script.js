const readMoreBtn = document.querySelector(".readMoreBtn");
const readMoreTxt = document.querySelector(".moreText");
const readLessBtn = document.querySelector(".readLessBtn");
const closeButton = document.querySelector(".closeButton");
const registerButton = document.querySelector(".registerButton");
const popup = document.querySelector(".popup");
const createBtn = document.querySelector(".addUrlBtn");
const inputGroup = document.querySelector(".inputGroup");
console.log(readMoreBtn);
console.log(inputGroup);

readMoreBtn.addEventListener('click', (e)=>{
    readMoreTxt.classList.toggle('showMoreText');
    readMoreBtn.style.display = "none";
    readLessBtn.style.display = "inline";
})

readLessBtn.addEventListener('click', (e)=>{
    readMoreTxt.classList.toggle('showMoreText');
    readMoreBtn.style.display = "inline";
    readLessBtn.style.display = "none";
})

registerButton.addEventListener('click', (e)=>{
    popup.style.display = "flex";
})

closeButton.addEventListener('click', (e)=>{
    popup.style.display = "none";
})
var inputFieldCounter = 1;

function addField(){
    
    inputFieldCounter += 1;
    if (inputFieldCounter <= 5){
        html = '<div class="inputField">\
    <i class="fa fa-file-o" aria-hidden="true"></i>\
    <input type="url"  name="link" id="urlField'+inputFieldCounter+'">\
</div>'
    
    inputGroup.innerHTML+=html
    }
    
}