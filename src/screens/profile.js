import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profilepage = ()=>{
    const navigate = useNavigate();
    const [allmyorder,setAllmyorder]=useState([])
    useEffect(()=>{
        fetch('/userliveorder',{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                usr_id:localStorage.getItem("id")
            })
        })
        .then((data)=>data.json())
        .then(da=>setAllmyorder(da.orders))
    },[])
    function deletethisorder(orderid){
        fetch('/deleteorder',{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                orderid
            })
        })
        navigate('/profile')
    }
    function logout(){
        localStorage.clear();
        navigate('/login')
    }
    
    return (
        
        <div className="bigbox">
            <div>
                <button onClick={logout}>LogOut</button>
    
            </div>
    
            { allmyorder.map(order =>(
                <div key={order._id} className="allitems">
                    Order ID: {order._id}  
                    <br />
                    <div className="indiitems">
                        {order.order_name[0]}:
                        {order.order_quantity[0]}
                    </div>
    
                        <br />
                    <div className="indiitems">
                        {order.order_name[1]}:
                        {order.order_quantity[1]}
                    </div>
                        
                        <br />
                        <div className="indiitems">
                        {order.order_name[2]}:
                        {order.order_quantity[2]}
                        
                        </div>
                        <br />
                        <div className="indiitems">
                        {order.order_name[3]}:
                        {order.order_quantity[3]}
                        
                        </div>
                        
                        <br />
                        
                        <div className="indiitems">
                        {order.order_name[4]}:
                        {order.order_quantity[4]}
                        </div>
                        
                        <br />
                        <div>
                        {order.order_name[5]}:
                        {order.order_quantity[5]}
                        </div>
    
                        <br />       
                        <button onClick={()=>{deletethisorder(order._id)}}>
                            Delete Order
                        </button>
                        <div>
                            
                        </div>
                                 
                </div>
            )) 
            // allorder
            }
            
        </div>
    )
}
export default Profilepage

