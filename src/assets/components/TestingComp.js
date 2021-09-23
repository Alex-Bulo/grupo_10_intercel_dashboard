import { useState } from "react"
import { Redirect,useLocation } from "react-router-dom"

function TestingComp (props){
    const [referrer, setReferrer] = useState(false)
    const {state} = useLocation()
    
    const loggear = () => {
        localStorage.setItem('isAuth', true)
        setReferrer(state.from)
    
    }

    if (referrer){
        return <Redirect to={referrer ? referrer : '/'} />
    }

    return(
        <button onClick={loggear}>Log In</button>
    )
}

export default TestingComp