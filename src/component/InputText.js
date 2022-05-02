const InputText = ({text, value, _callback}) => {
    return (
        <input type="text" placeholder={text} onChange={_callback}></input>
    )
}

export default InputText