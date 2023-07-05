import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './profile.css'

const Profilepage = ()=>{
    const navigate = useNavigate();
    const [allmyorder,setAllmyorder]=useState([])
    const [userdeadorder,setUserdeadorder]=useState([])
    const [userfullfilleddorder,setUserfullfilleddorder]=useState([])

    useEffect(()=>{
        fetch('/userliveorder',{
        // fetch('https://dbekgp.onrender.com/userliveorder',{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                usr_id:localStorage.getItem("id")
            })
        })
        .then((data)=>data.json())
        .then(da=>setAllmyorder(da.orders))
    },[])

    useEffect(()=>{
        fetch('/userdeadorder',{
            // fetch('https://dbekgp.onrender.com/userdeadorder',{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                usr_id:localStorage.getItem("id")
            })
        })
        .then((data)=>data.json())
        .then(da=>setUserdeadorder(da.orders))
    },[])

    useEffect(()=>{
        fetch('/userfullfilleddorder',{
            // fetch('https://dbekgp.onrender.com/userfullfilleddorder',{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                fllfld_usr_id:localStorage.getItem("id")
            })
        })
        .then((data)=>data.json())
        .then(da=>setUserfullfilleddorder(da.orders))
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
                <button onClick={logout} className='btn' style={{position:'absolute',right:0,margin:10,padding:'10px'}}>LogOut</button>
    
            </div>
    <p style={{textAlign:"center",margin:'70px'}}> all my orders which are still active </p>

            { 
                allmyorder.map(order =>(
                <div key={order._id} className="allitems">
                    Order ID: {order._id}  
                    <br />
                    <div className={order.order_quantity[0]?"indiitems":"hideit"}>
                        {order.order_name[0]}:
                        {order.order_quantity[0]}
                    </div>
    
                        <br />
                    <div className={order.order_quantity[1]?"indiitems":"hideit"}>
                        {order.order_name[1]}:
                        {order.order_quantity[1]}
                    </div>
                        
                        <br />
                        <div className={order.order_quantity[2]?"indiitems":"hideit"}>
                        {order.order_name[2]}:
                        {order.order_quantity[2]}
                        
                        </div>
                        <br />
                        <div className={order.order_quantity[3]?"indiitems":"hideit"}>
                        {order.order_name[3]}:
                        {order.order_quantity[3]}
                        
                        </div>
                        
                        <br />
                        
                        <div className={order.order_quantity[4]?"indiitems":"hideit"}>
                        {order.order_name[4]}:
                        {order.order_quantity[4]}
                        </div>
                        
                        <br />
                        <div className={order.order_quantity[5]?"indiitems":"hideit"}>
                        {order.order_name[5]}:
                        {order.order_quantity[5]}
                        </div>
    
                        <br />       
                        <button className='btn' onClick={()=>{deletethisorder(order._id)}}>
                            Delete Order
                        </button>
                        <div>
                            
                        </div>
                                 
                </div>
            )) 
            // allorder
            }
            <p style={{textAlign:"center"}}>________________________________________________________________________________________</p>

            <p style={{textAlign:"center"}}> all my orders which are already fulfilled  </p>

{ 
                userdeadorder.map(order =>(
                <div key={order._id} className="allitems">
                    Order ID: {order._id}
                    Order status:{order.order_status}  
                    <br />
                    <div className={order.order_quantity[0]?"indiitems":"hideit"}>
                        {order.order_name[0]}:
                        {order.order_quantity[0]}
                    </div>
    
                        <br />
                    <div className={order.order_quantity[1]?"indiitems":"hideit"}>
                        {order.order_name[1]}:
                        {order.order_quantity[1]}
                    </div>
                        
                        <br />
                        <div className={order.order_quantity[2]?"indiitems":"hideit"}>
                        {order.order_name[2]}:
                        {order.order_quantity[2]}
                        
                        </div>
                        <br />
                        <div className={order.order_quantity[3]?"indiitems":"hideit"}>
                        {order.order_name[3]}:
                        {order.order_quantity[3]}
                        
                        </div>
                        
                        <br />
                        
                        <div className={order.order_quantity[4]?"indiitems":"hideit"}>
                        {order.order_name[4]}:
                        {order.order_quantity[4]}
                        </div>
                        
                        <br />
                        <div className={order.order_quantity[5]?"indiitems":"hideit"}>
                        {order.order_name[5]}:
                        {order.order_quantity[5]}
                        </div>
    
                        <br />       
                        <button className='btn'>
                            This order is picked
                        </button>
                        <div>
                        </div>
                                 
                </div>
            )) 
            // allorder
            }
            <p style={{textAlign:"center"}}>________________________________________________________________________________________</p>
            <p style={{textAlign:"center"}}> all orders fulfilled by me </p>
            { 
                userfullfilleddorder.map(order =>(
                <div key={order._id} className="allitems">
                    Order ID: {order._id}
                    Order status:{order.order_status}  
                    <br />
                    <div className={order.order_quantity[0]?"indiitems":"hideit"}>
                        {order.order_name[0]}:
                        {order.order_quantity[0]}
                    </div>
    
                        <br />
                        <div className={order.order_quantity[1]?"indiitems":"hideit"}>
                        {order.order_name[1]}:
                        {order.order_quantity[1]}
                    </div>
                        
                        <br />
                        <div className={order.order_quantity[2]?"indiitems":"hideit"}>
                        {order.order_name[2]}:
                        {order.order_quantity[2]}
                        
                        </div>
                        <br />
                        <div className={order.order_quantity[3]?"indiitems":"hideit"}>
                        {order.order_name[3]}:
                        {order.order_quantity[3]}
                        
                        </div>
                        
                        <br />
                        
                        <div className={order.order_quantity[4]?"indiitems":"hideit"}>
                        {order.order_name[4]}:
                        {order.order_quantity[4]}
                        </div>
                        
                        <br />
                        <div className={order.order_quantity[5]?"indiitems":"hideit"}>
                        {order.order_name[5]}:
                        {order.order_quantity[5]}
                        </div>
    
                        <br />       
                        <button className='btn'>
                            This order is picked
                        </button>
                        <div>
                            
                        </div>
                                 
                </div>
            )) 
            // allorder
            }
            <p style={{textAlign:"center"}}>________________________________________________________________________________________</p>

            
        </div>
    )
}
export default Profilepage

