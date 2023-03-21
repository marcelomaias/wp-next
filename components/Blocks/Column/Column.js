import style from './Column.module.scss'

export const Column = ({ children }) => {
  return <div className={`${style.coreColumn}`}>{children}</div>
}
