import {Components} from 'react'
import Statistics from './components/Statistics'

const feedbackOption = ['good', 'neutral', 'bad'];

class App extends Components {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
}

export default App;
