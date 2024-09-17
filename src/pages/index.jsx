import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Laith AboShamat Portofolio</title>
        <meta name="description"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <main className="bg-white px-10 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">
              Laith AboShamat
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
                </li>
              <li>
                <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
                  Resume</a>
                </li>
            </ul>
          </nav>
          <div>
            <h2>
              Laith AboShamat
            </h2>
            <h3>
              Developer and Designer.
            </h3>
            <p>
              Freelancer providing services for programing and design content needs.
              join me down below and lets get cracking
            </p>
          </div>
          <div>
            
          </div>
        </section>
      </main>
    </div>
  );
}
