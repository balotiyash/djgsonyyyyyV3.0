/** 
 * File: controller/encrypt.js
 * Author: Neha Balotia
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
    
    // Remove the random characters and decrypt each remaining character
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        
        // Decrypt uppercase letters
        if (char >= 65 && char <= 90) {
            decryptedText += String.fromCharCode(((char - 65 - shift + 26) % 26) + 65);
        }
        // Decrypt lowercase letters
        else if (char >= 97 && char <= 122) {
            decryptedText += String.fromCharCode(((char - 97 - shift + 26) % 26) + 97);
        }
        // Skip non-alphabetic characters (the random ones)
        else {
            i++; // Skip the random character that was inserted
        }
    }
    return decryptedText;
}

// Example usage
const text = "Hello World!";
const shift = 3;

const encrypted = encrypt(text, shift);
console.log("Encrypted text: ", encrypted);

const decrypted = decrypt(encrypted, shift);
console.log("Decrypted text: ", decrypted);