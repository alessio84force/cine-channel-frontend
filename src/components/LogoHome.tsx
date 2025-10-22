import Wordmark from "@/components/Wordmark";

export default function LogoHome({ className = "" }: { className?: string }) {
  // Regola qui la dimensione del logo in navbar
  return <div className={className}><Wordmark className="w-[180px] md:w-[220px]" /></div>;
}
