import { useEffect, useRef, useState } from "react"




export const DetailsData=()=>{
    const [datass,setDatass]=useState([])

    const order=useRef(true)
    const date=useRef(true)
    const quality=useRef(true)
    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        fetch("https://fast-reef-22226.herokuapp.com/data",{
            method:"GET"
        })
        .then((req)=>req.json()).then((res)=>{
            // console.log(res)
            setDatass(res)

        })

    }

    const sortByname=(val)=>{
        if(order.current==true){
            order.current=false
        }else if(order.current==false){
            order.current=true
        }

        fetch("https://fast-reef-22226.herokuapp.com/data",{
            method:"GET"
        })
        .then((req)=>req.json()).then((res)=>{
            // console.log(res)
                res.sort((a,b)=>{
                    let atitle=a[val].toUppercase()
                    let btitle=b[val].toUppercase()

                    if(atitle<btitle){
                        return -1
                    }
                    if(atitle>btitle){
                        return 1
                    }
                    return 0

                })

            setDatass(res)

        })

    }
    
      

    return (
        <div>
            <div> 
                <button onClick={(e)=>sortByname(e.target.value) }>Sort A-Z</button>
                <button onClick={(e)=>sortByname(e.target.value)} >Sort Z-A</button>
                <button>Sort date A </button>
                <button>Sort date D </button> 
                <button>Sort Quality A </button>
                <button>Sort Quality D </button> 
            </div>

            <div  >

                {datass.map((e)=>{


                return(
                    <div id="detailed-result">
                         <div className="title">  click here for details :- <a href={e.url} target="_blank">{e.title}</a> </div>
                    <div className="desc">desc : {e.description}</div>
                    <div className="author">author :  {e.author}</div>
                    <div className="creation-date"> creation-date :{e.creation_date}</div>
                    <div className="explicit">explicit :{e.explicit}</div>
                    <div className="quality">quality : {e.quality}</div>


                    </div>
                   
                )
                })}

            </div>
        </div>
    )
}