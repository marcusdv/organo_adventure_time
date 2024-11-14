import './ListaSuspensa.css'

const ListaSuspensa = ({ itens, label, obrigatorio, aoAlterado, valor }) => {
    // cria as opções
    const options = (arr) => arr.map((item) => <option key={item}>{item}</option>)

    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select
                required={obrigatorio}
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}
            >
                {options(itens)}
            </select>
        </div>
    )
}

export default ListaSuspensa