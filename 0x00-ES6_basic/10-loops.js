export default function appendToEachArrayValue(array, appendString) {
  const resultArray = []; // Create a new array to hold the results

  for (const value of array) {
    resultArray.push(appendString + value); // Append the string and push to the result array
  }

  return resultArray; // Return the new array
}
