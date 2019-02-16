import { date, lorem } from 'faker'


export const createTodos = () =>
  Array.from(new Array(5), (_val, index) => ({
    id: index,
    headline: lorem.sentence(),
    content: lorem.sentences(),
    created_at: new Date(date.past()).getTime()
  }))

export const createTodo = () => {
    return {
        id: 1,
        headline: lorem.sentence(),
        content: lorem.sentences(),
        created_at: new Date(date.past()).getTime()
    }
}
