import { useState } from "react";

export const GetEarly = () => {
  const validacionCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [mailIngresado, setMailIngresado] = useState("");
  const [botonClickeado, setBotonClickeado] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (validacionCorreo.test(mailIngresado)) {
      setBotonClickeado(false);
      setIsValid(true);
      return;
    }
    setBotonClickeado(true);
    setIsValid(false);
  };

  const handleInput = (e) => {
    setMailIngresado(e.target.value);
    setBotonClickeado(false);
    setIsValid(false);
  };

  return (
    <>
      <div className="getEarly__wrapper">
        <div className="getEarly__container">
          <h2 className="getEarly__heading">Get early access today</h2>
          <p className="getEarly__text">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div className="getEarly__input-btn">
            <input
              className="input"
              id="email"
              autoComplete="on"
              type="email"
              onChange={handleInput}
              value={mailIngresado}
              placeholder="jhonappleseed@mail.com"
            />
            <button onClick={handleClick} className="blue-btn">
              Get Started For Free
            </button>
          </div>
          <div className="getEarly__validation-msg">
            {botonClickeado && (
              <p className="getEarly__error-p">
                Please enter a valid email address
              </p>
            )}
          </div>
          <div className="getEarly__validation-msg">
            {isValid && (
              <p className="getEarly__success"> Successful registration ! </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
