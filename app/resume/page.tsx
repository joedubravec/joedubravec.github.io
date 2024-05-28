
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <div className="flex p-5">
        <Link href="/" className="hover:text-sky-700">home</Link>
      </div>
      <iframe src="/joedubravec-dot-com/Joseph-Dubravec-Resume.pdf" className="h-screen w-screen"/>
    </div>
  );
}