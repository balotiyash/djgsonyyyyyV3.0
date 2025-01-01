/** 
 * File: controller/encrypt.js
 * Author: Yash Balotiya
 * Description: This file contains Logical Part to encrypt and decrypt the text.
 * Created on: 01/01/2025
 * Last Modified: 01/01/2025
*/

// Helper function to generate a random character
function getRandomCharacter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

// Encrypt function with random characters inserted and the string reversed
function encrypt(text, shift) {
    let encryptedText = '';
    
    // Apply the Caesar cipher encryption and add random characters between each letter
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        
        // Encrypt uppercase letters
        if (char >= 65 && char <= 90) {
            encryptedText += String.fromCharCode(((char - 65 + shift) % 26) + 65);
        }
        // Encrypt lowercase letters
        else if (char >= 97 && char <= 122) {
            encryptedText += String.fromCharCode(((char - 97 + shift) % 26) + 97);
        }
        // Leave non-alphabetic characters unchanged
        else {
            encryptedText += text[i];
        }
        
        // Insert a random character after each letter
        encryptedText += getRandomCharacter();
    }

    // Reverse the encrypted text to add another layer of obfuscation
    return encryptedText.split('').reverse().join('');
}

// Decrypt function to reverse the process
function decrypt(text, shift) {
    // Reverse the text to undo the reversal during encryption
    text = text.split('').reverse().join('');
    
    let decryptedText = '';
    let i = 0;

    // Remove the random characters and decrypt each remaining character
    while (i < text.length) {
        let char = text.charCodeAt(i);
        
        // Decrypt uppercase letters
        if (char >= 65 && char <= 90) {
            decryptedText += String.fromCharCode(((char - 65 - shift + 26) % 26) + 65);
            i++; // Move to the next character
        }
        // Decrypt lowercase letters
        else if (char >= 97 && char <= 122) {
            decryptedText += String.fromCharCode(((char - 97 - shift + 26) % 26) + 97);
            i++; // Move to the next character
        }
        // If it's a non-alphabetic character, just add it to the decrypted text
        else {
            decryptedText += text[i];
            i++; // Move to the next character
        }
        
        // Skip the random character that was inserted
        if (i < text.length) {
            i++; // Skip the random character
        }
    }
    return decryptedText;
}

// Decrypt function to reverse the process
// function j10(k11,l12){k11=k11.split('').reverse().join('');let m13='';let n14=0;while(n14<k11.length){let o15=k11.charCodeAt(n14);if (o15>=65&&o15<=90){m13+=String.fromCharCode(((o15-65-l12+26)%26)+65);n14++;}else if(o15>=97&&o15<=122){m13+=String.fromCharCode(((o15-97-l12+26)%26)+97);n14++;}else{m13+=k11[n14];n14++;}if(n14<k11.length){n14++;}}return m13;}

// Example usage
// const text = "ganesh.sunariwal@somaiya.edu";
// const text = "1A2B3C@DJGSonyyyyy@";
const text = "Hello World";
const shift = 3;

const encrypted = encrypt(text, shift);
console.log("Encrypted text: ", encrypted);

const decrypted = decrypt(encrypted, shift);
console.log("Decrypted text: ", decrypted);