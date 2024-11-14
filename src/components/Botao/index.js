import './Botao.css'

const Botao = ({ texto, children, onClick }) => {


    return (
        <button className='botao'>
            {children}
        </button>
    )
}

export default Botao;