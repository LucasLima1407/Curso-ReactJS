function Evento({numero}){

    function meu_Evento() {
        if(numero===1){
            window.alert('Opa, ativei!')
        } else if(numero===2){
            window.alert('Ativado também!')
        }
    }

    return(
        <div>
        <p>Clique aqui para disparar um evento</p>
        <button onClick={meu_Evento}>Ativar!</button>
        </div>
    )
}
export default Evento
