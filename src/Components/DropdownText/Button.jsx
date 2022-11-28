function Button({ isOpen, setOpen }) {
  if (isOpen === false) {
    console.log(isOpen)

    return <button onClick={() => setOpen(true)}>Ouvrir</button>
  } else {
    console.log(isOpen)

    return <button onClick={() => setOpen(false)}>Fermer</button>
  }
}

export default Button
