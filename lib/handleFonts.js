export const getTextAlign = (textAlign = 'left') => {
  const textAlignMap = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return `${textAlignMap[textAlign] || ''}`
}

export const getHeadingLevel = level => {
  const headingLevelMap = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
  }

  return `${headingLevelMap[level] || ''}`
}

export const getTextColor = (textColor = 'black') => {
  const textColorMap = {
    black: 'black',
    white: 'white',
    gray: '#39414D',
    green: '#D1E4DD',
    blue: '#D1DFE4',
    purple: '#D1D1E4',
  }

  return `${textColorMap[textColor] || ''}`
}

export const getBgColor = (backgroundColor = 'black') => {
  const backgroundColorMap = {
    black: 'black',
    white: 'white',
    gray: '#39414D',
    green: '#D1E4DD',
    blue: '#D1DFE4',
    purple: '#D1D1E4',
  }

  return `${backgroundColorMap[backgroundColor] || ''}`
}
