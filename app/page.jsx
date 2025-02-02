
import Hero from '../components/home/Hero';
import TeamMembers from '../components/home/TeamMember';
import ImageScroll from './../components/home/imgscroll';
import GifDisplay from './../components/home/thankyou';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <ImageScroll />
      <GifDisplay />
      <TeamMembers />
    </div>
  );
}