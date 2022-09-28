import '../App.css';

function Header(props) {
    return (
        <div className='fixed-top flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Menu App</div>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;