import { useState } from 'react'
import boxes from "./data/boxes"
import Box from "./components/Box"

function App() {
  const [allBoxes, setAllBoxes] = useState(boxes)

  function toggle(id) {
    setAllBoxes(prevBox => {
      return (prevBox.map(item => {
        return item.id == id ? { ...item, on: !item.on } : item
      }))
    })
  }

  const boxElements = allBoxes.map(box => (
    <Box
      key={box.id}
      on={box.on}
      handleClick={() => toggle(box.id)}
    />
  ))

  return (
    <main>
      <h1 className="box-title">Boxes will go here</h1>
      <div className='box-container'>
        {boxElements}
      </div>
    </main>
  )
}

export default App
