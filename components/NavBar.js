import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar pt-20 flex-col">
      <span className="mr-8 font-bold">
        <Link href="/">Home</Link>
      </span>
      <span className="mr-8 font-bold">
        <Link href="/api/cv">CV</Link>
      </span>
      <span className="font-bold">
        <Link href="/side-projects">Side Projects</Link>
      </span>
    </div>
  );
}
