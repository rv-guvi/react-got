import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Characters from './Characters'
import Modal from './Modal'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters/>}>
            <Route path="modal" element={<Modal/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
