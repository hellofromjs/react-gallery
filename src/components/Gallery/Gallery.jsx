import Photo from "../Photo/Photo";

const Posts = ({ items }) => {
	return (
		<div className="row">
			{items.map((item, i) => {
				return <Photo key={i} title={item.title} url={item.url} />;
			})}
		</div>
	);
};

export default Posts;
