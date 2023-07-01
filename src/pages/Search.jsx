
import { useState,useEffect } from "react";
import axios from "axios";


export default function Search() {


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



    const [respoList,setRespoList]=useState()

const [user,setUser]=useState();
const [client_id,setClient_id]=useState();
const[client_secret,setClient_secret]=useState()


    useEffect( ()=> {

        axios.get(process.env.REACT_APP_GITHUB_RESPO)
        .then((res)=>{ console.log(res.data); setRespoList(res.data)})
        .catch(err=> console.log(err))},[]
    
    )


function search() {

}






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



<div id="inputGroup">
<div className="input-group mb-3" >
  <span className="input-group-text" id="inputGroup-sizing-default">User Name</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"   value={user} onChange={(e)=> {setUser(e.target.value)}}   /> 
  <span className="input-group-text" id="inputGroup-sizing-default">client_id</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={client_id} onChange={(e)=> {setClient_id(e.target.value)}} /> 
  <span className="input-group-text" id="inputGroup-sizing-default">client_secret</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={client_secret} onChange={(e)=> {setClient_secret(e.target.value)}} /> 
  <button type="button" className="btn btn-primary"  onClick={search()} >Search</button>
</div>
</div>




    





<div class="list-group">
  <h1  className="list-group-item list-group-item-action active" aria-current="true">
  User Resporitories
  </h1>

{respoList && respoList.map( (respo)=>{ 
return (  
  <a href={respo.html_url} className="list-group-item list-group-item-action"> <b> Resporitories Name: </b> {respo.name}   <br /> <b>  Resporitories URL:</b> {respo.html_url} </a>

)} )

}
</div>


</div>

    )
}