// Function to convert text to binary with enhanced encryption
function encryptText() {
    let plaintext = document.getElementById("plaintext").value;
    let key = parseInt(document.getElementById("key").value);

    // Validate key: it must be greater than 5
    if (key <= 4) {
        alert("Please choose a key greater than 5 for proper encryption.");
        return; // Exit the function if the key is invalid
    }

    // Add a salt (random number between 3 and 9) for more security
    let salt = Math.floor(Math.random() * 7) + 3; // Random number between 3 and 9

    // Initialize the output binary message array
    let binaryMessageArray = [];
    let nonSpaceCount = 0; // Track non-space characters

    // Convert each character to its binary representation with enhanced security
    for (let i = 0; i < plaintext.length; i++) {
        let character = plaintext.charAt(i);

        // If the character is a space, add two random letters
        if (character === ' ') {
            binaryMessageArray.push(getRandomLetter()); // Add first random letter for space
            binaryMessageArray.push(getRandomLetter()); // Add second random letter for space
            continue; // Skip to the next character
        }

        // Process alphabetic characters (both upper and lower case) and numeric characters (0-9)
        if ((character.toUpperCase() >= 'A' && character.toUpperCase() <= 'Z') || (character >= '0' && character <= '9')) {
            let charValue;

            if (character >= '0' && character <= '9') {
                // Convert digit to a number (0 = 0, 1 = 1, ..., 9 = 9)
                charValue = parseInt(character);
                // Mix with the salt for extra randomness
                charValue = charValue + salt; // Add salt to the digit
                
                // Convert number to binary string
                let binaryString = charValue.toString(2);
                
                // Pad the binary string to the desired length (key)
                binaryString = binaryString.padStart(key, '0');

                // Add markers for numbers using \ and /
                binaryMessageArray.push("\\" + binaryString + "/");
            } else {
                // Convert character to a number (A = 1, B = 2, etc.)
                charValue = character.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1;
                // Mix with the salt for extra randomness
                charValue = (charValue + salt) % 26;
                if (charValue === 0) charValue = 26; // Wrap around if value is 0

                // Convert number to binary string
                let binaryString = charValue.toString(2);
                
                // Pad the binary string to the desired length (key)
                binaryString = binaryString.padStart(key, '0');

                // Add the binary string for letters without markers
                binaryMessageArray.push(binaryString);
            }

            // Increment the count of non-space characters
            nonSpaceCount++;

            // Insert a random letter after every n-th non-space character
            if (nonSpaceCount % salt === 0) {
                binaryMessageArray.push(getRandomLetter()); // Add a random letter after every n-th non-space character
            }
        }
    }

    // Join all the parts together into a single string
    let binaryMessage = binaryMessageArray.join('');

    // Insert line breaks every 133 bits
    let formattedMessage = '';
    for (let j = 0; j < binaryMessage.length; j++) {
        formattedMessage += binaryMessage.charAt(j);
        if ((j + 1) % 133 === 0) {
            formattedMessage += '\n'; // Add a newline after every 133 bits
        }
    }

    // Display the result and the salt used in the encryption
    document.getElementById("binaryOutput").innerHTML = formattedMessage.replace(/\n/g, "<br>"); // Replace newline with <br> for HTML
    document.getElementById("saltOutput").innerHTML = "Salt used: " + salt;
}

// Function to get a random letter (upper or lowercase) for spaces
function getRandomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

// Function to copy the binary message to clipboard
function copyToClipboard() {
    const binaryOutput = document.getElementById("binaryOutput").innerText; // Get the inner text
    navigator.clipboard.writeText(binaryOutput) // Use Clipboard API to copy the text
        .then(() => {
            alert("Binary message copied to clipboard!"); // Confirmation message
        })
        .catch(err => {
            console.error("Failed to copy: ", err); // Log any errors
        });
}
