import React from 'react'
import Link from 'next/link'
import style from './Button.module.scss'

export const Button = ({
  text,
  url,
  linkTarget,
  backgroundColor,
  textColor,
}) => {
  return (
    <Link
      href={url}
      target={linkTarget}
      className={style.button}
      style={{ color: `${textColor}`, backgroundColor: `${backgroundColor}` }}
    >
      {text}
    </Link>
  )
}
