var counter = 0;


const incrementCounter = () => {
    counter++;
    if (counter == 10) {
        counter = 0;
    }
    let teller = document.getElementById("teller");
    teller.textContent = counter;
};