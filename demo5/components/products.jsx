import Item from "./counter"
import items from "./items"

export default function Products(props) {
    return (
        <ul>        
            <Item count={0} item={items[0]}/>
            <Item count={0} item={items[1]}/>
            <Item count={0} item={items[2]}/>
            <Item count={0} item={items[3]}/>
            <Item count={0} item={items[4]}/>
            <Item count={0} item={items[5]}/>
            <Item count={0} item={items[6]}/>
            <Item count={0} item={items[7]}/>
            <Item count={0} item={items[8]}/>
            <Item count={0} item={items[9]}/>
            <Item count={0} item={items[10]}/>
            <Item count={0} item={items[11]}/>
        </ul>
    )
}