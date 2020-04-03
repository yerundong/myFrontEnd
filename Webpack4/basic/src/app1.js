import './style.css'
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import json from '../assets/json.json';
import xml from '../assets/xml.xml';
const obody = document.querySelector("body");
const oimg1 = new Image();
const oimg2 = new Image();
oimg1.src = img1;
oimg2.src = img2;
console.log('app1.js');
obody.appendChild(oimg1)
obody.appendChild(oimg2)

// console.log(json);
// console.log(xml);

console.error('I get called from print.js!');

