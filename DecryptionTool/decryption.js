function decryptBinary() {
    let binaryMessage = document.getElementById("binaryInput").value.replace(/\n/g, ''); // Remove line breaks
    let key = parseInt(document.getElementById("keyInput").value);
    let salt = parseInt(document.getElementById("saltInput").value);

    let decryptedMessage = '';
    let i = 0; // Index to track the position in binary message
    let randomLetterCount = 0; // Count for consecutive random letters

    while (i < binaryMessage.length) {
        // Check if the current character is part of the binary representation
        if (binaryMessage[i] === '\\') {
            // Move to the next character to start reading the binary number
            i++;
            // Get the binary chunk based on the key size
            let binaryChunk = binaryMessage.substr(i, key);

            // If the chunk is not valid for conversion, break the loop
            if (binaryChunk.length < key) break;

            // Convert binary to decimal
            let charValue = parseInt(binaryChunk, 2);

            // Adjust for salt
            charValue = (charValue - salt + 10) % 10; // Reverse the salt effect for digits
            if (charValue < 0) charValue += 10; // Ensure non-negative value

            decryptedMessage += charValue; // Add the digit directly

            // Move the index past the binary chunk and the closing marker '/'
            i += key + 1; // +1 for '/'
        } else if (binaryMessage[i] === '0' || binaryMessage[i] === '1') {
            // Handle regular letter binary representation
            // Get the binary chunk based on the key size
            let binaryChunk = binaryMessage.substr(i, key);

            // If the chunk is not valid for conversion, break the loop
            if (binaryChunk.length < key) break;

            // Convert binary to decimal
            let charValue = parseInt(binaryChunk, 2);

            // Reverse the salt effect for letters
            charValue = (charValue - salt + 26) % 26;
            if (charValue === 0) charValue = 26; // Wrap around if value is 0

            // Convert back to character (A = 1, B = 2, ...)
            decryptedMessage += String.fromCharCode(charValue + 'a'.charCodeAt(0) - 1); // Use 'A' for uppercase
            
            // Increment i to skip the key length
            i += key; // Increment i to skip the key length

            // Reset random letter count after handling a valid binary character
            randomLetterCount = 0;
        } else if (/[a-zA-Z]/.test(binaryMessage[i])) { // Check if it's a random letter
            randomLetterCount++; // Increment count for random letters

            // Move to the next character
            i++;
        } else {
            // If it's a non-binary character, just move to the next one
            i++;
        }

        // After checking each character, evaluate the random letter count
        if (randomLetterCount === 2 || randomLetterCount === 3) {
            // 2 or 3 random letters make 1 space
            decryptedMessage += ' ';
            randomLetterCount = 0; // Reset counter after adding space
        } else if (randomLetterCount === 4) {
            // 4 random letters make 2 spaces
            decryptedMessage += '  '; // Add two spaces
            randomLetterCount = 0; // Reset counter
        }
    }

    // Output the decrypted message
    document.getElementById("outputBox").innerText = decryptedMessage.trim(); // Trim leading/trailing spaces
}

// Function to copy the decrypted message to clipboard
function copyToClipboard() {
    const outputBox = document.getElementById("outputBox").innerText; // Get the inner text
    navigator.clipboard.writeText(outputBox) // Use Clipboard API to copy the text
        .then(() => {
            alert("Decrypted text copied to clipboard!"); // Confirmation message
        })
        .catch(err => {
            console.error("Failed to copy: ", err); // Log any errors
        });
}