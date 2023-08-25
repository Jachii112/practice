const btnEL = document.getElementById("btn");
const jokeEL = document.getElementById("joke");

const apiKey = "C8Tz20Tllq6WHvQ5ul41ig==IP6eSl5Y7YsJiaVO";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    jokeEL.innerText = "Updating...";
    btnEL.innerText = "LOADING...";
    btnEL.disabled = true;
    try {
        const response = await fetch(apiURL, options);
        const data = await response.json();
        jokeEL.innerText = data[0].joke; // Display the joke in the HTML element

        btnEL.innerText = "Tell me a joke";
    btnEL.disabled = false;
    } catch (error) {
        jokeEL.innerText = "An error happened, please try again later";
        console.error("Error fetching dad joke:", error);
        btnEL.innerText = "Reload";
        jokeEL.innerText = "Failed to fetch joke."; // Display an error message in case of an error

    }
}

btnEL.addEventListener("click", getJoke);
