/**
 * GitHub 测试项目
 * 一个简单的示例项目
 */

const { Calculator } = require('./calculator');

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
    
    // 使用新的计算器功能
    const calc = new Calculator();
    console.log("\n计算器功能测试:");
    console.log(`10 + 5 = ${calc.add(10, 5)}`);
    console.log(`20 - 8 = ${calc.subtract(20, 8)}`);
    console.log(`6 * 4 = ${calc.multiply(6, 4)}`);
    console.log(`15 / 3 = ${calc.divide(15, 3)}`);
}

// 如果直接运行此文件，执行 main 函数
if (require.main === module) {
    main();
}

module.exports = {
    greet,
    calculateSum,
    main,
    Calculator
};