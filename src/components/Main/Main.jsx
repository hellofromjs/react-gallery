import Search from "../Search/Search";
import Gallery from "../Gallery/Gallery";
import AddPhoto from "../AddPhotoForm/AddPhotoForm";
import { useState } from "react";

const Main = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [photos, setPhotos] = useState([]);
	const [displayAddPhotoForm, setDisplayAddPhotoForm] = useState(false);

	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const filteredPhotos = photos.filter((photo) => {
		return photo.title.includes(searchTerm);
	});

	return (
		<div>
			<div className="row my-2">
				<Search
					className="col"
					onSearch={handleInputChange}
					value={searchTerm}
				/>
				<div className="col-auto align-self-center">
					<a
						className="btn btn-primary"
						type="button"
						onClick={() => setDisplayAddPhotoForm((prevData) => !prevData)}
					>
						Add Photo
					</a>
				</div>
			</div>

			{displayAddPhotoForm && <AddPhoto onAdd={setPhotos} />}

			<Gallery items={filteredPhotos} />
		</div>
	);
};

export default Main;
