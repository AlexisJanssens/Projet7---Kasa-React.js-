import { useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import Button from '../../Components/DropdownText/Button'
import DropdownText from '../../Components/DropdownText/DropdownText'

function About() {
  const [isOpen, setOpen] = useState(false)
  const [isOpen2, setOpen2] = useState(false)
  const [isOpen3, setOpen3] = useState(false)
  const [isOpen4, setOpen4] = useState(false)

  return (
    <div>
      <Banner />
      <div>
        <h2> test1 </h2>
        <Button isOpen={isOpen} setOpen={setOpen} />
        <DropdownText
          isOpen={isOpen}
          setOpen={setOpen}
          text={'sdjkqsdjkl kqsdjlkjl'}
        />
      </div>

      <div>
        <h2> test1 </h2>
        <Button isOpen={isOpen2} setOpen={setOpen2} />
        <DropdownText
          isOpen={isOpen2}
          setOpen={setOpen2}
          text={'sdjkqsdjkl kqsdjlkjl'}
        />
      </div>

      <div>
        <h2> test1 </h2>
        <Button isOpen={isOpen3} setOpen={setOpen3} />
        <DropdownText
          isOpen={isOpen3}
          setOpen={setOpen3}
          text={'sdjkqsdjkl kqsdjlkjl'}
        />
      </div>

      <div>
        <h2> test1 </h2>
        <Button isOpen={isOpen4} setOpen={setOpen4} />
        <DropdownText
          isOpen={isOpen4}
          setOpen={setOpen4}
          text={'sdjkqsdjkl kqsdjlkjl'}
        />
      </div>
      {/* <DropdownText text={'dfdklfjlskdfjdlskflsd'} />
      <DropdownText text={'kdjfdklsfjlksdfjdsfdsfd dskfjlsdkf sldkfj lsdf'} /> */}

      <h1>About Page</h1>
    </div>
  )
}

export default About
