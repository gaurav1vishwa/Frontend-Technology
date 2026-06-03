function reverseString(str) {
    let arr = str.split(""); // "hello" => ['h', 'e', 'l', 'l', 'o']
    arr.reverse();
    let reversedStr = arr.join("");
    console.log(reversedStr);
}
reverseString("hello"); // "olleh"