import React from 'react'
import { usePageContext } from '@/context/pageContext'
import { getTextAlign, getHeadingLevel, getTextColor } from '@/lib/handleFonts'

export const Title = ({ content, textColor, textAlign, level }) => {
  const { title } = usePageContext()

  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: title },
    className: `leading-normal ${getTextColor(textColor)} ${getTextAlign(
      textAlign
    )} ${getHeadingLevel(level)}`,
  })

  return tag
}
