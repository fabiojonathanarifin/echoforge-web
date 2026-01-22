import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function StudioLayout({ children }) {
  return (
    <>
      {/* Premium Mesh Background */}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        {/* Ambient base layer */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Anchored Glow Spots - Optimized with smaller base sizes + scale for better perf */}
        {/* Top Left */}
        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[30%] scale-[2] bg-indigo-500/[0.08] dark:bg-indigo-500/[0.15] blur-[80px] rounded-full animate-float-1" />
        
        {/* Top Right */}
        <div className="absolute top-[-5%] right-[-10%] w-[25%] h-[25%] scale-[2.2] bg-violet-500/[0.08] dark:bg-violet-500/[0.15] blur-[90px] rounded-full animate-float-2" />
        
        {/* Middle Left */}
        <div className="absolute top-[30%] left-[-10%] w-[25%] h-[25%] scale-[2] bg-blue-500/[0.06] dark:bg-blue-500/[0.12] blur-[80px] rounded-full animate-float-3" />
        
        {/* Middle Right */}
        <div className="absolute top-[40%] right-[-5%] w-[20%] h-[20%] scale-[2.2] bg-indigo-400/[0.06] dark:bg-indigo-400/[0.12] blur-[70px] rounded-full animate-float-4" />
        
        {/* Bottom Left */}
        <div className="absolute bottom-[-10%] left-[0%] w-[30%] h-[30%] scale-[2] bg-violet-400/[0.05] dark:bg-violet-400/[0.1] blur-[100px] rounded-full animate-float-2" />
        
        {/* Bottom Right */}
        <div className="absolute bottom-[-10%] right-[0%] w-[30%] h-[30%] scale-[2] bg-foreground/[0.03] dark:bg-foreground/[0.08] blur-[110px] rounded-full animate-float-1" />
        
        {/* Center Floating Accent */}
        <div className="absolute top-[25%] left-[25%] w-[15%] h-[15%] scale-[2.5] bg-indigo-300/[0.03] dark:bg-indigo-300/[0.06] blur-[60px] rounded-full animate-float-3" />
        <div className="absolute bottom-[25%] right-[25%] w-[15%] h-[15%] scale-[2.5] bg-blue-300/[0.03] dark:bg-blue-300/[0.06] blur-[60px] rounded-full animate-float-4" />
        
        {/* Sub-pixel grain for texture softness */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] dark:opacity-[0.06] mix-blend-overlay" />
      </div>

      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-semibold text-lg tracking-tight">
            EchoForge
          </Link>
          <nav className="flex items-center space-x-8 text-muted font-medium">
            <Link href="/apps" className="hover:text-foreground transition-colors">Apps</Link>
            <Link href="/legal" className="hover:text-foreground transition-colors">Legal</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-border mt-24 bg-secondary">
        <div className="max-w-5xl mx-auto px-6 py-12 text-sm text-muted">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-4">
              <div className="font-bold text-foreground">EchoForge</div>
              <p className="max-w-xs">A quiet studio for shipping focused software.</p>
            </div>
            <div className="flex gap-12 text-muted">
              <div className="space-y-3 flex flex-col">
                <span className="font-bold text-foreground uppercase text-xs tracking-widest">Studio</span>
                <Link href="/apps" className="hover:text-foreground">Apps</Link>
                <Link href="/legal" className="hover:text-foreground">Legal</Link>
              </div>
              <div className="space-y-3 flex flex-col">
                <span className="font-bold text-foreground uppercase text-xs tracking-widest">Legal</span>
                <Link href="/legal/magda/privacy" className="hover:text-foreground">Magda Privacy</Link>
                <Link href="/legal/kume/privacy" className="hover:text-foreground">Kume Privacy</Link>
                <a href="https://brainechoai.com/privacy" className="hover:text-foreground" target="_blank" rel="noopener noreferrer">Brainecho Privacy</a>
                <a href="https://tinyorange.app/privacy" className="hover:text-foreground" target="_blank" rel="noopener noreferrer">TinyOrange Privacy</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            © {new Date().getFullYear()} EchoForge. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
