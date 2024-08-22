import Timer from "./timer"
import Cart from "./cart";
import Products from "./products"

export default function Main() {
    function viewCart() {

        let orderedItems = Array.from(document.querySelectorAll('.qty')).filter((el) => el.textContent !== '0');
        const cart= document.getElementById('cart');
        const cartItems = cart.querySelector('.cart-items');
        cart.style.display = 'block';
        orderedItems.forEach((el) => {
            let item = el.parentElement.parentElement.cloneNode(true);
            item.querySelector('.buttons').remove();
            cartItems.appendChild(item);
        })
    }

    return (
        <main>
            <Timer counter={0} />            
            <Products />
            <Cart />

            <button className="complete-order" onClick={viewCart}>Complete Order</button>
        </main>
    )
}