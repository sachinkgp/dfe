import { useState,useEffect } from "react";
import  './orderspage.css'
import { useNavigate } from "react-router-dom";

const Orderpage = ()=>{
    const navigate = useNavigate()
    const [allorder,setOrder] = useState([])
    useEffect(()=>{
            fetch('/allliveorders',{
                // fetch('https://dbekgp.onrender.com/allliveorders',{
                headers:{"Content-Type":"application/json"},
                method:"get"
            })
            .then((data)=>data.json())
            .then(da=>setOrder(da.orders));
            // JSON.stringify(da)

    },[])

    function deletethisorder(orderid){
        fetch('/deleteorder',{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                orderid
            })
        })
        navigate('/placeorder')
    }

    function fullfillorder(orderid){
        fetch('/fullfillorder',{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                ordr_id:orderid,
                usr_id:localStorage.getItem("id")
            })
        })
        .then(
            navigate('/profile')
        )
    }

    return (
        
        <div className="bigbox">

            { allorder.map(order =>(
                <div key={order._id} className="allitems">
                    Order ID: {order._id}  
                    <br />
                    {/* Ordered By : {order.ordered_by} */}
                    <br />
                       <div className={order.order_quantity[0]==0?"hideitem":"indiitems"}>
                        {order.order_name[0]}:
                        {order.order_quantity[0]}
                    </div>
                    <br />
                    <br />
                    <div className={order.order_quantity[1]==0?"hideitem":"indiitems"}>
                        {order.order_name[1]}:
                        {order.order_quantity[1]}
                    </div>
                        
                        <br />
                        <div className={order.order_quantity[2]==0?"hideitem":"indiitems"}>
                        {order.order_name[2]}:
                        {order.order_quantity[2]}
                        
                        </div>
                        <br />
                        <div className={order.order_quantity[3]==0?"hideitem":"indiitems"}>
                        {order.order_name[3]}:
                        {order.order_quantity[3]}
                        
                        </div>
                        
                        <br />
                        
                        <div className={order.order_quantity[4]==0?"hideitem":"indiitems"}>
                        {order.order_name[4]}:
                        {order.order_quantity[4]}
                        </div>
                        
                        <br />
                        <div className={order.order_quantity[5]==0?"hideitem":"indiitems"}>
                        {order.order_name[5]}:
                        {order.order_quantity[5]}
                        </div>

                        <br />       
                        <button className="btn" onClick={()=>{deletethisorder(order._id)}}>
                            Delete Order
                        </button>
                        <div>
                            
                        </div>
                        <button className="btn" onClick={()=>{fullfillorder(order._id)}} style={{margin:"4px"}}>
                            fullfill Order
                        </button>           
                </div>
            )) 
            // allorder
            }
            
        </div>
    )
}

export default Orderpage;