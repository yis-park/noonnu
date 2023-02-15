import "./licenseDes.scss";

function LicenseDes({ item }) {
  return (
    <article>
      <table>
        <thead>
          <tr>
            <th>카테고리</th>
            <th>사용 범위</th>
            <th>허용 여부</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>인쇄</td>
            <td>브로슈어, 포스터, 책, 잡지 및 출판용 인쇄물 등</td>
            <td>O</td>
          </tr>
          <tr>
            <td>웹사이트</td>
            <td>웹페이지, 광고 배너, 메일, E-브로슈어 등</td>
            <td>O</td>
          </tr>
          <tr>
            <td>영상</td>
            <td>영상물 자막, 영화 오프닝/엔딩 크레딧, UCC 등</td>
            <td>O</td>
          </tr>
          <tr>
            <td>포장지</td>
            <td>판매용 상품의 패키지 </td>
            <td>O</td>
          </tr>
          <tr>
            <td>임베딩</td>
            <td>웹사이트 및 프로그램 서버 내 폰트 탑재, E-book 제작</td>
            <td>O</td>
          </tr>
          <tr>
            <td>BI/CI</td>
            <td>회사명, 브랜드명, 상품명, 로고, 마크, 슬로건, 캐치프레이즈</td>
            <td>O</td>
          </tr>
          <tr>
            <td>OFL</td>
            <td>
              폰트 파일의 수정/ 복제/ 배포 가능. 단, 폰트 파일의 유료 판매는
              금지
            </td>
            <td style={{ color: "red" }}>{item.licensedes}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

export default LicenseDes;
