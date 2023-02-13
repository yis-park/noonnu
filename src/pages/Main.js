import { setAllData } from "../assets";
import AllFont from "../app2/AllFont";
import HeadTitle from "../app2/HeadTitle";

function Main() {
  const allData = setAllData();
  // console.log(allData);
  return (
    <div>
      <HeadTitle
        title="모든 폰트"
        description="상업적으로 사용할 수 있는 모든 폰트들을 만나 보세요"
      >
        <div>
          {allData.map((item) => (
            <AllFont key={item.id} item={item} />
          ))}
        </div>
      </HeadTitle>
    </div>
  );
}

export default Main;
