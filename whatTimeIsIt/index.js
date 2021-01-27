const whatTimeIsIt = time => {
  // do code here

}


// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(whatTimeIsIt("12:00 pm"), "It's noon")
test(whatTimeIsIt("3:49 pm"), "It's three past forty nine in the afternoon")
test(whatTimeIsIt('12:00 am'), "It's midnight")
test(whatTimeIsIt("5:31 am"), "It's five past thirty one in the morning")
test(whatTimeIsIt("9:11 am"), "It's nine past eleven in the morning")