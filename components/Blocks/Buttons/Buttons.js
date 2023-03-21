import style from './Buttons.module.scss'

export const Buttons = ({ children, layout }) => {
  const { justifyContent } = layout
  return (
    <div className={`${style.coreButtons} justify-${justifyContent}`}>
      {children}
    </div>
  )
}
