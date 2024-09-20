
import Link from 'next/link';

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="p-5">
        <Link href="/" className="hover:text-sky-700">home</Link>
      </div>
      <div className="p-5">
        <p className="pb-10">
          hi there! my name is joe. i'm a recent graduate from&nbsp;
          <a href="https://illinois.edu/" className="text-orange-500 hover:text-blue-300">
            the University of Illinois</a>&nbsp;with a degree in&nbsp;
          <a
          href="https://cs.illinois.edu/academics/undergraduate/degree-program-options/cs-x-degree-programs/computer-science-music"
          className="text-blue-500 hover:text-orange-300">CS + Music.</a>
        </p>
        <p className="pb-10">as my degree title suggests, i love all things technology and music. aside from&nbsp;
          <a href="https://github.com/joedubravec/joedubravec.github.io"
             className="text-blue-500 hover:text-blue-300">building this website</a>,
          i've had the opportunity to create and be a part of a lot of cool projects over the years,
          both curricular and professional. for all the specific details on professional experience,
          take a look at my&nbsp;
          <a href="/resume" className="text-blue-500 hover:text-blue-300">resume</a> or my&nbsp;
          <a href="https://www.linkedin.com/in/josephdubravec/"
             className="text-blue-500 hover:text-blue-300">LinkedIn profile</a>.
          there's also some fun stuff i've made on my&nbsp;
          <a href="https://github.com/joedubravec?tab=overview&from=2024-09-01&to=2024-09-19"
             className="text-blue-500 hover:text-blue-300">Github profile </a>
          aside from this website.
          </p>
        <p className="pb-10">
          i also like to make other stuff, namely music and poetry. this website has (or is about to have) some of my
          compositions and poems free for your perusal. if you like any of it or hate all of it, feel free to
          <a href="mailto:joe@joedubravec.com" className="text-blue-500 hover:text-blue-300">&nbsp;email me&nbsp;</a>
          and let me know. also feel free to email me to say hi or talk about movie soundtracks.
        </p>
      </div>
    </div>
  );
}