export default function Cart() {
    function finishOrder() {
        location.reload()
    }

    return (
        <section id="cart">
            <h1>Shopping Cart</h1>
            <ul className="cart-items">

            </ul>
            <button onClick={ finishOrder }>Finish Order</button>
        </section>
    )
}