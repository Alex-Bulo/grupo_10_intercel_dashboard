import { useRef, useState } from "react"
import { Redirect,useLocation } from "react-router-dom"

function Login (props){
    const [referrer, setReferrer] = useState(false)
    const [name, setName] = useState(false)
    const [mail, setMail] = useState(false)
    
    const {state} = useLocation()
    const mailInput = useRef()
    const nameInput = useRef()
    

    const loggear = async (e) => {
        e.preventDefault()
        console.log(mailInput.current.value);
        const USERS_API = 'http://localhost:3001/api/users'
        
        const usersDB = await fetch(USERS_API)
        const usersInfo = await usersDB.json()
        const user = usersInfo.users.filter(u => {
            console.log(u.email === mailInput.current.value);
            return u.email === mailInput.current.value})
        
        sessionStorage.setItem('user', user.id)
        setReferrer(state.from)
        
    }

    if (referrer){
        return <Redirect to={referrer ? referrer : '/'} />
    }

    return(
        <>
            <form onSubmit={loggear}>
                <input ref={nameInput} type='text' ></input>
                <input ref={mailInput} type='text' ></input>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login