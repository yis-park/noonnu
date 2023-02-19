import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

import "./header.scss";

function Header({ allData }) {
  const headerRef = useRef(null);
  return (
    <header ref={headerRef}>
      <h1>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="27"
            viewBox="0 0 55 27"
            fill="none"
            className="h-6 w-auto inline-block dark:hidden"
          >
            <path
              d="M24.9856 13.4232C22.2072 13.3642 19.2488 13.3642 16.2049 13.3937V13.8067C16.1754 15.5203 15.9689 17.06 15.6445 18.3017C15.3495 19.396 14.7862 19.9564 14.1668 19.9564C13.515 19.9564 13.0135 19.3046 12.984 16.4671L12.9545 13.4527C10.9135 13.5117 8.96385 13.6297 7.39471 13.7477C6.30044 13.8362 5.88751 13.9247 5.32415 14.1606C4.85223 14.3671 4.43635 14.5146 4.08241 14.5146C3.58099 14.5146 3.2241 14.3966 2.78167 14.1606C1.95286 13.7182 0.917583 13.0663 0.26869 12.5944C-0.232727 12.211 0.00323368 11.5002 0.681622 11.5886C1.92337 11.7361 3.37158 11.8836 4.70181 11.9131C8.9904 12.0016 14.7243 11.8836 19.2783 11.6181C20.0481 11.5591 20.697 11.4412 21.1424 11.2347C21.7942 10.9103 22.1777 10.7333 22.7676 10.7333C23.7439 10.7333 24.8381 10.8218 25.4575 10.9397C26.3748 11.1167 26.7583 11.5916 26.7583 12.2995C26.7612 12.9513 26.1094 13.4527 24.9856 13.4232ZM21.0244 8.60373C17.1517 8.72171 13.456 8.75121 9.5803 8.7807C6.83136 8.8102 5.91406 8.15836 5.85507 6.29721L5.73709 2.24753C5.20617 1.98208 4.31837 1.71662 3.63703 1.5367C3.28309 1.44822 3.04713 1.21225 3.04713 0.884859C3.04713 0.530917 3.60754 0.144531 4.52484 0.144531C5.88456 0.144531 7.57168 0.292007 8.54502 0.468978C9.34434 0.616453 9.52131 0.911405 9.52131 1.41577C9.52131 1.71072 9.49182 2.00862 9.46232 2.30357C9.43283 2.62802 9.40333 2.95542 9.40333 3.33885V6.0878C9.40333 6.85762 9.69828 7.12308 10.2026 7.12308C12.2142 7.12308 14.0754 7.09358 16.2049 6.9756C16.6768 6.94611 17.1517 6.85762 17.5646 6.62166C18.0071 6.3857 18.5999 6.17923 19.1013 6.17923C19.8122 6.17923 20.9064 6.26772 21.3194 6.3562C22.1187 6.50368 22.4431 6.94611 22.4431 7.50946C22.4431 8.16131 22.0007 8.57424 21.0244 8.60373ZM10.4386 23.0947C12.5387 23.0947 14.5797 23.0652 16.8243 22.9767C17.2962 22.9472 17.7711 22.8587 18.184 22.6228C18.6265 22.3868 19.2193 22.1803 19.7207 22.1803C20.52 22.1803 21.4049 22.2393 22.0862 22.3573C22.8856 22.5048 23.21 22.9502 23.21 23.5401C23.21 24.2185 22.7676 24.6638 21.7913 24.6638L9.90475 24.7523C7.1558 24.7818 6.2385 24.13 6.17951 22.2688L6.06153 18.868C5.53062 18.6026 4.64282 18.3371 3.96148 18.1572C3.60754 18.0687 3.36863 17.8328 3.36863 17.5054C3.36863 17.1514 3.92903 16.765 4.84633 16.765C6.20606 16.765 7.80174 16.9125 8.77803 17.0895C9.57735 17.237 9.75432 17.5319 9.75432 18.0363C9.75432 18.3312 9.72483 18.5672 9.69533 18.8651C9.66584 19.1895 9.63634 19.5169 9.63634 19.8119V22.0594C9.63929 22.8263 9.93719 23.0947 10.4386 23.0947Z"
              fill="#333333"
            ></path>
            <path
              d="M53.0798 14.6384C50.0919 14.5794 46.871 14.5204 43.5882 14.5499L43.5292 20.0803C43.4997 21.7939 43.3228 23.3336 42.9688 24.5753C42.6444 25.6696 42.1695 26.23 41.4321 26.23C40.4558 26.23 40.1314 25.0473 40.1019 21.204L40.0724 14.6384C38.3882 14.6974 36.8191 14.7859 35.4889 14.8744C34.3946 14.9629 33.9817 15.0514 33.4183 15.2873C32.9464 15.4938 32.5305 15.6413 32.1766 15.6413C31.6751 15.6413 31.3182 15.5233 30.8758 15.2873C30.047 14.8449 29.0117 14.1931 28.3628 13.7211C27.8614 13.3377 28.0974 12.6269 28.7758 12.7153C30.0175 12.8628 31.4657 13.0103 32.796 13.0398C37.0845 13.1283 42.8184 13.0398 47.3724 12.7743C48.1423 12.7153 48.7912 12.5974 49.2365 12.3909C49.8884 12.0665 50.2718 11.8865 50.8617 11.8865C51.838 11.8865 52.9323 11.975 53.5517 12.093C54.469 12.27 54.8524 12.7714 54.8524 13.4822C54.8524 14.137 54.2035 14.6679 53.0798 14.6384ZM48.9091 9.19953C45.0364 9.31751 41.4292 9.34701 37.5535 9.3765C34.8046 9.406 33.8873 8.75415 33.8283 6.89301L33.7103 2.103C33.1794 1.83755 32.2916 1.57209 31.6102 1.39217C31.2563 1.30368 31.0203 1.06772 31.0203 0.740328C31.0203 0.386386 31.5808 0 32.4981 0C33.8578 0 35.5449 0.147476 36.5182 0.324446C37.3176 0.471922 37.4945 0.766873 37.4945 1.27124C37.4945 1.56619 37.465 1.86114 37.4355 2.15904C37.406 2.48349 37.3765 2.81089 37.3765 3.19432V6.6836C37.3765 7.45342 37.6715 7.71887 38.1759 7.71887C39.8895 7.71887 42.255 7.63039 43.9422 7.51241C44.5645 7.48291 45.0364 7.36493 45.3904 7.18796C46.0127 6.86352 46.3962 6.71604 46.9861 6.71604C47.6969 6.71604 48.5522 6.77503 49.2041 6.89301C50.0034 7.04049 50.3279 7.51536 50.3279 8.10526C50.3279 8.75415 49.8854 9.17003 48.9091 9.19953Z"
              fill="#333333"
            ></path>
          </svg>
        </Link>
      </h1>
      <Navigation _allData={allData} />
    </header>
  );
}

export default Header;
