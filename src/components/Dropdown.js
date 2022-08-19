import styles from '../Dropdown.module.scss';
export default function Dropdown({ isHtml, setIsHtml }) {
	return (
		<div className={styles.dropdownContainer}>
			<label>Is HTML</label>
			<select onChange={(e) => setIsHtml(e.target.value)}>
				<option value='text'>No</option>
				<option value='html'>Yes</option>
			</select>
		</div>
	);
}
