

export default function AppInput({value, placeholder, onChange, title, onBlur}){
    return <input type="text" value={value} title={title} placeholder={placeholder} onChange={onChange} onBlur={onBlur}></input>
}