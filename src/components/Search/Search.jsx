const Search = ({ value, onSearch, className }) => {
	return (
		<div className={`${className}`}>
			<input
				className="form-control"
				placeholder="Filter Gallery by Title"
				value={value}
				onChange={onSearch}
			/>
		</div>
	);
};

export default Search;
