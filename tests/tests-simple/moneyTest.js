import formatCurrecy from '../../scripts/utils/money.js';

console.log('test suite: format currency')
console.log('converts cents into dollars')
 if (formatCurrecy(2095) == '20.95') {
  console.log('passed');
 } else {console.log('failed')}

console.log('works with 0')
 if (formatCurrecy(0) == '0.00') {
  console.log('passed');
 } else {console.log('failed')}

console.log('rounds up to the nearst cent')
 if (formatCurrecy(2000.5) == '20.01') {
  console.log('passed');
 } else {console.log('failed')}

 if (formatCurrecy(2000.4) == '20.00') {
  console.log('passed');
 } else {console.log('failed')}