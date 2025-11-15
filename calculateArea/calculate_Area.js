let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

 let area = length * width;

 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateTotalAmount(amounts) {
        const totalAmount = amounts.reduce((acc, val) => acc + val, 0);
        return totalAmount;
      }
      
      document.getElementById('calculateBtn').addEventListener('click', () => {
        const amounts = [
          parseFloat(document.getElementById('grocery1').value) || 0,
          parseFloat(document.getElementById('grocery2').value) || 0,
          parseFloat(document.getElementById('grocery3').value) || 0,
        ];
      
        const total = calculateTotalAmount(amounts);
        document.getElementById('totalAmount').textContent = `Total amount spent on groceries: $${total.toFixed(2)}`;
      });

