function isPalindrome(str) {

    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

function checkPalindrome() {
    const inputString = document.getElementById("inputString").value;
    const resultElement = document.getElementById("result");

    if (isPalindrome(inputString)) {
        resultElement.innerText = "It's a palindrome!";
    } else {
        resultElement.innerText = "It's not a palindrome.";
    }

}