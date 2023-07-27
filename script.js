const readMoreBtn = document.querySelector(".readMoreBtn");
const readMoreTxt = document.querySelector(".moreText");
const readLessBtn = document.querySelector(".readLessBtn");
const closeButton = document.querySelector(".closeButton");
const registerButton = document.querySelector(".registerButton");
const popup = document.querySelector(".popup");
console.log(readMoreBtn);
console.log(readMoreTxt);

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