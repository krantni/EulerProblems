import arrayOfEulerProblems from './Problems';
if (process.argv[2]) {
  const problemIndex = parseInt(process.argv[2], 10) - 1;
  if (isNaN(problemIndex)) {
    console.error('Error: ', "\nThe problem number you gave isn't a number");
  } else if (problemIndex < 0) {
    console.error(
      'Error: ',
      `\nPlease enter a problem between 1 and ${arrayOfEulerProblems.length}`,
    );
  } else if (problemIndex > arrayOfEulerProblems.length) {
    console.error(
      'Error: ',
      `\nLooks like I haven't done that problem yet. \nPlease enter a problem between 1 and ${arrayOfEulerProblems.length}`,
    );
  } else {
    console.log(`Starting Problem: ${problemIndex + 1}`);
    console.log(`Problem ${problemIndex + 1}: `, arrayOfEulerProblems[problemIndex]());
  }
} else {
  arrayOfEulerProblems.forEach((eulerProblem, index) => {
    console.log(`Problem ${index + 1}: `, eulerProblem());
  });
}
