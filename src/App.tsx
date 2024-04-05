import React from 'react';
import './App.css'


function App() {
	const names = ['Serj', 'Alina', 'Aleks', 'Dasha', 'Masha']
	const users = [{ id: 1, name: 'Serj' }, { id: 2, name: 'Alina' }, { id: 3, name: 'Aleks' }, { id: 4, name: 'Dasha' }, { id: 5, name: 'Masha' }]
	const liElements = names.map(name => <li>{name}</li>)
	const liElements2 = users.map(user => <li key={user.id}>{user.name}</li>)
	return (
		<div className="App">
			<ul>
				{liElements}

			</ul>
			<ul>
				{liElements2}
			</ul>
		</div>
	);
}

export default App;
