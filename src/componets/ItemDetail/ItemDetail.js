const ItemDetail = ({data}) => {
    console.log("Data de ItemDetailContainer: ",data)
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.price}</p>
            <div><img src={`./${data.image}`} alt={"producto"} /></div>
        </div>
    )
}

export default ItemDetail