"use strict"

const btnElem = document.querySelector("button");

const outputElem = document.getElementById("output-cats");

btnElem.addEventListener('click', function () {
    const url = "json/cats.json";

    fetch(url)
        .then(res => res.json())
        .then (json => {
            json.forEach(function(val) {
                const catContainer = document.createElement("div");
                catContainer.classList.add("cat-container");
                
                const catItem = document.createElement("div");
                catItem.classList.add("cat-item");

                const catImage = document.createElement("img");
                catImage.classList.add("cat-image");

                catImage.src = `img/${val.image}`;
                catImage.alt = `${val.name}`;

                const catInfo = document.createElement("ul");

                catInfo.innerHTML =
                `
                <li>Name: ${val.name}</li>
                <li>Breed: ${val.breed}</li>
                <li>Weight: ${val.weight}</li>
                `;

                catItem.appendChild(catImage);
                catItem.appendChild(catInfo);

                catContainer.appendChild(catItem);

                outputElem.appendChild(catContainer);
            })
        })
})