// CLI-Based Calculator using process.argv
// Usage: node calculator.js <operation> <num1> <num2>
// Example: node calculator.js add 10 5

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("Invalid usage!");
  console.log("Usage: node calculator.js <operation> <num1> <num2>");
  console.log("Operations: add, subtract, multiply, divide");
  process.exit(1);
}

const operation = args[0].toLowerCase();
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Error: Please provide valid numbers.");
  process.exit(1);
}

let result;

switch (operation) {
  case "add":
    result = num1 + num2;
    console.log(`Result: ${num1} + ${num2} = ${result}`);
    break;

  case "subtract":
    result = num1 - num2;
    console.log(`Result: ${num1} - ${num2} = ${result}`);
    break;

  case "multiply":
    result = num1 * num2;
    console.log(`Result: ${num1} * ${num2} = ${result}`);
    break;

  case "divide":
    if (num2 === 0) {
      console.log("Error: Division by zero is not allowed.");
      process.exit(1);
    }
    result = num1 / num2;
    console.log(`Result: ${num1} / ${num2} = ${result}`);
    break;

  default:
    console.log(`Error: Unknown operation "${operation}".`);
    console.log("Valid operations are: add, subtract, multiply, divide");
    process.exit(1);
}