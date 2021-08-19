import { Provider } from 'react-redux'
import Grid from './app/components/Grid'
import store from './app/store'
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Grid />
      </Provider>
    </div>
  )
}

export default App;
