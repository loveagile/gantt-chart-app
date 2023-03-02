// import { Task } from '../types/public-types'
import { Task } from 'gantt-task-react'

export const rows = [
  {
    id: 1,
    color: '#e05f5e',
    label: 'Active: Planned',
    amount: 7,
  },
  {
    id: 2,
    color: '#5f79af',
    label: 'Active: Market Analysis',
    amount: 3,
  },
  {
    id: 3,
    color: '#e392a7',
    label: 'Active: Due Diligence',
    amount: 4,
  },
  {
    id: 4,
    color: '#81ceeb',
    label: 'Active: Need Strategy',
    amount: 2,
  },
  {
    id: 5,
    color: '#70a3a0',
    label: 'project stage TEST',
    amount: 1,
  },
  {
    id: 6,
    color: '#eaa46c',
    label: 'Active: Test',
    amount: 1,
  },
]

export const initTasks = () => {
  const currentDate = new Date()
  const tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: 'Some Project',
      id: 'ProjectSample',
      progress: 100,
      type: 'project',
      styles: {
        progressColor: '#e05f5e',
        backgroundColor: '#e05f5e',
        backgroundSelectedColor: '#e05f5e',
        progressSelectedColor: '#e05f5e',
      },
      hideChildren: false,
      displayOrder: 1,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        12,
        28
      ),
      name: 'Idea',
      id: 'Task 0',
      progress: 100,
      styles: {
        progressColor: '#5f79af',
        backgroundColor: '#5f79af',
        backgroundSelectedColor: '#5f79af',
        progressSelectedColor: '#5f79af',
      },
      type: 'task',
      project: 'ProjectSample',
      displayOrder: 2,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      name: 'Research',
      id: 'Task 1',
      progress: 100,
      styles: {
        progressColor: '#e392a7',
        backgroundColor: '#e392a7',
        backgroundSelectedColor: '#e392a7',
        progressSelectedColor: '#e392a7',
      },
      type: 'task',
      project: 'ProjectSample',
      displayOrder: 3,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      name: 'Discussion with team',
      id: 'Task 2',
      progress: 100,
      type: 'task',
      styles: {
        progressColor: '#81ceeb',
        backgroundColor: '#81ceeb',
        backgroundSelectedColor: '#81ceeb',
        progressSelectedColor: '#81ceeb',
      },
      project: 'ProjectSample',
      displayOrder: 4,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
      name: 'Developing',
      id: 'Task 3',
      progress: 100,
      type: 'task',
      styles: {
        progressColor: '#70a3a0',
        backgroundColor: '#70a3a0',
        backgroundSelectedColor: '#70a3a0',
        progressSelectedColor: '#70a3a0',
      },
      project: 'ProjectSample',
      displayOrder: 5,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      name: 'Review',
      id: 'Task 4',
      type: 'task',
      styles: {
        progressColor: '#eaa46c',
        backgroundColor: '#eaa46c',
        backgroundSelectedColor: '#eaa46c',
        progressSelectedColor: '#eaa46c',
      },
      progress: 100,
      project: 'ProjectSample',
      displayOrder: 6,
    },
  ]
  return tasks
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter((t) => t.project === projectId)
  let start = projectTasks[0].start
  let end = projectTasks[0].end

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i]
    if (start.getTime() > task.start.getTime()) {
      start = task.start
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end
    }
  }
  return [start, end]
}
