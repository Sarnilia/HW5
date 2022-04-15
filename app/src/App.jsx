import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Header from './components/Header/Header'
import PageNotFound from './components/404/404'
import Main from './components/Main/Main'
import PhotoDetail from './components/Photos/PhotoDetail/PhotoDetail'
import PhotoForm from './components/Forms/PhotoForm/PhotoForm'
import Comments from './components/Comments/Comments'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/photos/:photosId" element={<PhotoDetail />} />
        <Route path="/photos/:photosId/comments/:photosId" element={<Comments />} />
        <Route path="/form" element={<PhotoForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
