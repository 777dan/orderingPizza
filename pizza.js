let question1 = prompt("Введите 1, если хотите пиццу с грибами. Введите 2, если хотите пиццу с курицей и ананасом. Введите 3, если хотите пиццу с сыром. Введите 4, если хотите пиццу с помидорами и колбасой.");
let question2 = prompt("Сколько штук пицц вы хотите?");
function orderingPizza(arg1, arg2) {
    let str;
    switch (arg1) {
        case "1":
            question1 = "пицца с грибами";
            break;
        case "2":
            question1 = "пицца с курицей и ананасом";
            break;
        case "3":
            question1 = "пицца с сыром";
            break;
        case "4":
            question1 = "пицца с помидорами и колбасой";
            break;
        default:
            break;

    }
    if (arg1.trim() || arg2.trim() && isNaN(arg1) || isNaN(arg2) || arg1 > 4 || arg1 < 1 || arg2 < 1) {
        str = "Произошла ошибка, повторите заказ.";
    }
    if (!arg2.trim()) {
        if (!arg1.trim()) {
            question2 = 1;
            question1 = "Фирмення пицца"
            str = "Ваш заказ: " + question1 + " (" + question2 + " шт.)";
        } else {
            question2 = 1;
            str = "Ваш заказ: " + question1 + " (" + question2 + " шт.)";
        }
    }
    if (arg1 >= 1 && arg1 <= 4 && arg2 >= 1) {
        str = "Ваш заказ: " + question1 + " (" + question2 + " шт.)";
    }
    return str;
}
let order = orderingPizza(question1, question2);
alert(order);