function handleLinks(htmlString = '') {
  const href = htmlString.split(process.env.NEXT_PUBLIC_WP_URL).join('')

  return href
}

export default handleLinks
