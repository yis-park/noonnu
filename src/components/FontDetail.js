import { Link, useNavigate, useParams } from "react-router-dom";

export function FontDetailPreView({ item }) {
  // console.log(allData);
  const navigate = useNavigate();

  const onGo = () => {
    // navigate("/main"); 해당 페이지로
    navigate(-1);
  };
  return (
    <div>
      <article className="wrapper">
        <Link to={`/allFont/${item.id}`}>
          <div className="txt"></div>
          <div>
            <h3>폰트: {item.title}</h3>
            <h3>작가: {item.writer}</h3>
            <h3>굵기: {item.bold}</h3>
            {/* <div>
            <h3>{item.title}</h3>
            <h3>{item.des}</h3>
            <h3>{item.bold}</h3>
          </div> */}
            <button onClick={onGo}>이전(목록)으로</button>
          </div>
        </Link>
      </article>
    </div>
  );
}

export function FontDetail({ items }) {
  // console.log(allData);
  const navigate = useNavigate();

  const onGo = () => {
    // navigate("/main"); 해당 페이지로
    navigate(-1);
  };

  const _path = window.location.href;
  const _lastIndex = _path.lastIndexOf("/");
  const _subString = _path.substring(_lastIndex + 1);

  let item = items.find((_item) => _item.id === _subString);

  // 위에게 한줄 요약 한거임
  // for (let i = 0; i < items.length; i++) {
  //   if (items[i].id === _subString) {
  //     item = items[i];
  //     break;
  //   }
  // }

  // if (item == null)
  //   item = {
  //     id: "0",
  //     des: "광고 란입니다",
  //   };

  return (
    <div>
      <article className="wrapper">
        <div className="txt"></div>
        <div>
          <h3>폰트: {item.title}</h3>
          <h3>작가: {item.writer}</h3>
          <h3>굵기: {item.bold}</h3>
          {/* <div>
            <h3>{item.title}</h3>
            <h3>{item.des}</h3>
            <h3>{item.bold}</h3>
          </div> */}
          <button onClick={onGo}>이전(목록)으로</button>
        </div>
      </article>
    </div>
  );
}
