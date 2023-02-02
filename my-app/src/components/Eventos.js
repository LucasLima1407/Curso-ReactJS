import Button from "./evento/Button"
import styles from "./Eventos.module.css"
function Evento(){

    function meu_Evento() {
        window.alert(`Opa ativei!`)
    }

    function segundo_Evento(){
        window.alert(`Outro evento foi ativado!`)
    }

    return(
        <div className={styles.EventsContent}>
        <p>Clique aqui para disparar um evento</p>
        <Button text="Primeiro Evento" event={meu_Evento} />
        <Button text="Segundo Evento" event={segundo_Evento} />
        </div>
    )
}
export default Evento
