const array1 = [2, 3, 2, 2, 2, 4, 2];
const array2 = [2, 3, 2, 3, 2, 3, 4];
const array3 = ['a', 'b', 'c', 'a', 'a', 'a', 'a'];
const array4 = ['a', 'a', 2, 2, 2, 'a', 4];
const highestOccurrence = (array) => {
    let newArray = [];
    let newArrayObjects = [];
    let max = 0;
    let finallyArray = [];
    array.forEach((item) => {
        if (!newArrayObjects.length) {
            newArrayObjects.push({ item: item, num: 1 });
            newArray.push(item);
        }
        else if (!newArray.includes(item)) {
            newArrayObjects.push({ item: item, num: 1 });
            newArray.push(item);
        }
        else {
            newArrayObjects.forEach((element) => {
                if (element.item === item) {
                    element.num += 1;
                }
            });
        }
    });
    newArrayObjects.forEach(element => {
        if (element.num >= max) {
            max = element.num;
            finallyArray.push(element.item);
        }
    });
    console.log(finallyArray);
};
highestOccurrence(array1);
highestOccurrence(array2);
highestOccurrence(array3);
highestOccurrence(array4);
//# sourceMappingURL=Exercise1.js.map