import { useState } from 'react';
import Dropdown from './components/Dropdown';
import Input from './components/Input';
import Paragraph from './components/Paragraph';
import './style.scss';

function App() {
	const [isHtml, setIsHtml] = useState('text');
	return (
		<div className='App'>
			<h2>React sample text generator app</h2>
			<Input />
			<Dropdown isHtml={isHtml} setIsHtml={setIsHtml} />
			<Paragraph isHtml={isHtml} />
		</div>
	);
}

export default App;
