import Link from 'next/link';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

export default function Layout({ children }: Props) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>home</a>
              </Link>
            </li>
            <li>
              <Link href="/post">
                <a>posts</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
