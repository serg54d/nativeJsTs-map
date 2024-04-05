import { ManType, greatingMessages } from "./01";


let people: Array<ManType>

beforeEach(() => {
	people = [
		{ name: 'Andrew Ivanov', age: 33 },
		{ name: 'Alexander Petrov', age: 24 },
		{ name: 'Dmitry Sidorov', age: 18 },
	];
})

test('should get array of greating messages', () => {
	const messages = greatingMessages(people)

	expect(messages.length).toBe(3)

	expect(messages[0]).toBe('Привет! Andrew')
	expect(messages[1]).toBe('Привет! Alexander')
	expect(messages[2]).toBe('Привет! Dmitry')
})