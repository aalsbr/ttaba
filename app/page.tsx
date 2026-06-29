import { BookingProvider } from './components/booking/BookingContext';
import { BookingModal } from './components/booking/BookingModal';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Statement } from './components/Statement';
import { Clients } from './components/Clients';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Workflow } from './components/Workflow';
import { Roles } from './components/Roles';
import {
  AIShowcase,
  WeeklySchedule,
  ContractAutomation,
  AuditLog,
} from './components/Showcases';
import { Stats } from './components/Stats';
import { Faq } from './components/Faq';
import { TalkDemo } from './components/TalkDemo';
import { Footer } from './components/Footer';
import { RevealInit } from './components/RevealInit';

export default function Home() {
  return (
    <BookingProvider>
      <Nav />
      <Hero />
      <Statement />
      <Clients />
      <ProblemSolution />
      <Features />
      <Workflow />
      <Roles />
      <AIShowcase />
      <WeeklySchedule />
      <ContractAutomation />
      <AuditLog />
      <Stats />
      <Faq />
      <TalkDemo />
      <BookingModal />
      <Footer />
      <RevealInit />
    </BookingProvider>
  );
}
