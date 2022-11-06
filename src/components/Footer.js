import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>
        Any feature suggestions or want to get in contact? Click
        <Link to="mailto:rogersjashawn20@gmail.com"> here</Link>
      </p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
