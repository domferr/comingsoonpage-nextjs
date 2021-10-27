import FadeInImage from "../src/components/FadeInImage";
import HearthSvg from "../src/components/HearthSvg";

export default function Home() {
  return (
    <div className="page-container">
      <div className="content">
        <div className="logo-container">
          <FadeInImage
            src="/soonlogo.png"
            width={240}
            height={240}
            layout="responsive"
            className="logo"
            priority
          />
        </div>
        <h1 className="under-constr-title">
          This website is under construction
        </h1>
        <div className="under-constr-subtitle">We are coming soon!</div>
      </div>
      <footer>
        Made with <HearthSvg size={14} /> by{" "}
        <a href="https://ferrarodomenico.com" target="_blank" rel="noreferrer">
          Domenico Ferraro
        </a>
      </footer>
    </div>
  );
}
