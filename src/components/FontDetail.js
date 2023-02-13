import { Link, useNavigate, useParams } from "react-router-dom";

function FontDetail({ allData }) {
  // console.log(allData);
  const navigate = useNavigate();

  const onGo = () => {
    // navigate("/main"); 해당 페이지로
    navigate(-1);
  };
  return (
    <article className="wrapper">
      <h2>hi</h2>
      <Link to={`/allFont/${allData.title}`}>
        <div className="txt"></div>
        <div>
          <h3>폰트: {allData.title}</h3>
          <h3>작가: {allData.writer}</h3>
          <h3>굵기: {allData.bold}</h3>
          <h1> 안녕</h1>
          {/* <div>
            <h3>{item.title}</h3>
            <h3>{item.des}</h3>
            <h3>{item.bold}</h3>
          </div> */}
          <button onClick={onGo}>이전(목록)으로</button>
        </div>
      </Link>
    </article>
  );
}

export default FontDetail;
