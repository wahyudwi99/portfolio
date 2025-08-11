import Link from 'next/link';
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
    <div className="h-screen">
      <div>
        
      </div>
        <div className="flex flex-col">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 font-sans font-bold text-7xl mt-80 ml-15">
                Hi, my name is Wahyu !
            </h1>
            <div className="flex flex-row">
              <h2 className="text-white font-sans text-4xl ml-15">
                  Data scientist & AI/ML Engineer
              </h2>
            </div>
            <p className="flex flex-wrap text-white text-justify font-sans text-[20px] mt-10 ml-15 max-w-200 mx-auto mr-3">
                I have approximately 2.5+ years of experience working in tech industries in solving several cases through automation & predictive analytics approaches.
                My core skills are in deep learning & machine learning where I have developed systems which leveraged deep learning approaches such as
                object detection (Comp. Vision), text classification (NLP), and generative-AI (LLM).
            </p>
            <div className="flex flex-row gap-1 ml-15 mt-10 text-[18px]">
              <p>My updated resume is available</p>
              <Link href="https://drive.google.com/file/d/1VW1UdbYN5we2MtPKw4-lsM1KcyyqgslW/view?usp=sharing" className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 font-sans font-bold">
                  here
              </Link>
              <p>!</p>
            </div>
        </div>
    </div>
    <div>
        <Experiences/>
    </div>
    <div className="mt-30">
        <Projects/>
    </div>
    </>
  );
}