

export default function AppInput({value, placeholder, onChange, title}){
    return <input type="text" value={value} title={title} placeholder={placeholder} onChange={onChange}></input>
}