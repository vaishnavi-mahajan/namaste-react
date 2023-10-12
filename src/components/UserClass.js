import React from "react"
import { GITHUB_API } from "../utils/constants";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // count:0,
            userInfo:{
                name:"Dummy name",
                location:"Dfault"
            }
        }
    }
    
    async componentDidMount(){
        const data=await fetch(GITHUB_API)
        const json=await data.json();
        this.setState({
            userInfo: json
        })
    }

    render (){
        const{name, repos_url}=this.state.userInfo
        return(
            <div className="user-card">
                <h2>Github Name: {name}</h2>
                {/* <h2>{count}</h2> */}
                <h2>Github URL: {repos_url}</h2>
                <h3>Location: Digras</h3>
                <h4>Contact: m_vaishnavi09</h4>
            </div>
        )
        }
}

export default UserClass