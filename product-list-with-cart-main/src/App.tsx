import Main from "./components/Main";
import StoreContext from "./store/store";

function App(){
  return (
    <StoreContext>
      <div className="w-dvw h-dvh overflow-x-hidden">
        <Main />
      </div>
    </StoreContext>

  )
}

export default App