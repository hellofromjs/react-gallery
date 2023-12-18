import { useState } from "react";

const AddPhoto = ({ onAdd }) => {
	const [formData, setFormData] = useState([]);

	function handleAddPhoto(e) {
		e.preventDefault();
		onAdd((oldData) => [...oldData, { ...formData }]);
	}

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	return (
		<form>
			<h2>New Photo Data</h2>
			<div className="mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Title"
					name="title"
					onChange={handleChange}
				/>
			</div>
			<div className="mb-3">
				<input
					type="email"
					className="form-control"
					placeholder="URL"
					name="url"
					onChange={handleChange}
				/>
			</div>
			<div className="col-auto">
				<button
					type="submit"
					className="btn btn-primary mb-3"
					onClick={handleAddPhoto}
					disabled={!(formData.title?.length > 0 && formData.url?.length > 0)}
				>
					Add
				</button>
			</div>
		</form>
	);
};

export default AddPhoto;
