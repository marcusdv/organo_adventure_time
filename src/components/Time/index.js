import './Time.css'
import Colaborador from '../Colaborador';


const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {

    const geraCartoes = (arrColaboradores, nomeTime, corPrimaria, corSecundaria) => {
        return arrColaboradores.filter(colaborador => colaborador.time === nomeTime)
            .map(({ nome, descricao, time, imagem }) => <Colaborador
                key={nome}
                nome={nome}
                descricao={descricao}
                time={time}
                imagem={imagem}
                corPrimaria={corPrimaria}
                corSecundaria={corSecundaria}
            />
            )
    }


    return (
        colaboradores.length > 0 && <section
            className='time'
            style={{
                backgroundColor: `${corSecundaria}`
            }}
        >
            <h3 style={{}}>
                {nome}
                <div style={{
                    margin: '0 auto',
                    marginTop: '8px',
                    borderBottom: `4px solid ${corPrimaria || 'black'}`,
                    width: '50px',
                }}>
                </div>
            </h3>
            <div className='area-cartoes'>
                {geraCartoes(colaboradores, nome, corPrimaria, corSecundaria)}
            </div>
        </section>
    )
}

export default Time