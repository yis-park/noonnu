import React from "react";
import "./allFont.scss";

function FontMap({ allData }) {
  return (
    <div className="grid">
      {allData
        .filter((item) => item.good === "5")
        .map((item) => (
          <div
            key={item.id}
            className="flex"
            style={{ fontFamily: ` ${item.fontFamily}` }}
          >
            <h4>{item.title}</h4>

            <p>{item.writer}</p>
            <div className="line"></div>
            <textarea
              name="editor"
              spellcheck="false"
              style={{ fontFamily: ` ${item.fontFamily}`, fontSize: "30px" }}
              placeholder={`${item.des}`}
            ></textarea>

            <div className="bold">
              <p>{item.bold}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 stroke-current fill-current pointer-events-none"
                // width="44"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
              </svg>
            </div>
          </div>
        ))}
    </div>
  );
}

export default FontMap;
