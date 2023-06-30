
import { useEffect, useState } from "react";
import axios from "axios";


export default function UserProfile() {

    const [data,setData]=useState({
        created_at
        : 
        "2020-01-07T14:37:55Z",
       
     
        html_url
        : 
        "https://github.com/mrguven",
       
        location
        : 
        "Rotterdam",
        login
        : 
        "mrguven",
        name
        : 
        "Rauf GUVEN"
        
      
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
  <li className="list-group-item">Full Name :</li>
  <li className="list-group-item">{fullName}</li>
  
</ul>
<ul className="list-group list-group-horizontal-sm">
  <li className="list-group-item">User Name:</li>
  <li className="list-group-item">{userName}</li>
  
</ul>
<ul className="list-group list-group-horizontal">
  <li className="list-group-item">Location:</li>
  <li className="list-group-item">{location} </li>
 
</ul>
<ul className="list-group list-group-horizontal">
  <li className="list-group-item">User GITHUB Link:</li>
  <li className="list-group-item"><a href={userLink}>{userLink} </a></li>
 
</ul>
</div>
</div>




    )
}