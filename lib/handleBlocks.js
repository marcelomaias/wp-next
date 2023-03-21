import { v4 as uuidv4 } from 'uuid'

export const handleBlocks = blocksJSON => {
  const blocks = JSON.parse(blocksJSON)

  const keysToDelete = [
    'attributesType',
    'blockType',
    'dynamicContent',
    'get_parent',
    'order',
    'originalContent',
    'postId',
    'saveContent',
  ]

  const cleanData = b => {
    b.forEach(block => {
      block.id = uuidv4()

      keysToDelete.forEach(key => {
        delete block[key]
      })
      if (block.innerBlocks?.length) {
        cleanData(block.innerBlocks)
      } else {
        delete block.innerBlocks
      }
    })
  }

  cleanData(blocks)

  return blocks
}
