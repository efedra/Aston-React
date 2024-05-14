export default function List({arr}) {
    return <ul>
        {arr.map(el => <li key={generateId()}>{el}</li>)}
    </ul>
}

function generateId() {
    const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const number = Math.floor(Math.random() * 10);
    return letter + number;
}
