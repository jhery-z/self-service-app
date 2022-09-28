import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function ProductList({ product,addToCart }) {
    return (
        
        <div className='container mt-5'>
        <div className='flex mt-5'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div className='row mt-5 justify-center'>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='product-item'>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={productItem.url} width="100%" height="200px" />
                            <Card.Body>
                                <Card.Title>{productItem.name} | {productItem.category} </Card.Title>
                                <p> {productItem.seller} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <Button variant="primary" onClick={() => addToCart(productItem)}>Add To Cart</Button>
                            </Card.Body>
                            </Card>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
        
    )
}

export default ProductList