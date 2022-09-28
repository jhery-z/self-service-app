import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div className='container mt-5' style={{marginTop:'40px'}}>
                            <img src={cartItem.url} width={40} />
                            <span> {cartItem.name} </span>
                            <Button 
                                variant="light"
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</Button>
                            <span> {cartItem.quantity} </span>
                            <Button
                                variant="light"
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</Button>
                            <span> Rs. {cartItem.price * cartItem.quantity} </span>
                        </div>
                    )
                })
            }

            <p className='mt-5 text-center'> Total  <span></span>
            <div style={{padding:'10px', backgroundColor:'#61dafb', margin:'20px', borderRadius:'15px', width:'50%', align:'center'}}>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </div>
            </p>
        </div >
    )
}

export default CartList