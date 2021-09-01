import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// import InstagramIcon from "../src/svg/instagram-brands.svg";

import { useRouter } from "next/router";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { songType } from "../src/types/song";
import Contact from "./contact";

const pages = ["home", "music", "shows", "about", "contact"];
const songs = [
  {
    trackName: "Higher 1",
    artists: "Mave",
    listenURL: "https://orcd.co/mave4",
    backgroundImage:
      "https://loudmemory.com/music/files/card_image_icon-141.jpg",
  },
  {
    trackName: "Who Are You 2",
    artists: "Mave & LauraBrown",
    listenURL: "https://orcd.co/mave4",
    backgroundImage:
      "https://loudmemory.com/music/files/card_image_icon-141.jpg",
  },
  {
    trackName: "Heart Broken 3",
    artists: "Mave & LauraBrown",
    listenURL: "https://orcd.co/mave4",
    backgroundImage:
      "https://loudmemory.com/music/files/card_image_icon-141.jpg",
  },
  {
    trackName: "Higher 4",
    artists: "Mave",
    listenURL: "https://orcd.co/mave4",
    backgroundImage:
      "https://loudmemory.com/music/files/card_image_icon-141.jpg",
  },
  {
    trackName: "Who Are You 5",
    artists: "Mave & LauraBrown",
    listenURL: "https://orcd.co/mave4",
    backgroundImage:
      "https://loudmemory.com/music/files/card_image_icon-141.jpg",
  },
  {
    trackName: "Heart Broken 6",
    artists: "Mave & LauraBrown",
    listenURL: "https://orcd.co/mave4",
    backgroundImage:
      "https://loudmemory.com/music/files/card_image_icon-141.jpg",
  },
  {
    trackName: "Higher 7",
    artists: "Mave",
    listenURL: "https://orcd.co/mave4",
    backgroundImage:
      "https://loudmemory.com/music/files/card_image_icon-141.jpg",
  },
  {
    trackName: "Who Are You 8",
    artists: "Mave & LauraBrown",
    listenURL: "https://orcd.co/mave4",
    backgroundImage:
      "https://loudmemory.com/music/files/card_image_icon-141.jpg",
  },
  {
    trackName: "Heart Broken 9",
    artists: "Mave & LauraBrown",
    listenURL: "https://orcd.co/mave4",
    backgroundImage:
      "https://loudmemory.com/music/files/card_image_icon-141.jpg",
  },
];

const NavigationLink = ({
  children,
  selected = false,
  href = "/",
  onClick = () => console.log("Clicked menu"),
}) => {
  return (
    // <Link href={`${href}`} passHref>
    <a
      href={`${href}`}
      className={`cursor-pointer c-nav__link ${
        selected ? "c-nav__link--selected" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </a>
    // </Link>
  );
};

const Navigation = ({ isOpen, setToggleNav, navActive }) => {
  const router = useRouter();
  let pageName = router.pathname.substring(1, router.pathname.length);

  return (
    <>
      <div
        className={`c-main__navigation c-nav py-8 lg:py-16 px-8 sm:px-12 lg:px-24 text-sm flex space-x-12 justify-end items-center uppercase font-semibold ${
          !isOpen && navActive ? "c-nav--active " : ""
        }`}
      >
        <div
          className={`absolute px-8 sm:px-12 lg:px-24 left-0  ${
            navActive ? "slideInLeft" : "slideOutLeft"
          }`}
        >
          Mave Logo SM
        </div>
        <div className="space-x-12 hidden sm:block">
          {pages &&
            pages.map((page, index) => {
              return (
                <NavigationLink
                  key={index}
                  href={`#${page}`}
                  selected={
                    pageName === page
                      ? true
                      : index === 0 && pageName === ""
                      ? true
                      : false
                  }
                >
                  {page}
                </NavigationLink>
              );
            })}
        </div>
        <div
          className={`c-nav__toggle ${
            isOpen ? "c-nav__toggle--selected" : ""
          } flex sm:hidden top-8 z-50`}
          onClick={() => setToggleNav(!isOpen)}
        >
          {!isOpen ? (
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
          ) : (
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
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

const SubLink = ({ children, className = "", href = "/", size = "sm" }) => {
  return (
    <Link href={`${href}`}>
      <a
        className={`flex uppercase font-bold tracking-widest text-${size} cursor-pointer items-center mt-8 ${className}hover:`}
      >
        {children}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${size == "sm" ? "h-4 w-4 ml-2" : "h-3 w-3 ml-1"}`}
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
    <a target="_blank" href={link} rel="noreferrer">
      <i
        className={`fa fab fa-${media} c-socials__icon transform ${extraClass} `}
      ></i>
    </a>
  );
};

const SideNavigation = ({ isOpen, setToggleNav, className = "" }) => {
  const router = useRouter();
  let pageName = router.pathname.substring(1, router.pathname.length);

  return (
    <>
      <aside
        className={`c-navigation backdrop-filter backdrop-blur-2xl p-12 flex flex-row gap-8 justify-between ${className} ${
          isOpen ? "slideInLeft" : "slideOutLeft"
        }`}
      >
        <div className="grid flex-col uppercase font-semibold gap-5 text-white text-sm justify-between w-full">
          <div className="grid items-center justify-items-start">
            {pages &&
              pages.map((page, index) => {
                return (
                  //   <a
                  //     key={index}
                  //     className=""
                  //     href={"/"}
                  //     // selected={
                  //     //   pageName === page
                  //     //     ? true
                  //     //     : index === 0 && pageName === ""
                  //     //     ? true
                  //     //     : false
                  //     // }
                  //   >
                  //     {page}
                  //   </a>
                  <NavigationLink
                    key={index}
                    href={`#${page}`}
                    selected={
                      pageName === page
                        ? true
                        : index === 0 && pageName === ""
                        ? true
                        : false
                    }
                    onClick={() => setToggleNav(!isOpen)}
                  >
                    {page}
                  </NavigationLink>
                );
              })}
            <div
              className="cursor-pointer"
              onClick={() => setToggleNav(!isOpen)}
            >
              Close
            </div>
          </div>
          <hr className="opacity-10 mb-4 w-full"></hr>
          {/* <div
            className="flex w-12 h-12 backdrop-blur-xl justify-center items-center bg-white bg-opacity-5  rounded-full text-white cursor-pointer"
            onClick={() => setToggleNav(!isOpen)}
          >
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
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div> */}
        </div>
      </aside>
    </>
  );
};

export default function Home() {
  // kick off the polyfill!

  const scrollVariables = useRef<any>();
  const scrollThing = useRef<any>();

  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    scrollVariables.current.onscroll = () => {
      let trackScrollTop = scrollVariables.current.scrollTop;

      if (trackScrollTop > 200) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    };
  }, []);
  //   useEffect(() => {
  //     scrollVariables.current.onscroll = () => {
  //       let screenHeight = scrollVariables.current.clientHeight;
  //       //   console.log(screenHeight);
  //       //   let appHeight = scrollVariables.current.offsetHeight;
  //       //   console.log(appHeight);

  //       let trackScrollTop = scrollVariables.current.scrollTop;

  //       if (trackScrollTop < screenHeight) {
  //         scrollThing.current.style.marginRight = "-50px";
  //         scrollThing.current.style.height = "130px";
  //         scrollThing.current.style.width = "65%";
  //         scrollThing.current.style.transform = "skew(-25deg)";
  //       }
  //       if (trackScrollTop > screenHeight - 100) {
  //         scrollThing.current.style.marginRight = "25%";
  //         scrollThing.current.style.height = "40%";
  //         scrollThing.current.style.width = "80%";
  //         scrollThing.current.style.transform = "skew(25deg)";
  //       }
  //       if (trackScrollTop > screenHeight * 2 - 100) {
  //         scrollThing.current.style.marginRight = "35%";
  //         scrollThing.current.style.height = "28%";
  //         scrollThing.current.style.width = "80%";
  //         scrollThing.current.style.transform = "skew(25deg)";
  //       }
  //       if (trackScrollTop > screenHeight * 3 - 100) {
  //         scrollThing.current.style.marginRight = "35%";
  //         scrollThing.current.style.height = "70%";
  //         scrollThing.current.style.width = "80%";
  //         scrollThing.current.style.transform = "skew(25deg)";
  //       }
  //       if (trackScrollTop > screenHeight * 3 + 100) {
  //         scrollThing.current.style.marginRight = "60%";
  //         scrollThing.current.style.height = "100%";
  //         scrollThing.current.style.width = "100%";
  //         scrollThing.current.style.transform = "skew(-15deg)";
  //       }
  //     };
  //   }, []);

  const artistImages = [
    "https://instagram.fbru2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/233792805_280887997173551_1765922229156711915_n.jpg?_nc_ht=instagram.fbru2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=9CkObFkaINEAX9hDZLf&edm=AP_V10EBAAAA&ccb=7-4&oh=cd70996ab9bfc1a03deef34024c42fa6&oe=613291D9&_nc_sid=4f375e",
    "https://i.imgur.com/ucL13H4.jpg",
    "https://partyflock.nl/ov/images/artist/83741_2971x2432_399015/Mesto.jpg",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpartyflock.nl%2Fimages%2Fartist%2F83741_1169x1169_572283%2FMesto.jpg&f=1&nofb=1",
  ];

  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="c-app" ref={scrollVariables}>
      <Head>
        <title>Mave :: Home</title>
        <meta
          name="description"
          content="Mave is a music producer from Belgium.."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideNavigation
        isOpen={toggleNav}
        setToggleNav={setToggleNav}
      ></SideNavigation>
      <main className="c-main" id="home">
        <div className="c-main--overlay-green"></div>
        {/* <svg
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
              <stop offset="1" stopColor="gray" stopOpacity="0" />
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
        </svg> */}

        <div
          className="c-main--parralello"
          style={{ marginRight: "0%" }}
          ref={scrollThing}
        ></div>
        <div className="c-main__content">
          <Navigation
            isOpen={toggleNav}
            setToggleNav={setToggleNav}
            navActive={navActive}
          ></Navigation>

          <div className="px-8 sm:px-12 lg:px-24  flex">
            <div className="w-full sm:w-11/12 lg:w-6/12 h-full flex items-center">
              <div className="-mb-20 py-12">
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
                    <b>&apos;Who Are You&apos;</b> in collaboration with Danish
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
                  Make sure to keep an eye out on Mave. He&apos;s ready to
                  become a big <br />
                  inspiration for many others!
                </div>
                <SubLink href={"/"}>Learn More</SubLink>
              </div>
            </div>
            <div className="hidden lg:flex w-6/12 items-end content-center flex-col">
              <img className="c-main__image"></img>
            </div>
          </div>
          <div className="grid sm:justify-start px-8 sm:px-12 lg:px-24 text-2xl sm:text-2xl md:text-3xl gap-2 sm:gap-6 grid-flow-col items-center justify-items-center -mt-4 sm:-mt-4">
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

            {/* <div className="c-main--parralello2 -ml-16  lg:ml-4 xl:ml-24"></div> */}
          </div>
        </div>
      </main>
      <div
        className="c-music flex items-center justify-center flex-col h-full p-6 py-12 sm:p-12 md:p-24 md:h-screen "
        id="music"
      >
        <h1 className="text-3xl sm:text-4xl flex font-bold -mt-4 items-center justify-between space-x-6">
          <MusicNavigatorIcon direction="right" />
          <div>Music</div>
          <MusicNavigatorIcon enabled={true} direction="left" />
        </h1>
        <div className="mt-4 w-full ">
          {/* <div className="mt-4 grid items-center w-11/12  sm:w-10/12 md:w-9/12 max-w-5xl gap-4 grid-rows-3 sm:grid-rows-2 grid-cols-2 sm:grid-cols-3"> */}
          {/* {songs.slice(0,6)} */}
          {/* {songs &&
            songs.slice(0,6).map((song: songType, index) => {
              return (
                <MusicCover
                  key={index}
                  backgroundImage={song.backgroundImage}
                  trackName={song.trackName}
                  artists={song.artists}
                  listenURL={song.listenURL}
                >
                  hi
                </MusicCover>
              );
            })} */}
          {songs &&
            songs.map((song: songType, index) => {
              if (index % 6 == 0) {
                return (
                  <div
                    key={index}
                    className={`grid c-music__caroussel gap-4 
                    grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-3 
                    
                    ${index != 0 ? "slideInRight" : "hidden"}`}
                  >
                    {songs
                      .slice(index, index + 6)
                      .map((song: songType, index) => {
                        return (
                          <MusicCover
                            key={index}
                            backgroundImage={song.backgroundImage}
                            trackName={song.trackName}
                            artists={song.artists}
                            listenURL={song.listenURL}
                          >
                            hi
                          </MusicCover>
                        );
                      })}
                  </div>
                );
                // songs.slice(0, 6).map((songg: songType, indexx) => {
                //   console.log("songg");
                //   return (

                //     // <MusicCover
                //     //   key={indexx}
                //     //   backgroundImage={songg.backgroundImage}
                //     //   trackName={songg.trackName}
                //     //   artists={songg.artists}
                //     //   listenURL={songg.listenURL}
                //     // >
                //     //   hi
                //     // </MusicCover>
                //   );
                // });
              }
            })}

          {/* <MusicCover>yas!</MusicCover>
          <MusicCover></MusicCover>
          <MusicCover></MusicCover>
          <MusicCover></MusicCover>
          <MusicCover></MusicCover>
          <MusicCover></MusicCover> */}
        </div>
        <div className="mt-8 flex space-x-2">
          {songs &&
            songs.map((song, index) => {
              if (index % 6 == 0)
                return <MusicNavigatorDot key={index} enabled={false} />;
            })}
          {/* <MusicNavigatorDot enabled={true} />
          <MusicNavigatorDot enabled={false} />
          <MusicNavigatorDot enabled={false} /> */}
        </div>
      </div>

      <div className="c-about" id="about">
        <div className="c-about--overlay-purple flex flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 grid h-96 sm:h-screen px-4 sm:px-8 lg:p-24 py-4 sm:pt-24 grid-rows-2 sm:grid-rows-3 grid-cols-2 gap-4 flex-wrap">
            <div
              className="bg-black rounded-md sm:col-span-2 bg-opacity-70 "
              style={{
                backgroundImage: `url(${artistImages[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="bg-black rounded-md sm:row-span-2 bg-opacity-30 "
              style={{
                backgroundImage: `url(${artistImages[1]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="bg-black rounded-md bg-opacity-70 "
              style={{
                backgroundImage: `url(${artistImages[2]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="bg-black rounded-md bg-opacity-70 "
              style={{
                backgroundImage: `url(${artistImages[3]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="col-span-2 gap-4 grid-cols-4 hidden sm:grid">
              <div
                className="bg-black rounded-md h-24 bg-opacity-70 "
                style={{
                  backgroundImage: `url(${artistImages[4]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="bg-black rounded-md h-24 bg-opacity-70 "
                style={{
                  backgroundImage: `url(${artistImages[5]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="bg-black rounded-md h-24 bg-opacity-70 "
                style={{
                  backgroundImage: `url(${artistImages[6]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="bg-black rounded-md h-24 bg-opacity-70 "
                style={{
                  backgroundImage: `url(${artistImages[7]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-8 sm:p-24 sm:pl-0">
            <h3 className="font-bold text-3xl">Who&apos;s Mave?</h3>
            <div className="mt-6 text-white text-opacity-90">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua.{" "}
            </div>
            <div className="text-sm mt-4 text-white text-opacity-70">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit
            </div>
          </div>
        </div>
      </div>
      <div
        className="c-contact h-full lg:h-screen flex p-12 lg:p-24 justify-center flex-col "
        id="contact"
      >
        <h2 className="text-3xl font-bold">Contact Mave</h2>
        <Contact></Contact>

        <div className="mt-8 sm:mt-24">
          <div className="items-center font-medium gap-3 text-white text-opacity-80 hidden sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26.543"
              height="26.545"
              viewBox="0 0 26.543 26.545"
            >
              <g
                id="at-sign"
                transform="translate(-0.984 -0.983)"
                opacity="0.8"
              >
                <circle
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  cx="4.991"
                  cy="4.991"
                  r="4.991"
                  transform="translate(9.272 9.273)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />

                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M19.169,9.358V15.49a3.679,3.679,0,1,0,7.358,0V14.263A12.263,12.263,0,1,0,21.72,24"
                  transform="translate(0 0)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
            or just write an old fashioned email..
          </div>
          <div className="mt-4 flex gap-2 sm:gap-6 text-sm font-semibold mix-blend-overlay sm:items-center flex-col sm:flex-row">
            <div className="flex items-center gap-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              management@mavesound.com
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              promo@mavesound.com
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              bookings@mavesound.com
            </div>
          </div>
        </div>
      </div>

      <footer className="c-footer px-12 lg:px-24 py-16 text-sm sm:text-base">
        <div className="flex justify-between w-full">
          <div className="grid gap-2">
            <div className="font-bold uppercase gap-2 flex items-center ">
              Navigate{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 transform rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>{" "}
            </div>
            {pages &&
              pages.map((page, index) => {
                return (
                  <Link key={index} href="/" passHref>
                    <a className="capitalize hover:underline text-white text-opacity-80">
                      {page}
                    </a>
                  </Link>
                );
              })}
          </div>

          <div className="text-right text-white text-opacity-50 ">
            Website made with{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline text-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>{" "}
            <br />
            by{" "}
            <a
              href="https://maveproductions.com"
              className="font-medium hover:underline"
            >
              MaveProductions
            </a>
          </div>
        </div>
        <div className="mt-8 text-opacity-50 text-white text-sm grid grid-flow-col justify-start gap-4">
          <div>Terms & Conditions</div>
          <div>Privacy Policy </div>
          <div>Cookies Policy</div>
        </div>
      </footer>
    </div>
  );
}

const MusicNavigatorDot = ({ enabled = false }) => {
  return (
    <div
      className={`h-2 w-2 bg-white ${
        enabled ? "bg-opacity-75" : "bg-opacity-25 cursor-pointer"
      } rounded-xl`}
    ></div>
  );
};

const MusicNavigatorIcon = ({ direction = "left", enabled = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`flex items-center justify-center h-5 w-5 mt-2 text-white ${
        enabled ? "text-opacity-75" : "text-opacity-25"
      } hover:bg-white rounded-xl cursor-pointer hover:text-black hover:text-opacity-50 transition duration-200 ease-in-out ${
        direction === "right" && "transform rotate-180"
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const MusicCover = ({
  backgroundImage = "https://loudmemory.com/music/files/card_image_icon-141.jpg",
  trackName = "No trackname",
  children = "No description",
  artists = "Mave",
  listenURL = "/",
}) => {
  const [description, setDescription] = useState(false);
  return (
    <div
      className="h-36 lg:h-48 rounded-sm overflow-hidden "
      onMouseOver={() => setDescription(true)}
      onMouseLeave={() => setDescription(false)}
    >
      <div
        className="h-36 lg:h-48 bg-white flex items-end"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className={`h-36 lg:h-48 -mt-36 lg:-mt-48 flex items-end ${
          description ? "fadeOut" : "fadeIn"
        }`}
      >
        <div className="bg-black bg-opacity-60 px-4 py-3 text-xs lg:text-sm w-full  backdrop-filter backdrop-blur-xl">
          <div className="block font-bold uppercase">{artists}</div>
          <div className="block -mt-1">{trackName}</div>
        </div>
      </div>

      <div
        className={`h-36 lg:h-48 -mt-36 lg:-mt-48 ${
          description ? "fadeIn" : "fadeOut"
        } bg-white bg-opacity-25  transform -skew-x-12 -ml-6 w-11/12 md:w-3/4 h-full backdrop-filter backdrop-blur-xl `}
      ></div>
      <div
        className={`h-36 lg:h-48 -mt-36 lg:-mt-48 ${
          description ? "fadeIn" : "fadeOut"
        } p-4`}
      >
        <div className="transform flex flex-col content-between text-xs lg:text-sm justify-between h-full">
          <div>
            <div className="block font-bold uppercase">{artists}</div>
            <div className="block -mt-1">{trackName}</div>

            <div className="mt-2">{children}</div>
          </div>

          <SubLink size="xs" href={listenURL}>
            Stream <div className="hidden md:flex pl-1"> here</div>
          </SubLink>
        </div>
      </div>
    </div>
  );
};
