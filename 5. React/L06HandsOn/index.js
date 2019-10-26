var filtered = car => {
    return car.name === 'ford';
  };
  const arr = [
    { name: 'chevy', count: 2 },
    { name: 'ford', count: 5 },
    { name: 'acura', count: 3 },
    { name: 'honda', count: 16 }
  ].filter(filtered);
  
  console.log("Filter results:", arr);
  
  // 2.
  const arr = ['Bill', 'Joe', 'Emily', 'Andrea'];
  const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];
  
  const fullArray = [...arr, ...newStudents];
  
  console.log(fullArray);