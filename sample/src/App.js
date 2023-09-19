import './App.css';
import react, {useState} from 'react';
import Subject from './components/subject';

function App() {

  const [ subjectsState, setSubjectsState ] = useState({
    subjects: [
      { id: 1, title: "Web App Development", year: 3, lecturer: "Rosanne Birney" },
      { id: 2, title: "Digital Graphic Design", year: 3, lecturer: "Sinead O' Riordan" },
      { id: 3, title: "NoSQL Databases", year: 3, lecturer: "T.J. McDonald" },
      { id: 4, title: "Multimedia Networks", year: 3, lecturer: "Lucy White" }
    ]
  });

  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { title: "Tidy up", deadline: "Today" }
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title={taskState.tasks[0].title} deadline={taskState.tasks[0].deadline} description={taskState.tasks[0].description} />
      <Task title={taskState.tasks[1].title} deadline={taskState.tasks[1].deadline} description={taskState.tasks[1].description} />
      <Task title={taskState.tasks[2].title} deadline={taskState.tasks[2].deadline} description={taskState.tasks[2].description} />
    </div>
  );
}

export default App;
