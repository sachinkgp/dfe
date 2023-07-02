import './screens.css'
import './carddesign.css'
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';

const product = [
    {sr:1,name:"Ballentine",image:"./BALLANTINE.jpeg",price:1000},
    {sr:2,name:"Chivas Regal",image:"./ChivasRegal.jpeg",price:3000},
    {sr:3,name:"Teachers",image:"./Teachers.jpeg",price:2000},
    {sr:4,name:"Black Lable",image:"./BlackLable.jpeg",price:4000},
    {sr:5,name:"Red Lable",image:"./redlable.jpeg",price:5000},
    {sr:6,name:"Old Monk",image:"./old-monk.jpeg",price:6000}
]

function Homepage() {
    const navigate = useNavigate();
    const [b,setB] = useState(0)
    const [CR,setCR] = useState(0)
    const [T,setT] = useState(0)
    const [BL,setBL] = useState(0)
    const [RL,setRL] = useState(0)
    const [OM,setOM] = useState(0)

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

    return (
        <div className="homepage">

            <div className='card'>
                <img src={product[0].image} alt="" className="daruimage" />
                <h5 className='card-title'>{product[0].name}</h5>
                <div class="card-body">
                        <button className='btn' onClick={()=>{setB(b+1)}}
                            >Add to cart
                        </button>
                </div>
            </div>

            <div className='card'>
                <img src={product[1].image} alt="" className="daruimage" />
                <h5 className='card-title'>{product[1].name}</h5>
                <div class="card-body">

                        <button className='btn' onClick={()=>{setCR(CR+1)}}
                            >Add to cart
                        </button>
                </div>
            </div>
            <div className='card'>
                <img src={product[2].image} alt="" className="daruimage" />
                <h5 className='card-title'>{product[2].name}</h5>
                <div className='card-body'>
                    <button className='btn' onClick={()=>{setT(T+1)}}
                        >Add to cart
                    </button>
                </div>
            </div>
            <div className='card'>
                <img src={product[3].image} alt="" className="daruimage" />
                <h5 className='card-title'>{product[3].name}</h5>
                <div className="card-body">
                    <button className='btn' onClick={()=>{setBL(BL+1)}}
                        >Add to cart
                    </button>
                </div>
            </div>
            <div className='card'>
                <img src={product[4].image} alt="" className="daruimage" />
                <h5 className='card-title'>{product[4].name}</h5>
                <div className="card-body">
                    <button className='btn' onClick={()=>{setRL(RL+1)}}
                        >Add to cart
                    </button>
                </div>
            </div>
            <div className='card'>
                <img src={product[5].image} alt="" className="daruimage" />
                <h5 className='card-title'>{product[5].name}</h5>
                <div className="card-body">
                    <button className='btn' onClick={()=>{setOM(OM+1)}}
                        >Add to cart
                    </button>
                </div>
            </div>
               
            <div className="cartoftheweek">
                <p>{b} ballentine</p>
                <p>{CR} Chivas regal</p>
                <p>{T} Teachers</p>
                <p>{BL} Black lable</p>
                <p>{RL} Red Lable</p>
                <p>{OM} Old Monk</p>
                <button onClick={placeorder}>Place order</button>
            </div>

        </div>

    )
}

export default Homepage;

/*  <Card image={product.image} name={product.name} 
                price={product.price} sendtocart={addToCart} 
                /> */