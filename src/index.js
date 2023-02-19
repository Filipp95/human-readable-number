module.exports = function toReadable (number) {
    let arr = number.toString().split('');
    let res;
    let secArr;

    function digit (number) {
        switch (number.toString()) {
           case '1': return res = 'one';
           case '2': return res = 'two';
           case '3': return res = 'three';
           case '4': return res = 'four';
           case '5': return res = 'five';
           case '6': return res = 'six';
           case '7': return res = 'seven';
           case '8': return res = 'eight';
           case '9': return res = 'nine';
           case '0': return res = 'zero';
       }
    }

    function decimal (number) {
        switch (number.toString()) {
            case '1': return res= 'ten';
            case '2': return res = 'twenty';
            case '3': return res = 'thirty';
            case '4': return res = 'forty';
            case '5': return res = 'fifty';
            case '6': return res = 'sixty';
            case '7': return res = 'seventy';
            case '8': return res = 'eighty';
            case '9': return res = 'ninety';
        }
    } 

    function exceptions (number) {
        switch (number) {
            case 1: return res= 'eleven';
            case 2: return res = 'twelve';
            case 3: return res = 'thirteen';
            case 4: return res = 'fourteen';
            case 5: return res = 'fifteen';
            case 6: return res = digit(number.toString())+'teen';
            case 7: return res = digit(number.toString())+'teen';
            case 8: return res = digit(number.toString())+'een';
            case 9: return res = digit(number.toString())+'teen';
        }
    } 

    function twoNumbers (number) {
        secArr=number.toString().split('')
        if (secArr[1] != '0' && number<=19) {
            number=number%10;
            res = exceptions(number);
            return res
        }
        else if (secArr[1] != '0' && number>19){
            let decimalNumber = Math.floor(number/10);
            number = number%10;
            res = decimal(decimalNumber)+' '+digit(number);
            return res
        }
        else if (secArr[1] == '0') {
            number = number/10;
            res = decimal (number);
            return res
        }
    }

    function choise(number) {
        if ((number%100).toString().split('').length == 2) 
        return twoNumbers(number%100);
        else return digit(number%100)
    }

    function threeNumbers (number) {
        if (number%100 !=0) {
            return (digit(Math.floor(number/100)) + ' hundred ' + choise(number));
        }
        else return (digit(Math.floor(number/100)) + ' hundred')
    }

    switch (arr.length) {
       case 1: return digit(number);
       case 2: return twoNumbers (number);
       case 3: return threeNumbers (number);
    }
}