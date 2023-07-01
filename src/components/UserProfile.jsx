
import { useEffect, useState } from "react";
import axios from "axios";


export default function UserProfile() {

    const [data,setData]=useState({
      
      
       })

    const [fullName,setFullName]=useState('sdf');
    const [userName,setUserName]=useState('sdf');
    const [location,setLocation]=useState('sdf');
    const [userLink,setUserLink]=useState();
    const[userImage,setUserImage]=useState()


    useEffect( ()=> {

        axios.get(process.env.REACT_APP_GITHUB_API)
        .then((res)=> {console.log(res.data);const data=res.data ; setFullName(data.name);
            setLocation(data.location);
            setUserName(data.login)
            setUserLink(data.html_url);
            setUserImage(data.avatar_url);     }
        )
        .catch(err=> console.log(err))},[]
    
    )
    






    return(




<div>



<img id="userImg" src={userImage} alt="" />



<div id="userProfile">
<ul className="list-group list-group-horizontal">
  <li className="list-group-item"><b> Full Name :</b></li>
  <li className="list-group-item">{fullName}</li>
  
</ul>
<ul className="list-group list-group-horizontal-sm">
  <li className="list-group-item"><b>User Name:</b></li>
  <li className="list-group-item">{userName}</li>
  
</ul>
<ul className="list-group list-group-horizontal">
  <li className="list-group-item"><b>Location:</b></li>
  <li className="list-group-item">{location} </li>
 
</ul>
<ul className="list-group list-group-horizontal">
  <li className="list-group-item"><b>User GITHUB Link:</b></li>
  <li className="list-group-item"><a href={userLink}>{userLink} </a></li>
 
</ul>
</div>
</div>




    )
}