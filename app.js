// Number 2
const secondArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sumPosElements = 0;
let count1 = 0;
const smallest = Math.min(...secondArr);
const smallestIndex = secondArr.indexOf(smallest);
const greatest = Math.max(...secondArr);
const greatestIndex = secondArr.indexOf(greatest);
let negArrElements = 0;
let oddPosElem = 0;
let evenPosElem = 0;
let sumOfEvenPosElements = 0;
let sumOfOddPosElements = 0;
let multiplicationOfPosElements = 1;

for (let i = 0; i < secondArr.length; i++) {
    if (secondArr[i] > 0) {
        sumPosElements += secondArr[i];
        count1++;
    } if (secondArr[i] < 0) {
        negArrElements++;
    } if (secondArr[i] > 0 && secondArr[i] % 2 === 1) {
        oddPosElem++;
    } if (secondArr[i] > 0 && secondArr[i] % 2 === 0) {
        evenPosElem++;
    } if (secondArr[i] > 0 && secondArr[i] % 2 === 0) {
        sumOfEvenPosElements += secondArr[i];
    } if (secondArr[i] > 0 && secondArr[i] % 2 === 1) {
        sumOfOddPosElements += secondArr[i];
    } if (secondArr[i] > 0) {
        multiplicationOfPosElements *= secondArr[i];
    } if (secondArr[i] !== greatest) {
        secondArr[i] = 0;
    }
}
// 2 (a)
document.write("Сума додатніх елементів в масиві буде дорівнювати = " + sumPosElements + "<br>");
document.write("Кількість додатних елементів масиву буде дорівнювати - " + count1 + "<br>");
// 2 (b)
document.write("Мінімальний елемент масива становить  " + smallest + " його порядковий індекс " + smallestIndex + "<br>");
// 2 (c)
document.write("Максимальний елемент масива становить  " + greatest + " його порядковий індекс " + greatestIndex + "<br>");
// 2 (d)
document.write("Кількість від’ємних елементів масива становить - " + negArrElements + "<br>");
// 2 (e)
document.write("Кількість непарних додатніх елементів масива становить - " + oddPosElem + "<br>");
// 2 (f)
document.write("Кількість парних додатніх елементів масива становить - " + evenPosElem + "<br>");
// 2 (g)
document.write("Сума парних додатніх елементів масива становить - " + sumOfEvenPosElements + "<br>");
// 2 (h)
document.write("Сума непарних додатніх елементів масива становить - " + sumOfOddPosElements + "<br>");
// 2 (i)
document.write("Добуток всіх додатніх елементів масива становить - " + multiplicationOfPosElements + "<br>")
// 2 (j)
document.write("Змінив на 0 всі елементи окрім найбільшого - " +secondArr);