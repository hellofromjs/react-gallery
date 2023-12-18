const Photo = ({ title, url }) => {
	return (
		<div className="col-6 col-md-4">
			<img className="img-fluid" src={url} />
			<h3>{title}</h3>
		</div>
	);
};

export default Photo;
