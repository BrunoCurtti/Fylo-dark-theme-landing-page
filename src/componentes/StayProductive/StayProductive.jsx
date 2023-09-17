export const StayProductive = () => {
  return (
    <>
      <div className="stayProductive__wrapper">
        <div>
          <img src="/images/illustration-stay-productive.png" width="100%" />
        </div>
        <div className="stayProductive__left">
          <h2 className="stayProductive__heading">
            Stay productive, wherever you are
          </h2>

          <p className="stayProductive__text">
            Never let location be an issue when accesing your files. Fylo has
            you covered for all of your files storage needs.
            <br />
            <br />
            Securely shares files and folders and files width friends,
            colleagues for live collaboration. No email attachments required.
          </p>

          <div className="stayProductive__link-container">
            <a className="stayProductive__link" href="#">
              See how Fylo works
              <svg
                className="stayProductive__link-svg"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <circle id="b" cx="6" cy="6" r="6" />
                  <filter
                    x="-25%"
                    y="-25%"
                    width="150%"
                    height="150%"
                    filterUnits="objectBoundingBox"
                    id="a"
                  >
                    <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      stdDeviation="1"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                </defs>
                <g>
                  <g transform="translate(2 2)">
                    <use filter="url(#a)" xlinkHref="#b" />
                    <use xlinkHref="#b" />
                  </g>
                  <path
                    d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
                    fill="black"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
