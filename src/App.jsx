
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (      
      <>
        <NavBar/>
          
        <ItemListContainer greeting={'Saludo'}/>
      </>
  )
}

export default App
