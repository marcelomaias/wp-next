import React from 'react'
import { getTextAlign, getHeadingLevel, getTextColor } from '@/lib/handleFonts'

export const Heading = ({ content, textColor, textAlign, level }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `leading-normal ${getTextColor(textColor)} ${getTextAlign(
      textAlign
    )} ${getHeadingLevel(level)}`,
  })

  return tag
}
