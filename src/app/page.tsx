import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import {
  Home as HomeIcon,
  Search,
  Library,
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
  Maximize,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4 ">
            <button className="rounded-full bg-black/40  p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="text-3xl font-semibold mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image src="/album.jpeg" width={104} height={104} alt="Album" />
              <strong>Wasting Light</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition-colors">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image src="/album.jpeg" width={104} height={104} alt="Album" />
              <strong>Wasting Light</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition-colors">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image src="/album.jpeg" width={104} height={104} alt="Album" />
              <strong>Wasting Light</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition-colors">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image src="/album.jpeg" width={104} height={104} alt="Album" />
              <strong>Wasting Light</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition-colors">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image src="/album.jpeg" width={104} height={104} alt="Album" />
              <strong>Wasting Light</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition-colors">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image src="/album.jpeg" width={104} height={104} alt="Album" />
              <strong>Wasting Light</strong>
              <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition-colors">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="text-2xl font-semibold mt-10">
            Made for Belone Dordete Fraga
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 rounded-md p-3 hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/album.jpeg"
                className="w-full"
                width={120}
                height={120}
                alt="Album"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallos, Coin, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded-md p-3 hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/album.jpeg"
                className="w-full"
                width={120}
                height={120}
                alt="Album"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallos, Coin, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded-md p-3 hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/album.jpeg"
                className="w-full"
                width={120}
                height={120}
                alt="Album"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallos, Coin, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded-md p-3 hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/album.jpeg"
                className="w-full"
                width={120}
                height={120}
                alt="Album"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallos, Coin, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded-md p-3 hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/album.jpeg"
                className="w-full"
                width={120}
                height={120}
                alt="Album"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallos, Coin, girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
