import React from 'react';
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
         <div className ="checkout_left">
           <img className="checkout_ad"  src="https://dkemhji6i1k0x.cloudfront.net/000_clients/489816/page/489816udYiX0wU.jpg" alt=""/>
       
        {basket?.length == 0 ?(
            <div> 
                <p>
                    You have no items in your basket.
                </p>
            </div>
        ) : (
            <div className="checkout_title"> 
                <h2>Your Shopping Basket</h2>
                {basket?.map(item =>(
                     <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     />
                ))
                   
                }
                
            </div>
        )
    
    }
    </div>
    {basket.length > 0 &&(
        <div className="checkout_right">
           
            <Subtotal/>
        </div>
    )}
        </div>
    )
}

export default Checkout;
