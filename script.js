let userInput = document.getElementById("userInput");
let fact = document.getElementById("fact");
let url = "https://apis.ccbp.in/numbers-fact?number=";
let spinner = document.getElementById("spinner");

function searchFacts(event){
    if(event.key === "Enter"){
        fact.textContent = "";
        spinner.classList.remove("d-none");
        fetch(url + userInput.value)
        .then(response => {
            return response.json();
        })
        .then(data => {
            spinner.classList.add("d-none");
            fact.textContent = data.fact;
        });
    
    }
}

userInput.addEventListener("keydown", searchFacts);