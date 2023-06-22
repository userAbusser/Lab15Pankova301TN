// З допомогою циклу while вивести всі прості числа в проміжку від 0 до 100

let i = 0;
while (i <= 100) {
    if (i === 0 || i === 1) {
        i++;
        continue;
    }
    let j = 2;
    while (j <= i) {
        if (i % j === 0) {
            break;
        }
        j++;
    }
    if (i === j) {
        console.log(i);
    }
    i++;
}

// З допомогою циклу do…while написати функцію для виведення чисел від 0 до 10, щоб результат виводу був відповідний зразку:

function printNumbersWithDescriptions() {
    let number = 0;

    do {
        let description = "";

        if (number === 0) {
            description = "це нуль";
        } else if (number % 2 === 0) {
            description = "парне число";
        } else {
            description = "непарне число";
        }

        console.log(number + " – " + description);

        number++;
    } while (number <= 10);
}

// Виклик функції
printNumbersWithDescriptions();