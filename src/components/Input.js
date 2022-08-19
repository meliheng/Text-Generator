import { useSelector, useDispatch } from 'react-redux';
import { changeInputValue } from '../features/input/inputSlice';
import styles from '../Input.module.scss';
export default function Input() {
	const count = useSelector((state) => state.input.value);
	const dispatch = useDispatch();
	return (
		<div className={styles.inputContainer}>
			<label>Paragraphs</label>
			<input
				type='number'
				value={count}
				onChange={(e) => dispatch(changeInputValue(e.target.value))}
			/>
		</div>
	);
}
