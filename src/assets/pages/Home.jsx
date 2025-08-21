import { FaTiktok, FaDiscord } from "react-icons/fa";
import ReactLogo from "../../assets/react.svg";

export default function Home() {
  return (
    <>
      <p>Hello, I'm Agha 👋🏼</p>

      <h1 className="hero-title">A newbie web developer</h1>

      <p className="hero-desc">
        I'm trying creating websites that balance beautiful design with powerful
        functionality.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a className="btn" href="#contact">
          Contact Me
        </a>
        <img src="/AKU_AGAH.jpg" alt="logo" width={240} className="hero-img" />
      </div>

      <div className="social-links">
        <a href="https://discord.com/channels/@me">
          <FaTiktok />
        </a>
        <a href="https://www.tiktok.com/@kaitou_yuzuha">
          <FaDiscord />
        </a>
      </div>

      <h2
        style={{ textAlign: "center", marginTop: "40px", marginBottom: "20px" }}
      >
        My Skills
      </h2>

      <div className="skills-wrapper">
        <div className="skills-slide">
          <div className="skill-item">
            <img src={ReactLogo} alt="React" /> React
          </div>

          <div className="skill-item">
            <img src={ReactLogo} alt="React" /> Git
          </div>
          <div className="skill-item">
            <img src={ReactLogo} alt="React" /> JavaScript
          </div>

          <div className="skill-item">
            <img src={ReactLogo} alt="React" /> React
          </div>
          <div className="skill-item">
            <img src={ReactLogo} alt="React" /> GitHub
          </div>
          <div className="skill-item">
            <img src={ReactLogo} alt="React" /> HTML
          </div>
        </div>
      </div>
      <h3>
        More Abt me
        <p>
          ⁕NAME: Agha Ariefiansyah<p></p>
          ⁕CLASS: XI RPL A / 3<p></p>
          ⁕HOBY: Sleep, Badminton, Playing Vidio game's<p></p>
          ⁕ADDRESS: Jl Kedawung XV no 91 B Malang<p></p>
          ⁕WORK INTERSET: Melanjutkan perusahaan ortu<p></p>
          ⁕SKILL: PLAYER CODM<p></p>
          ⁕FAV FOOD: pecel, ramen, udon,mie ayam, pizza, burger, raw salmon,
          kebab, crab, milk, coffe, green tea, boba<p></p>
        </p>
      </h3>
    </>
  );
}
