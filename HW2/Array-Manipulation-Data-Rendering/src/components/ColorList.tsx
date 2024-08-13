import  React from 'react' 

export const ColorList: React.FC = () => {
    const colors: string[] = ['green', 'red', 'blue', 'white']
    return (
        <div>
            <h1>Color List</h1>
            <ul>
                {colors.map((color, index) => (
                    <li key={index}>{color}</li>
                ))}
            </ul>
        </div>
    )
}