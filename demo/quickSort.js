function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    for (let element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// 测试示例
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log("原数组:", testArray);
console.log("排序后:", quickSort(testArray));

// 随机数组测试
const randomArray = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
console.log("随机数组:", randomArray);
console.log("排序后:", quickSort(randomArray));