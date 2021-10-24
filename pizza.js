let question1 = prompt("Введите 1, если хотите пиццу с грибами. Введите 2, если хотите пиццу с курицей и ананасом. Введите 3, если хотите пиццу с сыром. Введите 4, если хотите пиццу с помидорами и колбасой.");
let question2 = prompt("Сколько штук пицц вы хотите?");
let str;
function orderingPizza(arg1, arg2) {
    switch (arg1) {
        case "1":
            arg1 = "пицца с грибами";
            break;
        case "2":
            arg1 = "пицца с курицей и ананасом";
            break;
        case "3":
            arg1 = "пицца с сыром";
            break;
        case "4":
            arg1 = "пицца с помидорами и колбасой";
            break;
        default:
            break;

    }
    if (!question2.trim()) {
        arg2 = 1;
        str = "Ваш заказ: " + arg1 + " (" + arg2 + " шт.)";
    }
    if (!question1.trim() && !question2.trim()) {
        arg2 = 1;
        arg1 = "Фирмення пицца"
        str = "Ваш заказ: " + arg1 + " (" + arg2 + " шт.)";
    }
    if (question1 > 4 && question2 < 1) {
        str = "Произошла ошибка, повторите заказ.";
    }
    else {
        str = "Ваш заказ: " + arg1 + " (" + arg2 + " шт.)";
    }
    alert(str);
    return str;
}
let order = orderingPizza(question1, question2);