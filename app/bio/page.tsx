
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <div className="flex p-5">
        <Link href="/" className="hover:text-sky-700">home</Link>
      </div>
      <div className="flex p-5">
        <p>
          hi there! my name is joe. i'm a recent graduate from&nbsp;
          <a href="https://illinois.edu/" className="hover:text-orange-500">the University of Illinois</a>&nbsp;with a degree in&nbsp;
          <a
          href="https://cs.illinois.edu/academics/undergraduate/degree-program-options/cs-x-degree-programs/computer-science-music"
          className="hover:text-blue-500">CS + Music.</a>
        </p>
      </div>
    </div>
  );
}