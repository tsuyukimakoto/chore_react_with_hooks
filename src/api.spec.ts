import MockAdapter from 'axios-mock-adapter'

import {
    api,
    getTodos,
    getTodo,
} from './api'

import {
  createTodo,
  createTodos,
} from './modules/__fixtures__/todos'

const mock = new MockAdapter(api)

describe('api', () => {
    afterEach(() => mock.reset())

    it('getTodos', () => {
        const mockData = createTodos()

        mock.onGet('/todos?format=json').reply(200, mockData)
        return getTodos().then(({ data }) => expect(data).toEqual(mockData))
    })

    it('getTodo', () => {
        const mockData = createTodo()

        mock.onGet('/todos?format=json').reply(200, mockData)
        return getTodos().then(({ data }) => expect(data).toEqual(mockData))
    })

})
