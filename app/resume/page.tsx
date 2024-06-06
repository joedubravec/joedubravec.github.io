
import Link from 'next/link';

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="p-5">
        <Link href="/" className="hover:text-sky-700">home</Link>
      </div>
      <iframe src="/Joseph-Dubravec-Resume.pdf" className="flex-grow"/>
    </div>
  );
}