const Button = ({text, _callback}) => {
    return (
        <button onClick={_callback}>{text}</button>
    )
}

export default Button