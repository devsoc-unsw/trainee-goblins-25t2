import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="p-4 pt-10 pt-20 text-center text-4xl font-bold md:text-6xl">
        Goblins
      </h1>
      <Image
        src="/goblin.jpg"
        alt="goblins"
        width={400}
        height={400}
        className="w-full"
      />
    </div>
  );
}
