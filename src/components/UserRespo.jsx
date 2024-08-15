import { useEffect, useState } from "react";
import axios from "axios";
export default function UserRespo () {
const [respoList,setRespoList]=useState()
    useEffect( ()=> {
        axios.get(process.env.REACT_APP_GITHUB_RESPO)
        .then((res)=>{ console.log(res.data); setRespoList(res.data)})
        .catch(err=> console.log(err))},[]
    )
    
    return(
<div>
<div class="list-group">
  <h1  className="list-group-item list-group-item-action active" aria-current="true">
  User Resporitories
  </h1>
{respoList ? respoList.map( (respo)=>{ 
return (  
  <a href={respo.html_url} className="list-group-item list-group-item-action"> <b> Resporitories Name: </b> {respo.name}   <br /> <b>  Resporitories URL:</b> {respo.html_url} </a>
)} )
 :
 null
}
</div>
</div>
    )
}
