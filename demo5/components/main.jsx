import Timer from "./timer"
import Products from "./products"

export default function Main() {
    return (
        <main>
            <Timer counter={0} />
            <Products />

            <button className="complete-order">Complete Order</button>
        </main>
    )
}