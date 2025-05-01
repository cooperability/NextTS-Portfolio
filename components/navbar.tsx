import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between bg-transparent text-xl leading-normal z-10">
      <a className="text-inherit no-underline px-2 mx-1 hover:underline" href="/">Home</a>
      <a className="text-inherit no-underline px-2 mx-1 hover:underline" href="/demos">Demos</a>
      <a className="text-inherit no-underline px-2 mx-1 hover:underline" href="/resources">Resources</a>
    </nav>
  );
};

export default Navbar;