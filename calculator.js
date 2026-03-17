/**
 * 计算器模块
 * 提供基本的数学运算功能
 */

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    }

    power(base, exponent) {
        return Math.pow(base, exponent);
    }

    sqrt(number) {
        if (number < 0) {
            throw new Error("Square root of negative number is not allowed");
        }
        return Math.sqrt(number);
    }
}

// 创建计算器实例
const calc = new Calculator();

// 导出计算器类和实例
module.exports = {
    Calculator,
    calc
};

// 如果直接运行此文件，进行一些测试
if (require.main === module) {
    console.log("计算器功能测试:");
    console.log(`5 + 3 = ${calc.add(5, 3)}`);
    console.log(`10 - 4 = ${calc.subtract(10, 4)}`);
    console.log(`6 * 7 = ${calc.multiply(6, 7)}`);
    console.log(`15 / 3 = ${calc.divide(15, 3)}`);
    console.log(`2^8 = ${calc.power(2, 8)}`);
    console.log(`√16 = ${calc.sqrt(16)}`);
}