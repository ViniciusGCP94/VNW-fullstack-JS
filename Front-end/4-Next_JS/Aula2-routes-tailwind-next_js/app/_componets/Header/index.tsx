import Link from "next/link";

export default function Header() {
  return (
    <header className=" bg-blue-950 w-full h-20 pl-10 flex justify-between items-center text-white bg">
      <h1>Next & Tailwind</h1>
      <nav>
        <Link href="/contato">Contato</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
}
