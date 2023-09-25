import './Button.css'
function Button({ randomNumber }) {


    return (
        <div>
            <button onClick={randomNumber}>Ещё</button>
        </div>
    )
}
export default Button