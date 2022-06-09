export default function inputValidation(input, type) {
    //let output = input || "";
    let validated = true;
    let reason = '';

    const outputSetter = (reasonInput) => {
        validated = false;
        reason = reasonInput;
    }

    if (input.toString().trim() === "" || input === 0) {
        outputSetter("Enter all required data");
        return;
    }

    switch (type) {
        case 'email':
            if (!input.includes('@')) {
                outputSetter("Please enter a proper email");
            } else if (input.length === 0) {
                outputSetter("Please enter an email");
            }
            break;
        // case 'dodId':
        //     if (input < 0 && !Number.isInteger(input)) {
        //         outputSetter("enter valid dod #")
        //     } else if (input.length !== 10) {
        //         outputSetter("enter valid dod #")
        //     }
        //     break;
        case 'acftScore':
            // if (!typeof input === 'number') {
            //     outputSetter("ACFT score must be a number");
            // } else

            if (input > 600 || input < 0) {
                outputSetter("Please enter an ACFT score between 0 and 600");
            } else if (input === 0) {
                outputSetter("Please enter an acftScore");
            }
            break;
        case 'weight':
            if (input <= 0) {
                outputSetter("Enter a weight");  //need to check for a float
            }
            break;
        case 'height':
            if (input <= 0) {
                outputSetter("Enter height");
            }
            break;
        case 'referenceEmail':
            if (!input.includes('@')) {
                outputSetter("Please enter a proper email");
            } else if (input.length === 0) {
                outputSetter("Please enter an email");
            }
            break;
        case 'referencePhone':
            if (input.length <= 10 || input.length >= 14) {
                outputSetter('Please enter a valid phone number (10-14 digits)');
            }
            break;
        // case 'fName':
        //     if (input.length === 0) {
        //         outputSetter('Enter a name')
        //     }
        //     break;
        // case 'lName':
        //     if (input.length === 0) {
        //         outputSetter('Enter a last Name')
        //     }
        //     break;
        default:
            validated = true;
            reason = "";
            //output = "";
            break;
    }

    return ({
        output: validated ? "" : type,
        validated: validated,
        reason: reason,
    })
}