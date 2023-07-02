import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom'
function Success() {
    const [sessiondata , setSessionData] = useState()

    const useQuery = () => new URLSearchParams(useLocation().search)
    const sessionId = useQuery().get('session_id')
    console.log(sessionId)
    useEffect(()=>{
        const fetchSessionData = async () =>{
            const queryParams = new URLSearchParams({
                id: sessionId,
            })

            const sessionData = await fetch('/get-checkout-session?'+queryParams)
                .then((res)=>{
                    return res.json()
                })
                setSessionData(sessionData)
        }
        fetchSessionData()
        console.log(sessiondata)
    },[])
  return (
    <div style={{
        textAlign: 'center',
                    alignItems: 'center',

    }}>
    <h2> your order will be ready soon !!</h2>
    {sessiondata && (<a href={sessiondata.payment_intent.charges.data[0].receipt_url} target="_blank" rel='noreferrer'>
        <button style={{
            alignItems: 'center',
            display: 'inline'
        }}>view Receipt</button>
    </a>)}
      {/* success {sessionId} */}
    </div>
  )
}

export default Success
