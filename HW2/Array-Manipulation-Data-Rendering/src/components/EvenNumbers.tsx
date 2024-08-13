import React from 'react';

const filterNumbers = (numbers: number[]): number[] => {
  return numbers.filter(number => number % 2 === 0 );
};

export const EvenNumbers: React.FC = () => { 
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers: number[] = filterNumbers(numbers);

    return (
        <div>
            <h1>Even Numbers</h1>
            <ul>
                {evenNumbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    )
}