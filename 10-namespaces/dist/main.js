"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? true : false;
    };
})(Validations || (Validations = {}));
console.log('NAMESPACE: ', Validations.validateText('Daniel'));
