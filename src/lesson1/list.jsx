export default function List({arr}) {
    return <ul>
        {arr.map((el,index) => <li key={index}>{el}</li>)}
    </ul>
}


