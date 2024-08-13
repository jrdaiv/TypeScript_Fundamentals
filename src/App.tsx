import React from 'react'



const App: React.FC = () => {
  let greeting: string = 'Hello TypeScript!';
  let numberList: number[] = [5, 10, 15];
  let sum: number = calculateSum(10, 15);

  function calculateSum(a: number, b: number): number {
    return a + b
  }





  return (


    <>
     <h1>{greeting}</h1>
      <p>Number List: {numberList}</p>
      <p>Calculated Sum of 10 + 15: {sum}</p>


    </>


  )


}



export default App
