let test = "hello";

function say() {
  console.log(test);
}
function bar() {
  let test = "goodbye";
  say();
}

bar();
