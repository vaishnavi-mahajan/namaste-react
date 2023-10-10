import { useState } from "react"

const User=({name})=>{
    const[count, setcount]=useState(0)
    // const[count2]=useState(1)

    return(
      <div className="user-card">
        <h2>{count}</h2>
        <div>
                <button onClick={() => {
                    let countn = count +1
                    setcount(countn)
                } }>Click</button>
        </div>
        <h2>Name: {name}</h2>
        <h3>Location: Digras</h3>
        <h4>Contact: m_vaishnavi09</h4>
        </div>
    )
}
export default User