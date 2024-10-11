# Encryption and Decryption Tool

This repository contains two tools: one for encrypting text to binary format and another for decrypting binary back to text. Both tools use simple HTML, CSS, and JavaScript for functionality, with added key and salt for enhanced encryption/decryption.

## Table of Contents
- [Encryption Tool](#encryption-tool)
- [Decryption Tool](#decryption-tool)
- [Access the Tools](#access-the-tools)
- [Future Improvements](#future-improvements)

---

## Encryption Tool

The **Encryption Tool** allows you to convert text into binary representation, applying a key and a salt to enhance the security of the encrypted message.

### Features:
- Converts text to binary.
- Applies a user-defined key and salt for extra encryption.
- Provides a copy-to-clipboard button for easy use.

### Files:
- `index.html`: The HTML file for the encryption tool.- 
- `encryption.js`: The JavaScript file for the encryption functionality.
- `styles.css`: The CSS file for the encryption tool's design.

---

## Decryption Tool

The **Decryption Tool** allows you to convert encrypted binary back into human-readable text. The correct key and salt used for encryption are required to decrypt the message properly.

### Features:
- Converts binary back to text.
- Uses the same key and salt to reverse the encryption.
- Provides a copy-to-clipboard button for copying the decrypted text.

### Files:
- `index.html`: The HTML file for the decryption tool.- 
- `decryption.js`: The JavaScript file for the decryption functionality.
- `styles.css`: The CSS file for the decryption tool's design.

---

## Access the Tools

- [Encryption Tool](https://jemenfousbruh.github.io/text-to-binary-tool/EncryptionTool/)
- [Decryption Tool](https://jemenfousbruh.github.io/text-to-binary-tool/DecryptionTool/)

## Usage

1. **Encryption Tool**: Enter your text, and the tool will convert it to a binary representation.
2. **Decryption Tool**: Enter your encrypted binary message, key, and salt to retrieve the original text.


---

## Future Improvements

- **Security Enhancements**: Add more complex encryption algorithms and improve key/salt management.
- **User Interface**: Enhance the UI design for better user experience.
- **Error Handling**: Provide better error handling for invalid input during encryption or decryption.
- **Mobile Responsiveness**: Improve the responsiveness of the tools for mobile and tablet use.

---

## License

This project is open source and available under the [MIT License](LICENSE).
