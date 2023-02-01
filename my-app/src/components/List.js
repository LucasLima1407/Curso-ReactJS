import Item from './Item'
function List(){
    return(
        <>
            <ul>
                <Item marca='Ferrari' ano_lancamento={2012}/>
                <Item marca='Mercedes' ano_lancamento={2022}/>
                <Item />
            </ul>
        </>
    )
}
export default List