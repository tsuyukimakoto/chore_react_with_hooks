import axios from 'axios'

export const api = axios.create({
  baseURL: '/api'
})

export type TodoModel = {
  id?: string
  headline: string
  content: string
  created_at?: string
}

export const getTodos = () => api.get<TodoModel>('/todos?format=json')

export const getTodo = (todoId: string) => api.get<TodoModel>(`/todos/${todoId}?format=json`)
