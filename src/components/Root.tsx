import { Outlet, Link } from 'react-router';
import { Navigation } from './Navigation';

export function Root() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <Outlet />
      
      {/* Footer */}
      <footer className="bg-[#09090b] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="mb-6 w-full max-w-[520px] h-32 md:h-40 overflow-hidden flex items-center">
                <img
                  src="/maidenmfrank-footer-logo.png"
                  alt="maidenmfrank"
                  className="h-48 md:h-56 w-auto"
                />
              </div>
              <p className="text-white/60 max-w-md">
                Empowering leaders and transforming organizations through expert coaching, keynote speaking, and proven frameworks.
              </p>
            </div>

            {/* Links */}
            <div>
              <div className="font-semibold mb-4">Services</div>
              <div className="space-y-2">
                <Link to="/speaking" className="block text-white/60 hover:text-white transition-colors">Speaking</Link>
                <Link to="/books" className="block text-white/60 hover:text-white transition-colors">Books</Link>
                <Link to="/coaching" className="block text-white/60 hover:text-white transition-colors">Coaching</Link>
              </div>
            </div>

            <div>
              <div className="font-semibold mb-4">Connect</div>
              <div className="space-y-2">
                <Link to="/" className="block text-white/60 hover:text-white transition-colors">Home</Link>
                <Link to="/about" className="block text-white/60 hover:text-white transition-colors">About Maiden</Link>
                <Link to="/contact" className="block text-white/60 hover:text-white transition-colors">Connect</Link>
                <a href="https://www.linkedin.com/in/MaidenManzanalFrank" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              © 2026 Maiden Manzanal Frank. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}