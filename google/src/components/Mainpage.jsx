import { useEffect, useState } from "react"
import {Link} from "react-router-dom"



export const Mainpage=()=>{
    const [datas,setDatas]=useState("")
    const [search,setSearch]=useState("")
    useEffect(()=>{
        getData()

    },[])
// https://fast-reef-22226.herokuapp.com/data?q=${search}

    const getData=()=>{
        // const {name}=e.target
        fetch(`https://fast-reef-22226.herokuapp.com/data?q=${search}`,{
            method:"GET"
        })
        .then((req)=>req.json()).then((res)=>{
            // console.log(res)
            setDatas(res)
            console.log(res)
            // <Link to="/details"></Link>
        })

    }

    return(
        
        <div>
            <Link className="link" to="/">Home</Link>
            <input placeholder="Search here" className="search-box" type="text" name="title"  onChange={(e)=>setSearch(e.target.value)} />
           <Link to="/details"> <button onClick={(e)=>{
            //   console.log({search}) 
                // e.preventDefault()
            getData()
            
              
            }}>Search</button></Link>




        

        
        </div>
    )
}