
// import Image from "next/image";

import Player from "./components/Player";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="justify-center items-center flex p-4 font-bold border-b">
      Play the Game
      </div>
      <Player />

    </div>
  );
}
