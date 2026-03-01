import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, Home } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navigation, megaMenu, companyInfo } from '@/data/content';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const resourcesTimerRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  // 处理 Resources 下拉菜单的显示/隐藏（带延迟）
  const handleMouseEnter = () => {
    if (resourcesTimerRef.current) {
      clearTimeout(resourcesTimerRef.current);
    }
    setIsResourcesOpen(true);
  };

  const handleMouseLeave = () => {
    resourcesTimerRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 300); // 300ms 延迟，让用户有时间移到下拉框
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span
              className={`text-2xl font-heading font-bold transition-colors duration-300 ${
                isScrolled ? 'text-laysun-green' : 'text-white'
              }`}
            >
              {companyInfo.shortName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Home 按钮 */}
            <Link
              to="/"
              className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-300 relative group ${
                isScrolled
                  ? isActive('/')
                    ? 'text-laysun-green'
                    : 'text-laysun-dark hover:text-laysun-green'
                  : isActive('/')
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-laysun-green' : 'bg-white'
                }`}
              />
            </Link>

            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  isScrolled
                    ? isActive(item.href)
                      ? 'text-laysun-green'
                      : 'text-laysun-dark hover:text-laysun-green'
                    : isActive(item.href)
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-laysun-green' : 'bg-white'
                  }`}
                />
              </Link>
            ))}

            {/* Resources Mega Menu - 修复下拉菜单消失问题 */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-laysun-dark hover:text-laysun-green'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isResourcesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isResourcesOpen && (
                <div 
                  className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-card py-2 animate-fade-in-up"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {megaMenu.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-laysun-dark hover:bg-laysun-gray-light hover:text-laysun-green transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={`px-6 py-2.5 rounded-button font-medium text-sm transition-all duration-300 ${
                isScrolled
                  ? 'bg-laysun-green text-white hover:bg-laysun-green-light'
                  : 'bg-white text-laysun-green hover:bg-white/90'
              }`}
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className={`lg:hidden p-2 transition-colors ${
                  isScrolled ? 'text-laysun-green' : 'text-white'
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-heading font-bold text-laysun-green">
                    {companyInfo.shortName}
                  </span>
                </div>

                <nav className="flex-col space-y-4">
                  {/* Mobile Home */}
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-2 text-lg font-medium py-2 border-b border-gray-100 ${
                      isActive('/')
                        ? 'text-laysun-green'
                        : 'text-laysun-dark hover:text-laysun-green'
                    }`}
                  >
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                  </Link>
                  
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-medium py-2 border-b border-gray-100 ${
                        isActive(item.href)
                          ? 'text-laysun-green'
                          : 'text-laysun-dark hover:text-laysun-green'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <p className="text-sm text-laysun-gray mb-3">Resources</p>
                    {megaMenu.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-laysun-dark hover:text-laysun-green"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </nav>

                <div className="mt-auto pt-8">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center bg-laysun-green text-white py-3 rounded-button font-medium"
                  >
                    Request Consultation
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
