import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "700", subsets: ["greek"] });

export default function Header() {
  return (
    <header className="w-full text-center my-5">
      <h1 className="flex flex-col justify-center items-center text-5xl mt-6 font-bold">
        Welcome to
        <svg className="w-full h-14">
          <text
            x={"50%"}
            y={"50%"}
            dy={".35em"}
            textAnchor="middle"
            className={`animate-text-stroke fill-primary ${roboto.className}`}
          >
            Habibi Academy
          </text>
        </svg>
      </h1>
      <h2 className="text-3xl mt-2 font-semibold">Learn To Grow!</h2>
    </header>
  );
}
