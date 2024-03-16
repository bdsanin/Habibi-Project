import Image from "next/image";

export default function Description(props: Description) {
  const { image, textRight, children } = props;
  return (
    <>
      <section
        className={`w-full flex justify-center items-center my-24 ${
          textRight ? "flex-row-reverse" : ""
        }`}
      >
        <section className="w-2/4 text-center pt-7 text-2xl flex items-center justify-center">
          <div className="w-4/5 flex justify-center items-center flex-col">
            {children}
          </div>
        </section>
        <aside className="w-2/4 flex justify-center items-cneter">
          <Image
            className="w-2/4"
            src={image}
            alt=""
          />
        </aside>
      </section>
      <hr />
    </>
  );
}
