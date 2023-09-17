export const Header = () => {
  return (
    <>
      <div className="header__wrapper">
        <div>
          <img src="/images/illustration-intro.png" width="95%" />
        </div>

        <h2 className="header__title">
          All your files in one secure location, accessible anywhere.
        </h2>

        <p className="header__text">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family and co-workers.
        </p>

        <button className="blue-btn__big">Get Started</button>
      </div>
    </>
  );
};
