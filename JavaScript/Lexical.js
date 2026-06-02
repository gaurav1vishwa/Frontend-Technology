
let a = 20;
function fn() {
    let b = 10;
    function fn2() {
          let  c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    fn2();
    console.log(a);
    console.log(b);
    // console.log(c); // its gave error because c is not defined in fn scope  
}
fn();
    // console.log(a); its gave error because a is not defined in global scope
    