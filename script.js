const readMoreBtn = document.querySelector(".readMoreBtn");
const readMoreTxt = document.querySelector(".moreText");
const readLessBtn = document.querySelector(".readLessBtn");
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