
// file:    portfolio.tsx

import tmpImage from "../../../assets/react.svg";

function Profile() {
  return (
    <img
      src={tmpImage}
      alt="Raul Banawa"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h3>Full-Stack Developer</h3>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}