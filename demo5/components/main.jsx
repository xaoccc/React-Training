import Timer from "./timer"
import Counter from "./counter"

export default function Main() {
    return (
        <main>
            <Timer counter={0} />
            <Counter count={0} />
        </main>
    )
}