// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;

function specialCharacters(formData) {
    // Replace HTML special characters with their respective entities
    let replaced = formData
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    return replaced;
}


console.log(specialCharacters("<h2>Hello World</h2>"))