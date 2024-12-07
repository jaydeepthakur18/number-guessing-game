let userInput = document.getElementById("userInput")
let check = document.getElementById("guess-button")
let resultsection = document.getElementById("result-cantainer")
let restart =document.getElementById(`restart`)
let Number = Math.floor(Math.random()*10)
let chances = 0



function guessNumber(){
    chances++
    let score = 10-chances
let userNumber =parseInt(userInput.value)
console.log(Number)
if(Number===userNumber){
    let html = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTV-qCW3Yd7nPw9i2IKrYHaoqa9eKidXHeQ&s" alt="try" width="250px" height="150px" style="object-fit: contain;margin: auto;">
        <h2 style="text-align: center;color: blue;">you won:your score is : ${score} completed in ${chances}</h2>`
        resultsection.innerHTML =html;
    alert(`you won`)
}
if(Number<userNumber){
    let html = `        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4tnbV5opGsvDt6tRYeL8e64PFP1sVS6O5g&s" alt="try" width="250px" height="150px" style="object-fit: contain;margin: auto;">
    <h2 style="text-align: center;color: blue;">oops! wrong guess  hint: try a smaller number</h2>`;
    resultsection.innerHTML =html;
    alert("try a smaller number")
}
if(Number>userNumber){
    alert("try a bigger number")
}
console.log("chance taken", chances)
}
check.addEventListener ("click",guessNumber)
restart.addEventListener("click", ()=> {
    window.location.reload()
})

