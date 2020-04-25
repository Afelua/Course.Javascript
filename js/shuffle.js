const Shuffle = window.Shuffle;
const element = document.querySelector('.items');

const shuffleInstance = new Shuffle(element, {
    itemSelector: '.room',
});

shuffleInstance.filter();

let currentValueServices = "all";

const btnContainerServices = document.getElementById("servicesContainer");
const buttonsServices = btnContainerServices.getElementsByClassName("btn");

for (let i = 0; i < buttonsServices.length; i++) {
    buttonsServices[i].addEventListener("click", function(e) {
        const current = document.getElementsByClassName("active");
        const id = e.target.id;
        if (id === currentValueServices) {
            this.classList.remove("active");
            shuffleInstance.filter();
            currentValueServices = 'all';
        } else {
            if (current[0]){
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
            shuffleInstance.filter(id);
            currentValueServices = id;
        }
    });
}

const btnContainerReviews = document.getElementById("reviewsContainer");
const buttonsReviews = btnContainerReviews.getElementsByClassName("btn");
let currentValueReviews = 0;


for (let i = 0; i < buttonsReviews.length; i++) {
    buttonsReviews[i].addEventListener("click", function(e) {
        const current = document.getElementsByClassName("active");
        const id = e.target.id;
        if (id === currentValueReviews) {
            this.classList.remove("active");
            shuffleInstance.filter();
            currentValueReviews = 0;
        } else {
            if (current[0]){
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
            shuffleInstance.filter(function (element) {
                return element.children[1].innerText >= id;
            });
            currentValueReviews = id;
        }
    });
}


const inputContainerSize = document.getElementById("sizeContainer");
const inputsSize = inputContainerSize.getElementsByClassName("input");

for (let i = 0; i < inputsSize.length; i++) {
    inputsSize[i].addEventListener("input", function(e) {
        shuffleInstance.filter();
        shuffleInstance.filter(function (element) {
            console.log(element);
            const from = document.getElementById("from").value || 0;
            const to = document.getElementById("to").value || 200;
            const roomSize = element.children[2].innerText;
            console.log(roomSize);
            console.log(from);
            console.log(to);
            return parseInt(roomSize) >= from && parseInt(roomSize) <= to;
        });
    });
}
