import './screens.css'
import './carddesign.css'
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import M from 'materialize-css';

// import Window from "floating-window-ui";
// import {useFloating} from '@floating-ui/react';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// import {FloatButton} from 'antd'

const product = [
    {sr:1,name:"Ballentine",image:"./BALLANTINE.jpeg",price:1000},
    {sr:2,name:"Chivas Regal",image:"./ChivasRegal.jpeg",price:3000},
    {sr:3,name:"Teachers",image:"./Teachers.jpeg",price:2000},
    {sr:4,name:"Black Lable",image:"./BlackLable.jpeg",price:4000},
    {sr:5,name:"Red Lable",image:"./redlable.jpeg",price:5000},
    {sr:6,name:"Old Monk",image:"./old-monk.jpeg",price:6000}
]

function Homepage() {
    
    // const {refs, floatingStyles} = useFloating();

    const navigate = useNavigate();
    const [cart,setCart] = useState(true)
    // const [floatbuttoncontent,setFloatbuttoncontent] = useState("./CART.jpeg")
    const [b,setB] = useState(0)
    const [CR,setCR] = useState(0)
    const [T,setT] = useState(0)
    const [BL,setBL] = useState(0)
    const [RL,setRL] = useState(0)
    const [OM,setOM] = useState(0)

    function gotocart(){
        if(cart==true){
            // setFloatbuttoncontent("backbutton")
            setCart(false)
        }else{
            setCart(true)
            // setFloatbuttoncontent("./CART")
        }
    }

    function placeorder(){

        fetch("/placeorder",{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                order_name : ["Ballentine","Chivas Regal","Teacher","Black Lable","Red Lable","Old Monk"],
                order_quantity : [b,CR,T,BL,RL,OM],
                id : localStorage.getItem("id"),
                order_address: "vakola",
                order_city:"Mumbai"
            })
        })
        navigate('/profile')
    }
    function orderadded(){
        M.toast({html:"added"})
    }

    return (
        <div className='homepage'>
<div className={cart?'':'cartpage'}>
            <div className='card'>
                <img src={product[0].image} alt="" className="daruimage" />
                <h5 className='card-title'>{product[0].name}</h5>
                <div class="card-body">
                        <button className='btn' onClick={()=>{setB(b+1) ;orderadded()}}
                            >Add to cart
                        </button>
                </div>
            </div>

            <div className='card'>
                <img src={product[1].image} alt="" className="daruimage" />
                <h5 className='card-title'>{product[1].name}</h5>
                <div class="card-body">

                        <button className='btn' onClick={()=>{setCR(CR+1);orderadded()}}
                            >Add to cart
                        </button>
                </div>
            </div>

            <div className='card'>
                <img src={product[2].image} alt="" className="daruimage" />
                <h5 className='card-title'>{product[2].name}</h5>
                <div className='card-body'>
                    <button className='btn' onClick={()=>{setT(T+1);orderadded()}}
                        >Add to cart
                    </button>
                </div>
            </div>

            <div className='card'>
                <img src={product[3].image} alt="" className="daruimage" />
                <h5 className='card-title'>{product[3].name}</h5>
                <div className="card-body">
                    <button className='btn' onClick={()=>{setBL(BL+1);orderadded()}}
                        >Add to cart
                    </button>
                </div>
            </div>

            <div className='card'>
                <img src={product[4].image} alt="" className="daruimage" />
                <h5 className='card-title'>{product[4].name}</h5>
                <div className="card-body">
                    <button className='btn' onClick={()=>{setRL(RL+1);orderadded()}}
                        >Add to cart
                    </button>
                </div>
            </div>

            <div className='card'>
                <img src={product[5].image} alt="" className="daruimage" />
                <h5 className='card-title'>{product[5].name}</h5>
                <div className="card-body">
                    <button className='btn' onClick={()=>{setOM(OM+1);orderadded()}}
                        >Add to cart
                    </button>
                </div>
            </div>
</div> 
            <div className="card">
                <p className={b>0 ? 'showbottle':'hidebottle'}>{b} ballentine</p>
                <p className={CR>0 ? 'showbottle':'hidebottle'}>{CR} Chivas regal</p>
                <p className={T>0 ? 'showbottle':'hidebottle'}>{T} Teachers</p>
                <p className={BL>0 ? 'showbottle':'hidebottle'}>{BL} Black lable</p>
                <p className={RL>0 ? 'showbottle':'hidebottle'}>{RL} Red Lable</p>
                <p className={OM>0 ? 'showbottle':'hidebottle'}>{OM} Old Monk</p>
                <button onClick={placeorder} className='btn'>Place order</button>
            </div>
            {/* //className='btn' */}
            <button style={{position:"fixed",right:20,bottom:30}}  onClick={gotocart}>
                <img src={cart?"./CART.jpeg":"./backbutton.jpeg"} alt="CART" style={{width:"40px",height:"40px",position:"fixed",right:20,bottom:30}}/>
                {/* {floatbuttoncontent} */}
            </button>


        </div>

    )
}

export default Homepage;

/*  <Card image={product.image} name={product.name} 
                price={product.price} sendtocart={addToCart} 
                /> */