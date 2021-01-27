const whatTimeIsIt = time => {
  // do code here
  if (time == '12:00 am') {
    return "It's midnight";
  } else if (time == '12:00 pm') {
    return "It's noon";
  } else {
    let firstNumber = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let secondNumber = ['','', 'twenty', 'thirty', 'forty', 'fifty']

    let split1 = time.split(':');
    let split2 = split1[1].split(' ');
    let split3 = split2[0].split('');

    const hour = firstNumber[split1[0]];

    const minute = () => {
      if (split2[0] < 20) {
        return `${firstNumber[split2[0]]}`;
      } else {
        if (time == 20 || time == 30 || time == 40 || time == 50) {
          return secondNumber[split3[0]];
        } else {
          return `${secondNumber[split3[0]]} ${firstNumber[split3[1]]}`;
        }
      }
    }

    const amPM = () => {
      if (split2[1] == 'am') {
        return 'in the morning';
      } else {
        return 'in the afternoon';
      }
    }

    return `It's ${hour} past ${minute()} ${amPM()}`
  }
}


// do not change this code below
const test = (testCase, result) => console.log(testCase === result, testCase);

test(whatTimeIsIt("12:00 pm"), "It's noon")
test(whatTimeIsIt("3:49 pm"), "It's three past forty nine in the afternoon")
test(whatTimeIsIt('12:00 am'), "It's midnight")
test(whatTimeIsIt("5:31 am"), "It's five past thirty one in the morning")
test(whatTimeIsIt("9:11 am"), "It's nine past eleven in the morning")