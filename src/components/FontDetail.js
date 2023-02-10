import { useParams } from "react-router-dom";

function FontDetail({ allData }) {
  console.log(allData);
  const { name } = useParams();
  return (
    <article className="wrapper">
      <div className="txt">
        <h3>{name} 값 받기</h3>
      </div>
      <ul></ul>
      <div>
        {allData
          .filter((item) => item.title === name)
          .map((item) => {
            <div key={item.id}>
              <h3>{item.des}</h3>
            </div>;
          })}
      </div>
    </article>
  );
}

export default FontDetail;
