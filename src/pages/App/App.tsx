import { useState } from 'react';
import Cron from '../../components/Cron/Cron';
import Form from '../../components/Form/Form';
import List from '../../components/List/List';
import { Task } from '../../models/task';
import style from './App.module.scss';
import { v4 as uuidV4 } from 'uuid';

function App() {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: uuidV4(),
      name: 'React',
      time: '00:00:05'
    },
    {
      id: uuidV4(),
      name: 'Javascript',
      time: '00:08:00'
    },
    {
      id: uuidV4(),
      name: 'Typescript',
      time: '01:06:00'
    }
  ]);

  const [selectedTask, setSelectedTask] = useState<Task>();

  function selectTask(task: Task): void {
    setSelectedTask(task);

    setTasks(tasks => tasks.map(t => ({
      ...t,
      selected: t.id == task.id
    })));
  }

  function completeTask(): void {

    if (!selectedTask) return;

    setSelectedTask(undefined);

    setTasks(tasks => tasks.map(t => {

      if (t.id == selectedTask.id)
        return {
          ...t,
          selected: false,
          completed: true
        }

      return t;
    }));
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />

      <List
        tasks={tasks}
        selectTask={selectTask}
      />

      <Cron
        selectedTask={selectedTask}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
