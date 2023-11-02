function linearSearch (arr, target) {

  return arr.indexOf(target);

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = arr[0];
  // While high and low indices do not overlap...
  let high = arr[arr.length - 1];

  while (high >= low) {

    // Find the midpoint between high and low indices
    let midpoint = (high - low) / 2;

    // Compare the target value to the midpoint value
    if (target === arr[midpoint]) {
      return arr[midpoint];
    }

    // If the target equals the midpoint...
      // Return the midpoint index
    if(target > arr[midpoint]) {
      low = arr[midpoint + 1];
    }
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    if (target < arr[midpoint]) {
      high = arr[midpoint -1];
    }
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers
  }
  return -1;

}


module.exports = [linearSearch, binarySearch]
