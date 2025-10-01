import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, 
  Github, 
  BookOpen, 
  Search,
  Menu,
  X,
  Home,
  FileText,
  Lightbulb,
  MessageCircle,
  Star,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const DocsNavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection] = useState('introduction'); // Default to introduction
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{id: string, title: string, description: string, category: string}>>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      title: 'Documentation',
      icon: BookOpen,
      items: [
        { id: 'introduction', title: 'Introduction', description: 'Get started with MailGrid' },
        { id: 'installation', title: 'Installation', description: 'Download and setup MailGrid' },
        { id: 'quick-start', title: 'Quick Start', description: '5-minute getting started guide' },
      ]
    },
    {
      title: 'Core Concepts',
      icon: Lightbulb,
      items: [
        { id: 'configuration', title: 'Configuration', description: 'SMTP settings and providers' },
        { id: 'templates', title: 'Templates', description: 'Go template engine usage' },
        { id: 'csv-data', title: 'CSV & Data', description: 'Managing recipient data' },
      ]
    },
    {
      title: 'Advanced Features',
      icon: Star,
      items: [
        { id: 'filtering', title: 'Advanced Filtering', description: 'Target specific recipients' },
        { id: 'scheduling', title: 'Scheduling', description: 'Automate email campaigns' },
      ]
    },
    {
      title: 'Reference',
      icon: FileText,
      items: [
        { id: 'cli-reference', title: 'CLI Reference', description: 'Complete command reference' },
        { id: 'flags', title: 'Flags & Options', description: 'All available options' },
        { id: 'troubleshooting', title: 'Troubleshooting', description: 'Common issues and solutions' },
      ]
    }
  ];

  const exampleItems = [
    { id: 'newsletter', title: 'Newsletter Campaign', description: 'Weekly automated newsletters' },
    { id: 'drip-campaign', title: 'Drip Campaigns', description: 'Automated email sequences' },
    { id: 'event-invites', title: 'Event Invitations', description: 'Tiered invitation system' },
  ];

  const getCurrentSectionInfo = () => {
    for (const nav of navigationItems) {
      for (const item of nav.items) {
        if (item.id === activeSection) {
          return { category: nav.title, ...item };
        }
      }
    }
    for (const item of exampleItems) {
      if (item.id === activeSection) {
        return { category: 'Examples', ...item };
      }
    }
    return { category: 'Documentation', title: 'Introduction', description: 'Get started with MailGrid' };
  };

  const currentSection = getCurrentSectionInfo();

  // Create searchable items list
  const searchableItems = [
    ...navigationItems.flatMap(section => 
      section.items.map(item => ({ ...item, category: section.title }))
    ),
    ...exampleItems.map(item => ({ ...item, category: 'Examples' }))
  ];

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const filtered = searchableItems.filter(item => {
      const searchText = query.toLowerCase();
      return (
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.category.toLowerCase().includes(searchText)
      );
    });

    setSearchResults(filtered);
    setShowSearchResults(true);
  };

  const handleSearchItemClick = (itemId: string) => {
    // Navigate to the section via URL hash so the docs page can react
    window.location.hash = `#${itemId}`;
    setShowSearchResults(false);
    setSearchQuery('');
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-dark-background/95 backdrop-blur-sm border-b border-gray-200 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + Breadcrumbs */}
            <div className="flex items-center space-x-4">
              <Link 
                to="/"
                className="flex items-center space-x-2 text-gray-900 dark:text-white font-bold text-lg"
              >
                <Home className="w-5 h-5" />
                <span>blipmq</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <span>/</span>
                <Link 
                  to="/mailgrid" 
                  className="hover:text-gray-700 dark:hover:text-gray-300 transition"
                >
                  MailGrid
                </Link>
                <span>/</span>
                <span className="text-gray-900 dark:text-white font-medium">Documentation</span>
              </div>
            </div>

            {/* Center: Search (Desktop) */}
            <div className="hidden lg:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => searchQuery && setShowSearchResults(true)}
                  onBlur={() => setTimeout(() => setShowSearchResults(false), 150)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
                
                {/* Search Results Dropdown */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full mt-2 w-full bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                    {searchResults.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSearchItemClick(item.id)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-hover border-b border-gray-100 dark:border-gray-800 last:border-b-0 transition-colors"
                      >
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.category}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">{item.description}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center space-x-4">
              <Link
                to="/mailgrid"
                className="hidden md:flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to MailGrid</span>
              </Link>

              <a
                href="https://github.com/bravo1goingdark/mailgrid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition text-sm"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

        </div>

        {/* Mobile Search */}
        <div className="lg:hidden px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-background border-b border-gray-200 dark:border-dark-border"
          >
            <div className="px-4 py-6 space-y-6">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <section.icon className="w-4 h-4" />
                    {section.title}
                  </h3>
                  <div className="space-y-2 ml-6">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          // TODO: Add navigation logic
                          setIsMobileMenuOpen(false);
                        }}
                        className={`block w-full text-left text-sm py-2 rounded-md transition ${
                          activeSection === item.id
                            ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-3'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Examples</h3>
                <div className="space-y-2 ml-6">
                  {exampleItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        // TODO: Add navigation logic
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block w-full text-left text-sm py-2 rounded-md transition ${
                        activeSection === item.id
                          ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-3'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DocsNavBar;