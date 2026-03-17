/**
 * GitHub 测试项目
 * 一个简单的示例项目
 */

function greet(name) {
    return `Hello, ${name}! Welcome to the GitHub project!`;
}

function calculateSum(a, b) {
    return a + b;
}

function main() {
    console.log(greet("World"));
    
    const result = calculateSum(5, 3);
    console.log(`5 + 3 = ${result}`);
    
    // 测试更多功能
    console.log(greet("Developer"));
    console.log(`10 + 20 = ${calculateSum(10, 20)}`);
}

// 如果直接运行此文件，执行 main 函数
if (require.main === module) {
    main();
}

module.exports = {
    greet,
    calculateSum,
    main
};