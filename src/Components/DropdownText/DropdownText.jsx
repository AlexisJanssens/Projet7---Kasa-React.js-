function DropdownText({ text, isOpen }) {
  if (isOpen === false) {
    return (
      <div>
        <p>{text}</p>
      </div>
    )
  } else {
    console.log(isOpen)
    return <p>bonjour</p>
  }
}

export default DropdownText
