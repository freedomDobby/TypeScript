// function logMessage(value:any){
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);

// type의 장점을 살리면서 다양한 타입을 설정할 수 있는 방법
//UnionType
// function logMessage(value: string | number) {
//   console.log(value);
// }

// logMessage("hello");
// logMessage(100);

//
var seho: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}
