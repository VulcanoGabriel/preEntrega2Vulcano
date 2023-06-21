import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({ items }) => {
    return (

        <div>
            <h2>Catalogo de servicios</h2>
            <hr />
            <div>
                {
                    items.map((prod) => <ItemCard item={prod} key={prod.id} />)
                }
            </div>
        </div>
    )
}

export default ItemList;