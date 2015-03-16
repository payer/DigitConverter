// English digit to Bangla 
    function digits_en2bd(number) {
        return number.toString().replace(/\d/g, function(d){
            return String.fromCharCode(d.charCodeAt(0) + 2486);
        });
    }
// English to Arabic
    function digits_en2ar(number) {
        return number.toString().replace(/\d/g, function(d){
            return String.fromCharCode(d.charCodeAt(0) + 1584);
        });
    }
