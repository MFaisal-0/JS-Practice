const URL = "https://meowfacts.herokuapp.com/?count=3";

const getCat = async () => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0]);
}
 