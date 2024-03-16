import Learning from "@/../public/undraw_learning_sketching_nd4f.svg";
import QualityTeacher from "@/../public/undraw_business_plan_re_0v81.svg";
import BetterCommunity from "@/../public/undraw_community_re_cyrm.svg";
import Description from "../components/Description";
import GetStartbtn from "../components/GetStartbtn";
import Socials from "../components/Socials";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Description image={Learning}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
          magnam vero iste, velit ad eos pariatur in quis facere facilis
          inventore. Nostrum ducimus facilis ea voluptates distinctio modi quod?
        </p>
        <GetStartbtn />
      </Description>
      <Description
        image={QualityTeacher}
        textRight={true}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
        magnam vero iste, velit ad eos pariatur in quis facere facilis
        inventore. Nostrum ducimus facilis ea voluptates distinctio modi quod?
      </Description>
      <Description image={BetterCommunity}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
          magnam vero iste, velit ad eos pariatur in quis facere facilis
          inventore. Nostrum ducimus facilis ea voluptates distinctio modi quod?
        </p>
        <Socials />
      </Description>
      <Footer />
    </>
  );
}
