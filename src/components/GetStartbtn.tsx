import Link from "next/link";
export default function GetStartbtn() {
  return (
    <Link
      href={"/home"}
      className="bg-primary text-white border rounded-md p-5 block w-fit mt-5 hover:bg-primaryDark"
    >
      Get Started
    </Link>
  );
}
