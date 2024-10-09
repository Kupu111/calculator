document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.dataset.value;
        const expressionInput = document.getElementById("expression");

        expressionInput.value += value; // Добавление символа в поле ввода
        expressionInput.focus(); // Устанавливаем фокус на поле ввода
    });
});

document.getElementById("myButton").addEventListener("click", calculateResult);

// Обработка ввода с клавиатуры
document.addEventListener("keydown", function(event) {
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'];
    if (validKeys.includes(event.key)) {
        const expressionInput = document.getElementById("expression");
        expressionInput.value += event.key; // Добавление символа в поле ввода
        expressionInput.focus(); // Устанавливаем фокус на поле ввода
    }

    // Обработка нажатия клавиши Enter для вычисления результата
    if (event.key === 'Enter') {
        calculateResult();
    }

    // Обработка комбинации клавиш для очистки поля
    if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
        event.preventDefault(); // Предотвращаем стандартное действие
        document.getElementById("expression").value = ''; // Очищаем поле ввода
    }
});

// Обработка ввода знака *
document.addEventListener("keydown", function(event) {
    if (event.shiftKey && event.key === '8') {
        const expressionInput = document.getElementById("expression");
        expressionInput.value += '*'; // Добавление знака * в поле ввода
        expressionInput.focus(); // Устанавливаем фокус на поле ввода
    }
});

function calculateResult() {
    const expression = document.getElementById("expression").value;

    // Проверка на пустое выражение
    if (expression.trim() === "") {
        document.getElementById("expression").value = 0; // Установите значение в 0
        document.getElementById("result").textContent = "Результат: 0";
        return; // Завершите выполнение функции
    }
    
    try {
        const result = eval(expression); // Вычисляем выражение
        document.getElementById("expression").value = result; // Заменяем входные значения на результат
        document.getElementById("result").textContent = "Результат: " + result;
    } catch (error) {
        document.getElementById("result").textContent = "Ошибка в выражении!";
    }
}


// Обработка нажатия клавиши Backspace
document.getElementById("expression").addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        event.preventDefault(); // Предотвращаем стандартное действие
        this.value = this.value.slice(0, -1); // Удаляем последний символ
    }
});
