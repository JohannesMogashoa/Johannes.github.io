const submitBtn = document.querySelector("#submit");
const closeBtn = document.querySelector("#close");

submitBtn.addEventListener("click", function submit(e) {
    document.querySelector("#survey-form").style.display = "none";
    document.querySelector("#successful").style.display = "block";
})

closeBtn.addEventListener("click", function close(e) {
    document.querySelector("#survey-form").style.display = "block";
    document.querySelector("#successful").style.display = "none";
})