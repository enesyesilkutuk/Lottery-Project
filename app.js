let luckyButton = document.querySelector("#buttonLucky");
let numberArea = document.getElementById("numbers");
let resultTable = document.querySelector(".container");
let numbers = [];

numberArea.addEventListener("change", function () {

    if ((numberArea.value > 8) || (numberArea.value <= 0)) {

        alert("Please enter a number between 1-8 (both inclusive)");
        numberArea.value = 1;
        numberArea.focus();
    }
});

luckyButton.addEventListener("click", () => {

    for (let i = 0; i < resultTable.children.length; i++) {

        resultTable.children[i].innerText = "";
        resultTable.children[i].style.visibility = "hidden";

    }

    for (let i = 0; i < numberArea.value; i++) {

        for (let j = 1; j <= 7; j++) {

            if ((j == 1) || (j == 2)) {

                numbers.push(Math.floor(Math.random() * 90 + 1));
                continue;
            }

            while ((numbers[j - 3] == numbers[j - 2])) {

                numbers.pop();
                numbers.push(Math.floor(Math.random() * 90 + 1));

                if ((numbers[j - 3] != numbers[j - 2])) {

                    break;

                } else if ((numbers[j - 3] == numbers[j - 2])) {

                    numbers.pop();
                    numbers.push(Math.floor(Math.random() * 90 + 1));
                }
            }

            numbers.push(Math.floor(Math.random() * 90 + 1));

            while (numbers.slice(0, j - 1).includes(numbers[numbers.length - 1])) {

                numbers.pop();
                numbers.push(Math.floor(Math.random() * 90 + 1));
            }
        }

        let joker = numbers.pop();
        numbers.sort(function (a, b) {
            return a - b
        });

        numbers.push(joker);
        numbers.push(Math.floor(Math.random() * 90 + 1));

        numbers.forEach(function (item, index) {

            if ((index == 6) || (index == 7)) {

                resultTable.children[i].innerText += " |  " + item;

            } else if (item == numbers[0]) {

                resultTable.children[i].innerText += item;

            } else {

                resultTable.children[i].innerText += ",  " + item;

            }

            resultTable.children[i].style.visibility = "visible";

        });

        numbers = [];

    }

    numberArea.focus();

});

numberArea.addEventListener("keypress", (e) => {

    if (e.key == "Enter") {
        luckyButton.click();
    }

});