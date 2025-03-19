let nameNl = prompt('Please enter your number');
let lastName = prompt('Please enter your number');

switch (true) {
    case nameNl.length >= 5, lastName.length >= 6:
        alert(nameNl.length + lastName.length);
        console.log(nameNl.length + lastName.length);

        break;
    default:
        alert(`УПС!`);
        console.log(nameNl.length + lastName.length);
}

// let lang = prompt('lang enter')
// switch (true) {

// }

// let cost;
// const a = prompt('Please enter your browser');

// if (subscription === 'Apple') {
//     cost = 0.3;
// } else if (subscription === 'Banana') {
//     cost = 0.2;
// } else if (subscription === 'kiwi') {
//     cost = 0.2;
// } else if (subscription === 'orange') {
//     cost = 0.4;
// } else {
//     console.log('Invalid product type');
//     alert('Invalid product type!');
// }


// switch (a) {
//     case '0':
//         document.write(`<h1>0</h1>`);
//         alert(`${nim}`)
//         break;

//     case '1':
//         document.write(`<h1>1</h1>`);
//         break;

//     case '2,3':
//         document.write(`<h1>2.3</h1>`);
//         break;

//     default:

//         alert(`error!`);
// }

// switch (browser) {
//     case 'Chrome':
//         cost = 'Supported browser point 100/100';
//         alert(`We are supporting ${browser} browser!! Hope our website work fine!! More info: ${cost}`);
//         document.write(`<h1">Supported browser point 100/100</h1>`); 
//         break;
//     case 'Edge':
//         cost = 'Supported browser point 100/100';
//         alert(`We are supporting ${browser} browser!! Hope our website work fine!! More info: ${cost}`);
//         document.write(`<h1>Supported browser point 100/100</h1>`);
//         break;
//     case 'Opera':
//         cost = 'Supported browser point 97/100';
//         alert(`We are supporting ${browser} browser!! Hope our website work fine!! More info: ${cost}`);
//         document.write(`<h1>Supported browser point 97/100</h1>`);
//         break;
//     case 'Safari':
//         cost = 'Supported browser point 98/100';
//         alert(`We are supporting ${browser} browser!! Hope our website work fine!! More info: ${cost}`);
//         document.write(`<h1>Supported browser point 98/100 ⌘</h1>`);
//         break;
//     case 'Other':
//         cost = "We are not fully supporting this browser!";
//         break;
//     case 'Google Chrome':
//         cost = 'Supported browser point 100/100';
//         alert(`We are supporting ${browser} browser!! Hope our website work fine!! More info: ${cost}`);
//         document.write(`<h1>Supported browser point 100/100</h1>`);
//         break;
//     case 'Microsoft Edge':
//         cost = 'Supported browser point 100/100';
//         alert(`We are supporting ${browser} browser!! Hope our website work fine!! More info: ${cost}`);
//         document.write(`<h1>Supported browser point 100/100</h1>`);
//         break;
//     case 'Apple Safari':
//         cost = 'Supported browser point 98/100';
//         alert(`We are supporting ${browser} browser!! Hope our website work fine!! More info: ${cost}`);
//         document.write(`<h1>Supported browser point 98/100 ⌘</h1>`);
//         break;
//     default:
//         console.log('Invalid browser!');
//         alert(`We are not fully supporting ${browser} browser!!`);
// }
// alert(`${cost} $ is your product cost`);


// console.log(cost);

// if (test){
//     let tense = 'test';
//     console.log(tense);
// }
// console.log(tense); //err