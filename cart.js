/*
🛠 Debugging summary

1. Fixed off by one error in calculateTotal loop (changed <= to <)
2. Added validation to applyDiscount to handle invalid discountRate values.
3. Used debugger and breakpoints in DevTools to inspect cartItems and total.
4. Tested edge cases:
   - Empty cart 
   - One item 
   - discountRate = 0 
   - discountRate = 1 
5. Error messages and call stack helped quickly locate where cartItems[i] was undefined.

Browser DevTools were essential for:
- Inspecting variable values in real-time
- Using the call stack to trace the error origin
- Stepping through code execution
*/

const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    debugger;
    total += cartItems[i].price;
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (typeof discountRate !== 'number' || discountRate < 0 || discountRate > 1) {
    console.warn("Invalid discount rate, skipping discount.");
    return total;
  }
  return total - total * discountRate;
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
    receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`;
  return receipt;
}

console.log("Starting shopping cart calculation... please hold...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2);
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal.toFixed(2)}`;
document.getElementById("receipt").textContent = receipt;
