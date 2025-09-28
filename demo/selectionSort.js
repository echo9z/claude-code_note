/**
 * 选择排序 - 苏格拉底式学习版本
 */

function selectionSort(arr) {
    // 复制数组以避免修改原数组
    const result = [...arr];
    const n = result.length;

    // 外层循环：遍历所有位置（除了最后一个位置）
    for (let i = 0; i < n - 1; i++) {
        // 假设当前位置的元素是最小的
        let minIndex = i;

        // 内层循环：在未排序部分寻找最小值
        for (let j = i + 1; j < n; j++) {
            // 如果找到更小的元素，更新最小值索引
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }

        // TODO(human): 在这里实现交换逻辑
        // 思考：我们找到了最小值的位置，现在应该做什么？
        // 提示：需要将最小值与当前位置的元素交换
        [result[i], result[minIndex]] = [result[minIndex], result[i]];
        console.log(`第${i + 1}轮：未排序部分 [${result.slice(i).join(', ')}]，最小值是 ${result[minIndex]} 在位置 ${minIndex}`);
    }

    return result;
}

// 测试用例
function testSelectionSort() {
    const testArray = [64, 25, 12, 22, 11];
    console.log("原始数组:", testArray.join(', '));
    console.log("\n开始选择排序...\n");

    const sorted = selectionSort(testArray);
    console.log("\n最终结果:", sorted.join(', '));
}

// 苏格拉底式引导问题
console.log("=== 选择排序学习引导 ===\n");

console.log("❓ 思考问题：");
console.log("1. 如果你有一叠打乱的扑克牌，你会怎么按从小到大的顺序排列它们？");
console.log("2. 如果你每次都从剩下的牌中找出最小的，然后放到最前面，这样会怎样？");
console.log("3. 选择排序的名字为什么叫'选择'排序？它在'选择'什么？");
console.log("4. 与插入排序相比，选择排序有什么不同？插入排序是'插入'，选择排序是'选择'...\n");

console.log("📚 算法思想提示：");
console.log("• 想象你在整理一摞书，每次都从剩下的书中选择最薄的一本");
console.log("• 将选中的书放到已排序部分的最前面");
console.log("• 重复这个过程直到所有书都整理完毕\n");

console.log("⚡ 核心特点：");
console.log("• 每次都能确定一个元素的最终位置");
console.log("• 交换次数固定为 n-1 次");
console.log("• 时间复杂度始终是 O(n²)");
console.log("• 不稳定排序（可能改变相等元素的顺序）\n");

testSelectionSort();