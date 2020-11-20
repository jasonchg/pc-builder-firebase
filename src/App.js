import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import { HomeScreen } from './screens/HomeScreen'

function App() {
  return (
    <Router>
      <div className='App'>
        <Route path='/' component={HomeScreen} />
      </div>
    </Router>
  )
}

export default App
