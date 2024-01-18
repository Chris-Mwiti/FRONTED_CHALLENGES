import './App.css'
import Container from './components/UI/Container'
import FormWrapper from './components/UI/FormContainer'
import StoreContextApi from './context/store.context'

function App() {
  return(
    <StoreContextApi>
      <Container>
        <FormWrapper />
      </Container>
    </StoreContextApi>
  )
}

export default App
