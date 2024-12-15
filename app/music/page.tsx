
import Link from 'next/link';

export default function Page() {
  return <div>
          <div className="p-5">
            <Link href="/" className="hover:text-sky-700">home</Link>
          </div>
          <div className="p-5">
            <iframe width="100%"
                    height="300"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1985097295&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}>
              <a href="https://soundcloud.com/joedubravec"
                 title="Joe Dubravec" target="_blank"
                 style={{color: '#cccccc', textDecoration: 'none'}}>Joe Dubravec</a> · <a href="https://soundcloud.com/joedubravec/first-dream-second-dream" title="First Dream / Second Dream" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>First Dream / Second Dream</a>
            </div>
          </div>
        </div>;
}