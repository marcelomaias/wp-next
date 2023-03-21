import style from './Columns.module.scss'

export const Columns = ({ children, isStackedOnMobile, anchor }) => {
  return (
    <div className={`columns ${style.coreColumns} ${anchor}`}>{children}</div>
  )
}
