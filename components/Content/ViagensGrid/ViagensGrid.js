import ViagensCard from '@/components/Content/ViagensCard/ViagensCard'
import style from './ViagensGrid.module.scss'

function ViagensGrid({ destinos }) {
  // console.log(destinos)

  const list = destinos.slice(0, 3)

  return (
    <section className={`container ${style.ViagensGrid}`}>
      <span className={style.Subtitle}>galeria de viagens</span>
      <h2>Viagens preferidas</h2>
      <div className={style.Grid}>
        {list.map(destino => (
          <ViagensCard key={destino.node.id} destino={destino} />
        ))}
      </div>
    </section>
  )
}

export default ViagensGrid
