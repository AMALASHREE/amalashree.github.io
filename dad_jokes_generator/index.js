const btnEL = document.getElementById("btn");
const jokeEL =document.getElementById("joke")


const apiKey = "MQZ809VPWws4r+ShYmVeJQ==fW3EJVpilQ8Dwasb";


const options = {
    methon: "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {

    try {
        jokeEL.innerText = "updating...";
        btnEL.disabled = true;
        btnEL.innerText = "loading...";
        const response = await fetch(apiURL,options);
        const data = await response.json();
    
        btnEL.disabled = false;
        btnEL.innerText = "Tell me a Joke";

        jokeEL.innerText = data[0].joke;
    } catch (error) {

        jokeEL.innerText = "unexpected error";
        btnEL.disabled = false;
        btnEL.innerText = "Tell me a Joke";
        console.log(error);
    }

}

btnEL.addEventListener("click",getJoke);