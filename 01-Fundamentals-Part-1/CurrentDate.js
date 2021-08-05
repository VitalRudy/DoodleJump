//Date(class) current TIME and DATE:

let timeStamp = Date.now(); // current time as timestamp (date)
let now = new Date(); // current time as object DATE
let ms = now.getTime(); // transform to millisecond timestamp
let iso = now.toISOString(); // transform to string with default format
