import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className='container text-center mt-5' style={{paddingTop:'60px'}}>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div className='container mt-3'>
                            <div style={{padding:'20px', backgroundColor:'#eee', borderRadius:'10px', marginLeft:'100px', marginRight:'100px'}}>
                            <img src={cartItem.url} width={60} height={50}/>
                            <span> {cartItem.name} </span>
                            <Button 
                                variant="info"
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</Button>
                            <span> {cartItem.quantity} </span>
                            <Button
                                variant="info"
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</Button>
                            <span> Rs. {cartItem.price * cartItem.quantity} </span>
                        </div>
                    </div>
                    )
                })
            }

            <div className='mt-5 text-center' style={{padding:'10px', backgroundColor:'#61dafb', marginLeft:'100px', marginRight:'100px', borderRadius:'10px', alignItems:'center'}}>
            <p className='mt-3'><strong> Total  <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </strong>
            </p>
            </div>
        </div >
    )
}

export default CartList