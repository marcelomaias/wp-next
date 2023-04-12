export const splitChars = (text, charClass) => {
  const letters = text.split('').map((char, index) => (
    <span key={index} className={charClass}>
      {char}
    </span>
  ))

  return letters
}
