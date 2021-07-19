export const Button = ({onClick, operation}) =>{
    return (
        <button className="btn" onClick={onClick}>{operation}</button>
    )
}