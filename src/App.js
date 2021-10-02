import { Provider } from 'react-redux'
import Grid from './app/components/Grid'
import Footer from './app/components/Footer'
import store from './app/store'
const App = () => {
  return (
    <div style={{padding:'2rem'}}>
      <h1 style={{textAlign:'center'}}>Project Grid App</h1>
      <Provider store={store}>
        <Grid />
        <Footer/>
      </Provider>
    </div>
  )
}

export default App;
