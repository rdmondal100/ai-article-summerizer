import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-5">
        
        <img src={logo} alt="Logo" className="w-60 object-contain"/>
        <a href="https://github.com/rdmondal100" className=" github">
        <button type="button"  className="black_btn">GitHub</button>

        </a>

      </nav>
      <h1 className="head_text"> Summarize Your Articles with <br className="max-md:hidden"/>
      <span className="own-gradien">OpenAi GPT-4</span></h1>
      <h1 className="desc">Enhance your productivity with Ai Summarizer, an open-source article summarizer that transfomrs long articles into clear and effective summaries</h1>
    </header>
  );
};

export default Hero;
