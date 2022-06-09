import ItemList from "../componets/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../componets/ItemDetailContainer/ItemDetailContainer"

const Home = () => {
return(
    <div className='general-container'>
<ItemList title={'Nirnava'} />
<ItemDetailContainer />
</div>
)
}



export default Home