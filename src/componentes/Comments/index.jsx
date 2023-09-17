import { Comments_profiles } from "./Comments_profiles";

export const Comments = () => {
  return (
    <div className="comments__wrapper">
      <div>
        <img
          src="/images/bg-quotes.png"
          alt=""
          className="comments__img-background"
        />
      </div>
      <div className="comments__sections">
        <Comments_profiles
          profile={
            <img src="/images/profile-1.jpg" className="comments__img" />
          }
          name="Satish Patel"
        />
        <Comments_profiles
          profile={
            <img src="/images/profile-2.jpg" className="comments__img" />
          }
          name="Bruce McKenzie"
        />
        <Comments_profiles
          profile={
            <img src="/images/profile-3.jpg" className="comments__img" />
          }
          name="Iva Boyd"
        />
      </div>
    </div>
  );
};
