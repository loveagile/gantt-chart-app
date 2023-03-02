import React, { useState, useEffect } from 'react'
import { Task, ViewMode, Gantt } from 'gantt-task-react'

import { getStartEndDateForProject, initTasks } from './helper'
import TaskList from './TaskLIst'
import 'gantt-task-react/dist/index.css'
import './App.css'

function App() {
  const [view, setView] = useState<ViewMode>(ViewMode.Week)
  const [tasks, setTasks] = useState<Task[]>(initTasks())
  const [isChecked, setIsChecked] = useState(false)
  const [type, setType] = useState<string>('day')
  let columnWidth = 65

  useEffect(() => {
    if (type === 'day') {
      setView(ViewMode.Day)
    } else {
      setView(ViewMode.Month)
    }
  }, [type])

  const handleTaskChange = (task: Task) => {
    console.log('On date change Id:' + task.id)
    let newTasks = tasks.map((t) => (t.id === task.id ? task : t))
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project)
      const project = newTasks[newTasks.findIndex((t) => t.id === task.project)]
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end }
        newTasks = newTasks.map((t) =>
          t.id === task.project ? changedProject : t
        )
      }
    }
    setTasks(newTasks)
  }

  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm('Are you sure about ' + task.name + ' ?')
    if (conf) {
      setTasks(tasks.filter((t) => t.id !== task.id))
    }
    return conf
  }

  const handleProgressChange = async (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)))
    console.log('On progress change Id:' + task.id)
  }

  const handleDblClick = (task: Task) => {
    alert('On Double Click event Id:' + task.id)
  }

  const handleClick = (task: Task) => {
    console.log('On Click event Id:' + task.id)
  }

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + ' has ' + (isSelected ? 'selected' : 'unselected'))
  }

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)))
    console.log('On expander click Id:' + task.id)
  }
  return (
    <div className='App flex flex-shrink w-full'>
      <TaskList type={type} onViewType={setType}></TaskList>
      <Gantt
        tasks={tasks}
        viewMode={view}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onClick={handleClick}
        todayColor='#42de21'
        onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        listCellWidth={isChecked ? '155px' : ''}
        columnWidth={columnWidth}
      ></Gantt>
    </div>
  )
}

export default App
