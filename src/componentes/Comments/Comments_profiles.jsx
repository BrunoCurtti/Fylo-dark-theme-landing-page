export const Comments_profiles = (props) => {
  return (
    <>
      <section>
        <article className="comments__card">
          <p className="comments__text">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="comments__profile-section">
            <div>{props.profile}</div>
            <div className="comments__profile-img-name">
              <div className="comments__name">{props.name}</div>
              <div>Founder & CEO, Huddle</div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
