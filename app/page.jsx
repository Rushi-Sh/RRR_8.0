
import Hero from '../components/home/Hero';
import TeamMembers from '../components/home/TeamMember';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <TeamMembers />
    </div>
  );
}