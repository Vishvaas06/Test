import Link from "next/link";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img className="lg:block rounded-xl shadow-xl shadow-black" width="500" src="/img/bck.jpeg" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
		
          Gojo
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
      ✨Gojo is your ultimate companion for bringing music to life within your Discord server. Totally FREE with High Quality. 
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://discord.com/oauth2/authorize?client_id=1167896630930985023"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Invite Gojo
              </a>
            </Link>
  <div className="py-10"></div>
  <Link href={"https://top.gg/bot/1167896630930985023/vote"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Vote Gojo</a>
  </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Gojo" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "How about creating the best environment to relax yourself with your own emotions?" }}/>
            <a href="https://discord.com/api/oauth2/authorize?client_id=774043716797071371&permissions=277028620608&scope=bot%20applications.commands" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Invite Gojo
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-music text-2xl text-amber-500`} /> Quality</p>
                  <p className="text-gray-500 line-clamp-4">Provides you High Quality music listening completely FREE.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-dot-circle-o text-2xl text-amber-500`} /> Controls</p>
                  <p className="text-gray-500 line-clamp-4">Experience effortless control with Gojo's intuitive playback buttons. Skip, pause, adjust volume, and more, all at your fingertips.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-rss text-2xl text-amber-500`} /> Limitless</p>
                  <p className="text-gray-500 line-clamp-4">Our private tracks collection provides uninterrupted music streaming. | (It is a bot that complies with all copyrights and licenses.)</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-bolt text-2xl text-amber-500`} /> Agile</p>
                  <p className="text-gray-500 line-clamp-4">Makes your listening experience smoother and faster than ever.</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://i.ibb.co/bJx2mYR/6ed61a190867629-65c20bf0d3b31.png"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">Yowai Mo!</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">Maybe I should just kill all the higher-ups, Don't you agree?</p>
                </div>
                <img src="https://i.ibb.co/bJx2mYR/6ed61a190867629-65c20bf0d3b31.png" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>
	    <SpeedInsights />
      </>
  )
}
