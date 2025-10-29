import Wordmark from "@/components/Wordmark";

export default function LogoHome({ className = "" }: { className?: string }) {
  // Regola qui la dimensione del logo in nav
  return <div className={className}><Wordmark withStars className="w-[420px] h-auto mx-auto whitespace-nowrap" /></div>;
}
