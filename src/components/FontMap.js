import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./allFont.scss";

function FontMap({ allData, item }) {
  const { id, title, des } = item;
  const { allFontId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1>FontMap</h1>
      <h3>{id}</h3>
      <h3>이름: {title}</h3>
      <h3>굵기: {des}</h3>
      {/* {allData
        .filter((item) => item.title === id)
        .map((item) => (
          <section key={item.id}>
            <p>{item.title}</p>
            <p>{item.des}</p>
          </section>
        ))} */}
    </>
    // <div className="grid">
    //   {allData
    //     .filter((item) => item.title === id)
    //     .map((item) => (
    //       <div
    //         key={item.id}
    //         className="flex"
    //         style={{ fontFamily: ` ${item.fontFamily}` }}
    //       >
    //         <h4>{item.title}</h4>

    //         <p>{item.writer}</p>
    //         <div className="line"></div>
    //         <textarea
    //           name="editor"
    //           spellcheck="false"
    //           style={{ fontFamily: ` ${item.fontFamily}`, fontSize: "30px" }}
    //           placeholder={`${item.des}`}
    //         ></textarea>

    //         <div className="bold">
    //           <p>{item.bold}</p>
    //         </div>
    //       </div>
    //     ))}
    // </div>
  );
}

export default FontMap;
