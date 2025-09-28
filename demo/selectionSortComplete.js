/**
 * 选择排序完整实现
 */

function selectionSort(arr) {
    const result = [...arr];
    const n = result.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // 找到未排序部分的最小值
        for (let j = i + 1; j < n; j++) {
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }

        // 交换最小值和当前位置的元素
        if (minIndex !== i) {
            [result[i], result[minIndex]] = [result[minIndex], result[i]];
        }

        console.log(`第${i + 1}轮: [${result.join(', ')}]`);
    }

    return result;
}

// 对比其他排序算法的特点
console.log("=== 选择排序的苏格拉底式思考 ===\n");

console.log("🤔 核心问题：");
console.log("1. 如果让你整理100本书，你会一本本地选择最薄的那本，然后放到最前面吗？");
console.log("2. 这样做有什么优点和缺点？");
console.log("3. 为什么说选择排序'简单但不够聪明'？\n");

console.log("📊 与插入排序的对比：");
console.log("选择排序：每次都能确定一个元素的最终位置");
console.log("插入排序：每次将新元素插入到已排序部分的正确位置");
console.log("选择排序：交换次数少（n-1次），但比较次数多（n²/2次）");
console.log("插入排序：最好情况只需O(n)，但最坏情况也需要O(n²)\n");

// 测试
const testArray = [64, 25, 12, 22, 11];
console.log("原始数组:", testArray.join(', '));
console.log("\n选择排序过程：");
const sorted = selectionSort(testArray);
console.log("\n最终结果:", sorted.join(', '));