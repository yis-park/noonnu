import { Link } from "react-router-dom";

function AllFont({ item }) {
  return (
    <div>
      <Link to={`/allFont/${item.id}`}>
        <h3>{item.title}</h3>
        <h3>{item.writer}</h3>
      </Link>
      <p>{item.des}</p>
    </div>
  );
}

export default AllFont;
