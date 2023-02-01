function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        window.alert('Cadastrou o Usuário!')
    }
    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <input type='text' placeholder="Digite o seu nome"/>
                <div>
                    <input type="submit" value='Cadastrar'/>
                </div>
            </form>
        </div>
    )
}
export default Form