import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/hybrid-theory.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Hybrid Theory da Banda Linkin Park"
              />
              <strong>Hybrid Theory</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-md-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/hybrid-theory.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Hybrid Theory da Banda Linkin Park"
              />
              <strong>Hybrid Theory</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/hybrid-theory.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Hybrid Theory da Banda Linkin Park"
              />
              <strong>Hybrid Theory</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/hybrid-theory.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Hybrid Theory da Banda Linkin Park"
              />
              <strong>Hybrid Theory</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/hybrid-theory.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Hybrid Theory da Banda Linkin Park"
              />
              <strong>Hybrid Theory</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/hybrid-theory.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Hybrid Theory da Banda Linkin Park"
              />
              <strong>Hybrid Theory</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4"></div>
          <h2 className="font-semibold text-2xl mt-10">
            Made for Murilo Nascimento
          </h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/hybrid-theory.jpg"
                width={120}
                height={120}
                className="w-full"
                alt="Capa do álbum Hybrid Theory da Banda Linkin Park"
              />
              <strong className="font-semibold">Hybrid Theory</strong>
              <span className="text-sm text-zinc-400">
                Chester Bennington, Mike Shinoda, Brad Delson, Dave
                &#34;Phoenix&&#34; Farrell, Joe Hahn e Rob Bourdon
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/hybrid-theory.jpg"
                width={120}
                height={120}
                className="w-full"
                alt="Capa do álbum Hybrid Theory da Banda Linkin Park"
              />
              <strong className="font-semibold">Hybrid Theory</strong>
              <span className="text-sm text-zinc-400">
                Chester Bennington, Mike Shinoda, Brad Delson, Dave
                &#34;Phoenix&&#34; Farrell, Joe Hahn e Rob Bourdon
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/hybrid-theory.jpg"
                width={120}
                height={120}
                className="w-full"
                alt="Capa do álbum Hybrid Theory da Banda Linkin Park"
              />
              <strong className="font-semibold">Hybrid Theory</strong>
              <span className="text-sm text-zinc-400">
                Chester Bennington, Mike Shinoda, Brad Delson, Dave
                &#34;Phoenix&&#34; Farrell, Joe Hahn e Rob Bourdon
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/hybrid-theory.jpg"
                width={120}
                height={120}
                className="w-full"
                alt="Capa do álbum Hybrid Theory da Banda Linkin Park"
              />
              <strong className="font-semibold">Hybrid Theory</strong>
              <span className="text-sm text-zinc-400">
                Chester Bennington, Mike Shinoda, Brad Delson, Dave
                &#34;Phoenix&&#34; Farrell, Joe Hahn e Rob Bourdon
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/hybrid-theory.jpg"
                width={120}
                height={120}
                className="w-full"
                alt="Capa do álbum Hybrid Theory da Banda Linkin Park"
              />
              <strong className="font-semibold">Hybrid Theory</strong>
              <span className="text-sm text-zinc-400">
                Chester Bennington, Mike Shinoda, Brad Delson, Dave
                &#34;Phoenix&&#34; Farrell, Joe Hahn e Rob Bourdon
              </span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
