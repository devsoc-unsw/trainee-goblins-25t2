import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center">Goblins</h1>
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
