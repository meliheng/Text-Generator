import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../Paragraph.module.scss';
export default function Paragraph({ isHtml }) {
	const count = useSelector((state) => state.input.value);
	const [paragraphs, setParagraphs] = useState('');

	const getParagraphs = async () => {
		const response = await fetch(
			`https://baconipsum.com/api/?type=all-meat&paras=${count}&format=${isHtml}`
		).then((data) => data.text());
		setParagraphs(response);
	};
	useEffect(() => {
		console.log(
			`https://baconipsum.com/api/?type=all-meat&paras=${count}&format=${isHtml}`
		);

		getParagraphs();
	}, [count, isHtml]);

	return <div className={styles.paragraphContainer}>{paragraphs}</div>;
}
