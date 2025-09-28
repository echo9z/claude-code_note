/**
 * 插入排序算法
 *
 * 算法思想：
 * 1. 将数组分为已排序和未排序两部分
 * 2. 初始时，已排序部分只有第一个元素
 * 3. 依次将未排序部分的元素插入到已排序部分的正确位置
 *
 * 时间复杂度：
 * - 最好情况（已排序）：O(n)
 * - 平均情况：O(n²)
 * - 最坏情况（逆序）：O(n²)
 *
 * 空间复杂度：O(1) - 原地排序
 */
function insertionSort(arr) {
    // 复制数组以避免修改原数组
    const result = [...arr];
    const n = result.length;

    // 从第二个元素开始（索引1），因为第一个元素默认已排序
    for (let i = 1; i < n; i++) {
        // 当前需要插入的元素
        const currentElement = result[i];

        // 已排序部分的最后一个元素的索引
        let j = i - 1;

        /**
         * 关键步骤：寻找插入位置
         * 1. 从已排序部分的末尾开始比较
         * 2. 如果当前元素小于比较元素，就将比较元素向后移动一位
         * 3. 继续向前比较，直到找到正确的插入位置
         */
        while (j >= 0 && result[j] > currentElement) {
            // 将较大的元素向右移动一位
            result[j + 1] = result[j];
            j--;
        }

        /**
         * 插入元素到正确位置
         * j + 1 就是正确的插入位置，因为：
         * - 要么 j = -1（当前元素是最小的）
         * - 要么 result[j] <= currentElement（找到了正确的位置）
         */
        result[j + 1] = currentElement;

        // 可选：打印每一步的排序过程，便于理解
        console.log(`第${i}步后: [${result.join(', ')}]`);
    }

    return result;
}

/**
 * 优化版本的插入排序
 * 使用临时变量减少赋值次数
 */
function optimizedInsertionSort(arr) {
    const result = [...arr];
    const n = result.length;

    for (let i = 1; i < n; i++) {
        const currentElement = result[i];
        let j = i - 1;

        // 先找到插入位置，然后再赋值
        while (j >= 0 && result[j] > currentElement) {
            j--;
        }

        // 如果需要移动元素
        if (j !== i - 1) {
            // 将插入位置后的所有元素向后移动一位
            for (let k = i - 1; k > j; k--) {
                result[k + 1] = result[k];
            }
            result[j + 1] = currentElement;
        }
    }

    return result;
}

// 测试函数
function testInsertionSort() {
    console.log("=== 插入排序演示 ===\n");

    // 测试用例1：一般情况
    const testArray1 = [64, 34, 25, 12, 22, 11, 90];
    console.log("测试用例1 - 一般情况：");
    console.log("原数组:", testArray1.join(', '));
    console.log("开始排序...\n");
    const sorted1 = insertionSort(testArray1);
    console.log("\n最终结果:", sorted1.join(', '));
    console.log("\n" + "=".repeat(50) + "\n");

    // 测试用例2：已排序数组
    const testArray2 = [1, 2, 3, 4, 5];
    console.log("测试用例2 - 已排序数组（最好情况）：");
    console.log("原数组:", testArray2.join(', '));
    const sorted2 = insertionSort(testArray2);
    console.log("结果:", sorted2.join(', '));
    console.log("\n" + "=".repeat(50) + "\n");

    // 测试用例3：逆序数组
    const testArray3 = [5, 4, 3, 2, 1];
    console.log("测试用例3 - 逆序数组（最坏情况）：");
    console.log("原数组:", testArray3.join(', '));
    const sorted3 = insertionSort(testArray3);
    console.log("结果:", sorted3.join(', '));
    console.log("\n" + "=".repeat(50) + "\n");

    // 测试用例4：包含重复元素
    const testArray4 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
    console.log("测试用例4 - 包含重复元素：");
    console.log("原数组:", testArray4.join(', '));
    const sorted4 = insertionSort(testArray4);
    console.log("结果:", sorted4.join(', '));
}

// 运行测试
testInsertionSort();

/**
 * 插入排序的优缺点：
 *
 * 优点：
 * 1. 实现简单，易于理解
 * 2. 对于小规模数据效率不错
 * 3. 对于基本有序的数据效率很高（接近O(n)）
 * 4. 是稳定排序（相等元素的相对位置不变）
 * 5. 空间复杂度为O(1)，原地排序
 *
 * 缺点：
 * 1. 对于大规模数据效率较低（O(n²)）
 * 2. 最坏情况下性能很差
 *
 * 适用场景：
 * - 小规模数据排序
 * - 基本有序的数据
 * - 作为其他排序算法的子过程（如快速排序的小数组优化）
 */