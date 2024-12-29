function apiCall() {
    let adviceId = document.getElementById('adviceId');
    let adviceText = document.getElementById('adviceText');

    fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => {
            adviceId.innerHTML = data.slip.id;
            adviceText.innerHTML = '“' + data.slip.advice + "”";
        })
        .catch((e) => console.log('err' + e))

}

