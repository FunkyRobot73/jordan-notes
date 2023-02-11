function bgChangeButtonPress(){
    const bodyElements = document.getElementsByTagName('body');
    const body = bodyElements[0];
    body.style.backgroundColor = '#BBBBBB';
}

function onWindowLoad(){
    const bgChangeButton = document.getElementById('change-bg-colour');
    bgChangeButton.addEventListener('click', bgChangeButtonPress());
}

window.addEventListener('load', onWindowLoad);



window.addEventListener('load', () => {
    document.getElementById('change-bg-colour').addEventListener('click', () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'red'
    });
});




// window.addEventListener('load', () => {

//     document.getElementById('calculateButton').addEventListener('click', function () {
//         let num1 = parseInt(document.getElementById('num1').value);
//         let num2 = parseInt(document.getElementById('num2').value);
//         let sum = num1 + num2
//         let num1IsLarger = num1 > num2;

//         if (num1IsLarger) {
//             alert(`${num1} is larger than ${num2}`)
//         } else {
//             alert(`${num2} is larger than ${num1}`)
//         }
//         alert(`... and ${num1} + ${num2} = ${sum}`)
//     });


    
    
// });


// console.log(document.getElementsByTagName('div'));
// console.log(document.getElementsByClassName('example-class'));
// console.log(document.getElementById('num1'));

// This adds an event listener that will fire with all other listeners on this same event
// window.addEventListener('load', () => {
// });


// This will override the eventlistener and only do whats defined here
// window.onload = function () {
// };

// $(document).ready(function() {
    // Your code to run when the document has finished loading
// });