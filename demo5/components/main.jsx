import Timer from "./timer"
import Products from "./products"

export default function Main() {
    function viewCart() {
        let cart = []
        let orderedItems = Array.from(document.querySelectorAll('.qty')).filter((el) => el.textContent !== '0');
        orderedItems.forEach((el) => {
            cart.push(el.parentElement.parentElement);
            console.log(el.parentElement.props)
        })

        
        console.log(cart)
    }

    return (
        <main>
            <Timer counter={0} />
            <Products />

            <button className="complete-order" onClick={viewCart}>Complete Order</button>
        </main>
    )
}