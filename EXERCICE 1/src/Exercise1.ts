interface ObjectItem {
    item: string | number;
    num: number;
}

const array1: Array<string | number> = [2, 3, 2, 2, 2, 4, 2];
const array2: Array<string | number> = [2, 3, 2, 3, 2, 3, 4];
const array3: Array<string | number> = ["a", "b", "c", "a", "a", "a", "a"];
const array4: Array<string | number> = ["a", "a", 2, 2, 2, "a", 4];

const highestOccurrence = (array: Array<string | number>) => {
    let newArray: Array<string | number> = [];
    let newArrayObjects: { item: string | number; num: number }[] = [];
    let max: number = 0;
    let finallyArray: Array<string | number> = [];

    array.forEach((item) => {
        if (!newArrayObjects.length) {
            newArrayObjects.push({ item: item, num: 1 });
            newArray.push(item);
        } else if (!newArray.includes(item)) {
            newArrayObjects.push({ item: item, num: 1 });
            newArray.push(item);
        } else {
            newArrayObjects.forEach((element: ObjectItem) => {
                if (element.item === item) {
                    element.num += 1;
                }
            });
        }
    });

    newArrayObjects.forEach((element) => {
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
