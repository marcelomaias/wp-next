import { getTextAlign } from '@/lib/handleFonts'
import handleLinks from '@/lib/handleLinks'
import React from 'react'

export const Paragraph = ({ content, textAlign, color }) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: handleLinks(content) }}
      className={`${getTextAlign(textAlign)}`}
      style={{ color: color }}
    />
  )
}
