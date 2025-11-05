import Splash from "@/components/splash";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-evenly bg-linear-120 from-gg-red to-gg-yellow">
        <Splash />
      </main>
    </div>
  );
}
