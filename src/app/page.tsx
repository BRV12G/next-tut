// src/app/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <>
    <h1>Hello Next.js 👋</h1>
    <Link href="/blog">Blog</Link>
    <Link href='articles/breaking-news-123?lang=en'>Read in English</Link>
    <Link href='articles/breaking-news-123?lang=fr'>Read in French</Link>
    </>
  );
}
