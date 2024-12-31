import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Component/Create'
import Edit from './Component/Edit'
import List from './Component/List'

function App() {

  return (
    <div>
      <BrowserRouter>

      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>POSTGRE SQL CROD APP</h1>
        <Routes>
          <Route path='/' element={<List/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/edit/:id' element={<Edit/>} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
