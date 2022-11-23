import './Item.css'
export const Item = ({ saludo }) => {
    return (
        <div>
            <h1>Item</h1>
            <img id="imgItem" src="https://png.pngtree.com/png-clipart/20220111/original/pngtree-shopping-cart-vector-cartoon-element-png-image_7092984.png"/>
            <p></p>
            <button onClick={ saludo }>Saludar</button>
        </div>
    )
}

