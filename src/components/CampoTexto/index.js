import './CampoTexto.css'

const CampoTexto = ({ label, placeholder, obrigatorio, valor, aoAlterado }) => {


    const aoDigitado = (evento) => { 
        aoAlterado(evento.target.value)
    }


    return (
        <div className='campo-texto'>
            <label>{label}</label>
            <input onChange={aoDigitado} value={valor} required={obrigatorio} placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto;