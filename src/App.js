import { useState } from 'react'
import Banner from './components/Banner'
import Formulario from './components/Formulario';
import Time from './components/Time'
import { colaboradoresData } from './data/dadosColaboradores';
import { horaDeAventuraData } from './data/dadosHoraDeAventura';
import { timesData } from './data/dadosTimes';

function App() {

  const [colaboradores, setColaboradores] = useState(horaDeAventuraData)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }


  const geraTimes = (arrTime, arrColaboradores) => {
    return arrTime.map(time => <Time
      key={time.nome}
      imagem={time.imagem}
      nome={time.nome}
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      colaboradores={arrColaboradores}
    >
    </Time>
    )
  }


  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        nomesDosTimes={timesData.map(time => time.nome)}
      />
      {geraTimes(timesData, colaboradores)}
    </div>
  );
}

export default App;