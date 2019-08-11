import arrayOfEulerProblems from './Problems';

arrayOfEulerProblems.forEach((eulerProblem, index) => {
    console.log(`Problem ${index+1}: `, eulerProblem());
})