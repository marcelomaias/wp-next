import { theme } from '@/lib/theme'
import { Cover } from '../Blocks/Cover/Cover'
import { Heading } from '../Blocks/Heading/Heading'
import { Paragraph } from '../Blocks/Paragraph/Paragraph'
import { Buttons } from '../Blocks/Buttons/Buttons'
import { Button } from '../Blocks/Button/Button'
import { Columns } from '../Blocks/Columns/Columns'
import { Column } from '../Blocks/Column/Column'

export function BlockRenderer({ blocks }) {
  return blocks.map(block => {
    switch (block.name) {
      case 'core/cover': {
        console.log('COVER Block: ', block)
        const { url } = block.attributes
        return (
          <Cover key={block.id} url={url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        )
      }
      case 'core/heading': {
        // console.log('HEADING Block: ', block)
        const { content, textAlign, textColor, level } = block.attributes
        return (
          <Heading
            key={block.id}
            content={content}
            textColor={textColor}
            textAlign={textAlign}
            level={level}
          />
        )
      }
      case 'core/paragraph': {
        // console.log('PARAGRAPH Block: ', block)
        const { content, align, textColor, style } = block.attributes
        return (
          <Paragraph
            key={block.id}
            content={content}
            textAlign={align}
            color={theme[textColor] || style?.color.text}
          />
        )
      }
      case 'core/buttons': {
        // console.log('Buttons Block: ', block)
        const { layout } = block.attributes
        return (
          <Buttons key={block.id} layout={layout}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Buttons>
        )
      }
      case 'core/button': {
        // console.log('Button Block: ', block)
        const { text, url, linkTarget, backgroundColor, textColor } =
          block.attributes
        return (
          <Button
            key={block.id}
            text={text}
            url={url}
            linkTarget={linkTarget}
            backgroundColor={backgroundColor}
            textColor={textColor}
          />
        )
      }
      case 'core/columns': {
        // console.log('Columns Block: ', block)
        const { isStackedOnMobile, anchor } = block.attributes

        return (
          <Columns
            key={block.id}
            isStackedOnMobile={isStackedOnMobile}
            anchor={anchor}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        )
      }
      case 'core/column': {
        // console.log('Column Block: ', block)
        // const { isStackedOnMobile } = block.attributes

        return (
          <Column key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        )
      }
      default: {
        return null
      }
    }
  })
}
