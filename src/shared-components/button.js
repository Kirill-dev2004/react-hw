import './button.css'

export default function AppButton({children, cb}){
    return <button className='btn' onClick={cb}>{children}</button>
}