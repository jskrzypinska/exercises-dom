let display = document.getElementById("display");
display.disabled = true;

let operators = document.getElementsByClassName('operator');
operators = Array.from(operators);
console.log(operators)

let buttons = document.getElementsByClassName("button");
let numbers = Array.from(buttons).filter((button) => {
    let number = Number(button.textContent)
    if (isNaN(number)) {
        return false 
        } else {
        return true
        }
    

})
console.log(numbers);

// TRAVERSING od document do przycisku +
let divs = Array.from(document.firstElementChild.children[1].children)
  .filter(element => element.tagName === 'DIV')

// HACK
divs[4].lastElementChild.previousElementSibling

// // Create AC button rozwiazanie 1
// let acButton = document.createElement('button')
// acButton.innerText = 'AC'

// let displayParent = display.parentElement
// displayParent.append(acButton)

// //Ad dot rozwiazanie 1
// let dotButton = document.createElement('button')
// dotButton.innerText = '.'

// let lastRowButtons = document.firstElementChild.children[1].children[4]
//                   // document.firstElementChild.lastElementChild.children[4]

// let zeroButton = lastRowButtons.firstElementChild

// // insert element before + button (which is sibling of zero button)
// lastRowButtons.insertBefore(dotButton, zeroButton.nextElementSibling)

function addElement(element, text, target) {
    let htmlElement = document.createElement(element)
    htmlElement.innerText = text
    target.after(htmlElement)
    // target.after(htmlElement)
    // htmlElement.before(target)
    return htmlElement
  }
  
  // Create AC button
  let acButton = addElement('button', 'AC', display)
  
  let lastRowButtons = document.firstElementChild.children[1].children[4]
                    // document.firstElementChild.lastElementChild.children[4]
  let zeroButton = lastRowButtons.firstElementChild
  // Create dot button
  let dotButton = addElement('button', '.', zeroButton)
  
  numbers.forEach((button) => {
    button.addEventListener('click', (event) => {
      const number = event.target.innerText
      display.value = display.value + number
    })
  })

  // sprawdzenie czy operatory sa ['+', '-', '/', '*']

//   operators.forEach((operator) => {
//     operator.addEventListener('click', (event) => {
//       const operator = event.target.innerText
//       const displayValue = display.value;
//       const arrayOfOpera = ['+', '-', '/', '*']
      
//         if (operator === '=') {
//             display.value = eval(displayValue)
//         }

//       const hasOperator = arrayOfOpera.some ( opr => {
//           displayValue.includes(opr)
//       })
//       if(hasOperator) {
//           return
//       } else {
//           display.value = display.value + ' ' + operator + ' ';

//       }
//     })
//   })

  
//   acButton.addEventListener('click', (event) => {
//     display.value = ''
//   })

  