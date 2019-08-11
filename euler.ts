import arrayOfProblems from './Problems';

arrayOfProblems.forEach((problem, index) => {
    console.log(`Problem ${index+1}: `, problem());
})