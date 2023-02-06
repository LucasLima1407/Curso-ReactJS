function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de Carros:</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (<p key={index}>{index+1} - {item}</p>))
            ) : (
            <p>Não Existem Itens na Lista!</p>
            )}
        </>
    )
}
export default OutraLista