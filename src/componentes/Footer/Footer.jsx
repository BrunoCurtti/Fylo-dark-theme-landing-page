
export const Footer = () => {
  return (
    <>
      <div className="footer__wrapper">
        <div className="footer__logo-conteiner">
          <div>
            <img src="/icons/logo.svg" alt="" className="footer__logo" />
          </div>
          <div className="footer__location-conteiner">
            <div>
              <img src="/icons/icon-location.svg" alt="" />
            </div>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              semper sapien vitae eros faucibus rutrum. Nunc malesuada purus
              sit.
            </p>
          </div>
        </div>

        <div className="footer__phone-mail-wrapper">
          <div className="footer__phone-mail">
            <div>
              <img src="/icons/icon-phone.svg" alt="" />
            </div>
            <p>+1-543-123-4567</p>
          </div>
          <div className="footer__phone-mail">
            <div>
              <img src="/icons/icon-email.svg" alt="" />
            </div>
            <p>example@fylo.com</p>
          </div>
        </div>

        <div className="footer__links-wrapper">
          <span>
            <a>About Us</a>
          </span>
          <span>
            <a>Contact Us</a>
          </span>
          <span>
            <a>Jobs</a>
          </span>
          <span>
            <a>Terms</a>
          </span>
          <span>
            <a>Press</a>
          </span>
          <span>
            <a>Privacy</a>
          </span>
          <span>
            <a>Blog</a>
          </span>
        </div>

        <div className="footer__social-wrapper">
          <span>
            <svg
              className="footer__social-icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z"></path>
            </svg>
          </span>
          <span>
            <svg
              className="footer__social-icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z"></path>
            </svg>
          </span>
          <span>
            <svg
              className="footer__social-icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11 2.5c0-0.275 0.225-0.5 0.5-0.5h2c0.275 0 0.5 0.225 0.5 0.5v2c0 0.275-0.225 0.5-0.5 0.5h-2c-0.275 0-0.5-0.225-0.5-0.5v-2zM8 5c1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.656 0-3-1.344-3-3s1.344-3 3-3zM14 13.5v0c0 0.275-0.225 0.5-0.5 0.5h-11c-0.275 0-0.5-0.225-0.5-0.5v0-6.5h1.1c-0.066 0.322-0.1 0.656-0.1 1 0 2.762 2.237 5 5 5s5-2.238 5-5c0-0.344-0.034-0.678-0.1-1h1.1v6.5z"></path>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};
