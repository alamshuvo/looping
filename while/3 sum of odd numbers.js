

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let num =81;
let sum=0;
while (num<=131) {
    if (num%2!==0) {
        // console.log(num);
        sum +=num;
    }
    num++;

}
console.log(sum);



/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
let nuumbers=206;
let sumof=0;
while (nuumbers<=311) {
    if (nuumbers % 2===0) {
        sumof+=nuumbers;
    }
    nuumbers++;
}
console.log(sumof);
/*programming hero*/