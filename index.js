function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09").then((response) =>{
        console.log(response);
    });
}

fetchData();