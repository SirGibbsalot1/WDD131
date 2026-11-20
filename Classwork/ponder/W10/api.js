// API calls are asynchronous (async keyword)
async function GetCatFact(){
    const url = "https://catfact.ninja/fact";
        //fetch() loads files and across the web, e.g. urls or JSON
    const response = await fetch(url)
    //This tells it the response is JSON format
    const data = await response.json();
    console.log(response);
    console.log(data)

    function updateDisplay(fact) {
    fact_display = document.querySelector('section')
    fact_display.innerHTML = 
        `
            <section>${fact}</section>
        `

    }

    updateDisplay(data.fact)

};

document.querySelector('button')
        .addEventListener('click', e =>{
            GetCatFact();
        });



