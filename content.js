// Define the mapping of field names or placeholders to values
const fieldsToValues = {
    "name": "Sohum Bilawal",
    "email": "sohumbilawal@gmail.com",
    "linkedin": "https://www.linkedin.com/in/sohumbilawal",
    // Add more mappings as needed
};

// Iterate over all input elements
const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    // Try to determine the field's name based on its attributes
    let fieldName = input.name || input.placeholder || input.id;

    // If the field name is in our mapping, set the input's value
    if (fieldsToValues[fieldName]) {
        input.value = fieldsToValues[fieldName];
        console.log('field name: ' + fieldName + ' value: ' + fieldsToValues[fieldName] + ' Found!');
    }
    // If the field name includes 'LinkedIn', set the value to the linkedin URL
    else if (input.name.toLowerCase().includes('linkedin')) {
        fieldName = 'linkedin';
        input.value = fieldsToValues[fieldName];
        console.log('field name: ' + fieldName + ' value: ' + fieldsToValues[fieldName] + ' Found!');
    }
});

