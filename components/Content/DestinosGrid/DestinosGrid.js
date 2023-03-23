import DestinosCard from '@/components/Content/DestinosCard/DestinosCard'
import style from './DestinosGrid.module.scss'

function DestinosGrid({ destinos }) {
  // console.log('dest: ', destinos)
  return (
    <section className={`container ${style.DestinosGrid}`}>
      <span className={style.Subtitle}>Onde ir</span>
      <h2>Destinos populares</h2>
      <div className={style.Grid}>
        {destinos.map(destino => (
          <DestinosCard key={destino.node.id} destino={destino} />
        ))}
      </div>
    </section>
  )
}

export default DestinosGrid
