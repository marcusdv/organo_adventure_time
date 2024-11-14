import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({aoColaboradorCadastrado, nomesDosTimes}) => {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState(nomesDosTimes[0])


    const aoSalvar = (evento) => {
        evento.preventDefault()

        aoColaboradorCadastrado({
            nome,
            descricao,
            imagem,
            time
        })
        
        resetForm()
    }

    const resetForm = () => {
        setNome('') 
        setDescricao('') 
        setImagem('') 
        setTime(nomesDosTimes[0]) 
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    label={'Nome'}
                    placeholder={'Digite seu nome'}
                    obrigatorio
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label={'Cargo'}
                    placeholder={'Digite seu cargo'}
                    obrigatorio
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <CampoTexto
                    label={'Imagem'}
                    placeholder={'Informe o endereço da imagem'}
                    obrigatorio
                    valor={imagem}
                    aoAlterado={ valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    itens={nomesDosTimes}
                    label={'Time'}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario