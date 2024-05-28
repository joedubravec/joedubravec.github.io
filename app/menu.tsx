'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'resume', href: '/resume', icon: null, disabled: false },
  { name: 'bio (coming soon!)', href: '/bio', icon: null, disabled: true },
  { name: 'music (coming soon!)', href: '/music', icon: null, disabled: true},
  { name: 'poetry (coming soon!)', href: '/poetry', icon: null, disabled: true },
];


export default function Menu() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
                'pointer-events-none': link.disabled,
              },
            )}
          >
            {/* <LinkIcon className="w-6" /> */}
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}