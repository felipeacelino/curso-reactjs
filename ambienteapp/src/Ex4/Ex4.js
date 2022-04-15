import React from 'react'
import Modal from './Modal'

const App = () => {
  const [modal, setModal] = React.useState(false);
  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <button onClick={() => { setModal(true) }}>Abrir modal</button>
    </div>
  )
}

export default App