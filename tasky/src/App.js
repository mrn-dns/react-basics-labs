import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task description="Empty dishwasher" title="Dishes" deadline="Today" />
      <Task description="Fold laundry and put away" title="Laundry" deadline="Tomorrow" />
      <Task title="Tidy" deadline="Today" />
    </div>
  );
}

export default App;
