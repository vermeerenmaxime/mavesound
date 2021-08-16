import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// import InstagramIcon from "../src/svg/instagram-brands.svg";

import { useRouter } from "next/router";

const NavigationLink = ({ children, selected = false, href = "/" }) => {
  return (
    <Link href={`${href}`} passHref>
      <a
        className={`cursor-pointer c-nav__link ${
          selected ? "c-nav__link--selected" : ""
        }`}
      >
        {children}
      </a>
    </Link>
  );
};

const Navigation = () => {
  const router = useRouter();
  let pageName = router.pathname.substring(1, router.pathname.length);

  return (
    <div className="c-main__navigation c-nav p-12 px-12 lg:px-24 text-sm flex space-x-12 justify-end items-center uppercase font-semibold ">
        <div className="space-x-12 hidden sm:block">
      <NavigationLink href={"/"} selected={pageName === "" ? true : false}>
        Home
      </NavigationLink>
      <NavigationLink selected={pageName === "music" ? true : false}>
        Music
      </NavigationLink>
      <NavigationLink selected={pageName === "shows" ? true : false}>
        Shows
      </NavigationLink>
      <NavigationLink selected={pageName === "contact" ? true : false}>
        Contact
      </NavigationLink>
      <NavigationLink selected={pageName === "about" ? true : false}>
        About
      </NavigationLink>
      </div>
      <div className="c-nav__toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
};

const SubLink = ({ children, href = "/" }) => {
  return (
    <Link href={`${href}`}>
      <a className="flex uppercase font-bold tracking-widest text-sm items-center mt-8">
        {children}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </Link>
  );
};

const SocialLink = ({ link, media, extraClass = "" }) => {
  return (
    <a target="_blank" href={link}>
      <i
        className={`fab fa-${media} c-socials__icon transform ${extraClass} `}
      ></i>
    </a>
  );
};

export default function Home() {
  return (
    <div className="c-app">
      <Head>
        <title>Mave :: Home</title>
        <meta
          name="description"
          content="Mave is a music producer from Belgium.."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="c-main">
        <div className="c-main--overlay-green"></div>
        <svg
          className="c-main--overlay-arrow md:scale-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1146.35 1080.4"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="1.548"
              y1="-0.011"
              x2="0"
              y2="0.5"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="gray" stop-opacity="0" />
            </linearGradient>
          </defs>
          <path
            className="c-main--overlay-arrow__path  opacity-0 lg:opacity-100"
            id="Path_2"
            data-name="Path 2"
            d="M1143.806,2551.522,816.7,2223.157H-2.544l.526,1080.4H735.227Z"
            transform="translate(-350 -2223.157)"
            fill="url(#linear-gradient)"
          />
        </svg>
        <div className="c-main--parralello"></div>
        <div className="c-main__content">
          <Navigation></Navigation>

          <div className="px-12 lg:px-24 h-full flex">
            <div className="grid w-full sm:w-11/12 lg:w-6/12 content-between h-full">
              <div className="-mb-8 py-12">
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold -ml-1">
                  Mave
                </div>
                <div className="text-xs md:text-sm xl:text-sm mt-8 mb-3 opacity-80">
                  Maxime Vermeeren, better known by his stage name <b>Mave</b>{" "}
                  is a 19 year old DJ/producer from Belgium.
                  <div className="hidden sm:inline">
                    In march 2020 he released his very first track with{" "}
                    <b>Sony Music</b>.<br />
                    <br />
                    Born and raised in <b>Belgium</b>, he discovered the magic
                    of Tomorrowland at a very young age. Inspired by this world
                    famous festival, Mave started making his own music at the
                    age of 15. 4 years later, he already hit half a million
                    streams and released his very first own track called{" "}
                    <b>'Who Are You'</b> in collaboration with Danish
                    singer-songwriter LauraBrown.
                  </div>
                  <br />
                  <br />
                  You can describe his music genre as modern <b>house</b> with a{" "}
                  <b>futuristic</b> twist. His tracks and remixes have been
                  played all over the world, by the biggest DJs in the scene,
                  such as KAAZE, Madison Mars, Carta, Lucas & Steve and many
                  more.
                  <br />
                  <br />
                  Make sure to keep an eye out on Mave. He’s ready to become a
                  big <br />
                  inspiration for many others!
                </div>
                <SubLink href={"/"}>Learn More</SubLink>
              </div>
            </div>
            <div className="hidden lg:flex w-6/12 items-end content-center flex-col">
              <img className="c-main__image"></img>
            </div>
          </div>
          <div className="flex items-center justify-end sm:justify-start gap-20 ">
            <div className="px-12 lg:px-24 mb-0 sm:mb-4 text-2xl lg:text-3xl py-24 c-socials space-x-5 float-right sm:float-left">
              <SocialLink
                link="https://www.instagram.com/mavesound/"
                media="instagram"
              />
              <SocialLink
                link="https://www.facebook.com/mavesounds/"
                media="facebook"
                extraClass="scale-90"
              />
              <SocialLink
                link="https://www.soundcloud.com/mavesound/"
                media="soundcloud"
              />
              <SocialLink
                link="https://www.twitter.com/mavesound/"
                media="twitter"
                extraClass="scale-75"
              />
              <SocialLink
                link="https://www.tiktok.com/@mavesound/"
                media="tiktok"
                extraClass="scale-75"
              />
              <SocialLink
                link="https://open.spotify.com/artist/4k3qibqlspQSwEDhmA5NL7"
                media="spotify"
                extraClass="scale-90"
              />
            </div>
            {/* <div className="c-main--parralello2 -ml-16  lg:ml-4 xl:ml-24"></div> */}
          </div>
        </div>
      </main>
      <div className="c-y">Music</div>
      <div className="c-x">Contact</div>
      <div className="c-x">Who is Mave</div>

      <footer className="c-footer">Paginas</footer>
    </div>
  );
}
