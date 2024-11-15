import './Colaborador.css'

const Colaborador = ({ imagem, nome, descricao, corPrimaria}) => {
    return (
        <div className='colaborador'>
            <div 
            className='colaborador-topo'
            style={{
                backgroundColor: `${corPrimaria}`
            }}
            >
                <img src={imagem} alt='Foto de perfil' />
            </div>
            <div className='colaborador-conteudo'>
                <h4>{nome}</h4>
                <h5>{descricao}</h5>
            </div>
        </div>


    )
}

export default Colaborador;