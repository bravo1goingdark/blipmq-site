import { motion } from 'motion/react';
import React, { useState } from 'react';
import { 
  BookOpen, 
  Rocket, 
  Terminal, 
  Code, 
  Zap, 
  Database, 
  Filter, 
  CalendarClock, 
  FileText,
  Monitor,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Hash,
  ArrowLeft,
  Github
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MailGridDocs = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [copiedCode, setCopiedCode] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'getting-started': true,
    'guides': true,
    'reference': true,
    'examples': true
  });

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  // Sync active section with URL hash (e.g., /mailgrid/docs#templates)
  React.useEffect(() => {
    const hash = window.location.hash?.replace('#', '') || 'introduction';
    if (hash && hash !== activeSection) {
      setActiveSection(hash);
    }
  }, []);

  // Handle hash change navigation
  React.useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash?.replace('#', '') || 'introduction';
      setActiveSection(newHash);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sidebarSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
        { id: 'introduction', title: 'Introduction', icon: BookOpen },
        { id: 'installation', title: 'Installation', icon: Rocket },
        { id: 'quick-start', title: 'Quick Start', icon: Zap },
      ]
    },
    {
      id: 'guides',
      title: 'Guides',
      items: [
        { id: 'configuration', title: 'Configuration', icon: FileText },
        { id: 'templates', title: 'Templates', icon: Code },
        { id: 'csv-data', title: 'CSV Data', icon: Database },
        { id: 'filtering', title: 'Filtering', icon: Filter },
        { id: 'scheduling', title: 'Scheduling', icon: CalendarClock },
      ]
    },
    {
      id: 'reference',
      title: 'API Reference',
      items: [
        { id: 'cli-reference', title: 'CLI Reference', icon: Terminal },
        { id: 'flags', title: 'Flags & Options', icon: Hash },
        { id: 'troubleshooting', title: 'Troubleshooting', icon: Monitor },
      ]
    },
    {
      id: 'examples',
      title: 'Examples',
      items: [
        { id: 'newsletter', title: 'Newsletter Campaign', icon: BookOpen },
        { id: 'drip-campaign', title: 'Drip Campaigns', icon: Zap },
        { id: 'event-invites', title: 'Event Invitations', icon: CalendarClock },
      ]
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return <IntroductionContent />;
      case 'installation':
        return <InstallationContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'quick-start':
        return <QuickStartContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'configuration':
        return <ConfigurationContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'templates':
        return <TemplatesContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'csv-data':
        return <CSVDataContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'filtering':
        return <FilteringContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'scheduling':
        return <SchedulingContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'cli-reference':
        return <CLIReferenceContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'flags':
        return <FlagsContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'troubleshooting':
        return <TroubleshootingContent />;
      case 'newsletter':
        return <NewsletterExampleContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'drip-campaign':
        return <DripCampaignContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'event-invites':
        return <EventInvitesContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      default:
        return <IntroductionContent />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-background">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24">
              <nav className="space-y-2">
                {sidebarSections.map((section) => (
                  <div key={section.id} className="space-y-1">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-900 dark:text-dark-foreground hover:bg-gray-100 dark:hover:bg-dark-hover rounded-lg transition"
                    >
                      <span>{section.title}</span>
                      {expandedSections[section.id] ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    {expandedSections[section.id] && (
                      <div className="space-y-1 ml-3">
                        {section.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.id}
                              data-section={item.id}
                              onClick={() => {
                                setActiveSection(item.id);
                                window.location.hash = `#${item.id}`;
                              }}
                              className={`flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg transition ${
                                activeSection === item.id
                                  ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-r-2 border-indigo-600'
                                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-hover'
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                              {item.title}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="prose prose-lg max-w-none dark:prose-invert"
            >
              {renderContent()}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

// Content Components
const IntroductionContent = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Welcome to MailGrid</h1>
    
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 border border-indigo-200 dark:border-indigo-800/30 rounded-xl p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
          <Zap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-2">
            The Ultimate Email Marketing CLI Tool
          </h2>
          <p className="text-gray-600 dark:text-dark-muted text-base leading-relaxed">
            MailGrid empowers developers and marketers with a powerful, cost-effective email delivery solution. 
            Say goodbye to per-email charges and monthly subscriptions – MailGrid offers unlimited email sending 
            with a one-time purchase, giving you complete control over your email campaigns.
          </p>
        </div>
      </div>
    </div>
    
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">What is MailGrid?</h2>
      <p className="text-gray-600 dark:text-dark-muted text-base leading-relaxed mb-6">
        MailGrid is a high-performance command-line email orchestration tool built with Go. It's designed to simplify 
        bulk email sending while providing enterprise-grade features like templating, filtering, scheduling, and 
        concurrent delivery. Whether you're sending newsletters to thousands of subscribers or setting up automated 
        drip campaigns, MailGrid handles it all efficiently and reliably.
      </p>
      
      <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-4 mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <BookOpen className="h-5 w-5 text-blue-500 mt-0.5" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Perfect for Developers & Marketers
            </h3>
            <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
              <p>MailGrid bridges the gap between technical flexibility and marketing needs. Developers love the CLI-first approach and powerful templating, while marketers appreciate the intuitive workflow and cost savings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-600" />
          Key Features
        </h3>
        <ul className="space-y-2 text-gray-600 dark:text-dark-muted">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            CSV & Google Sheets integration
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Go template engine for dynamic content
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Concurrent SMTP delivery with retry logic
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Advanced filtering and targeting
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Cron-based scheduling
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Preview mode and dry-run testing
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
          <Rocket className="w-5 h-5 text-green-600" />
          Use Cases
        </h3>
        <ul className="space-y-2 text-gray-600 dark:text-dark-muted">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            Newsletter campaigns
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            Marketing automation
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            Transactional emails
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            Drip campaigns
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            Event notifications
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            A/B testing campaigns
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-6">Why Choose MailGrid?</h3>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
            <span className="text-green-600 dark:text-green-400 font-bold text-lg">$</span>
          </div>
          <div>
            <strong className="text-lg text-gray-900 dark:text-dark-foreground">No Monthly Fees or Per-Email Charges</strong>
            <p className="text-gray-600 dark:text-dark-muted mt-2 leading-relaxed">
              Unlike traditional email service providers that charge monthly fees plus per-email costs, MailGrid offers a 
              revolutionary one-time purchase model. Send 100 emails or 100,000 emails – the cost remains the same. 
              This makes it perfect for high-volume senders who want predictable costs without surprises.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <strong className="text-lg text-gray-900 dark:text-dark-foreground">Enterprise-Grade Performance</strong>
            <p className="text-gray-600 dark:text-dark-muted mt-2 leading-relaxed">
              Built with Go, MailGrid delivers exceptional performance with concurrent SMTP connections, intelligent 
              retry logic, and efficient resource management. Handle thousands of emails per minute while maintaining 
              deliverability and system stability. Perfect for both small campaigns and enterprise-scale operations.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <strong className="text-lg text-gray-900 dark:text-dark-foreground">Developer-First Experience</strong>
            <p className="text-gray-600 dark:text-dark-muted mt-2 leading-relaxed">
              MailGrid is designed by developers, for developers. Enjoy a powerful CLI interface, extensive configuration 
              options, and seamless integration with your existing workflows. Use Go's template engine for dynamic content, 
              integrate with CI/CD pipelines, and automate everything with cron scheduling.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
            <Database className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </div>
          <div>
            <strong className="text-lg text-gray-900 dark:text-dark-foreground">Complete Ownership & Control</strong>
            <p className="text-gray-600 dark:text-dark-muted mt-2 leading-relaxed">
              Your data stays with you. Use any SMTP provider you prefer – AWS SES, SendGrid, Mailgun, or your own 
              mail server. No vendor lock-in, no data sharing concerns, and complete control over your email 
              infrastructure. Switch providers anytime without changing your MailGrid setup.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
            <Filter className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <strong className="text-lg text-gray-900 dark:text-dark-foreground">Advanced Targeting & Personalization</strong>
            <p className="text-gray-600 dark:text-dark-muted mt-2 leading-relaxed">
              Create sophisticated email campaigns with powerful filtering, custom field templating, and conditional 
              content. Segment your audience based on any criteria, personalize every email with recipient data, 
              and preview campaigns before sending to ensure perfect delivery.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 border border-green-200 dark:border-green-800/30 rounded-lg">
        <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
          <span className="text-green-600 dark:text-green-400">Ready to get started?</span> 
          MailGrid can be up and running in under 5 minutes. No sign-ups, no credit cards, just download and go.
        </p>
      </div>
    </div>
  </div>
);

const InstallationContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Installation Guide</h1>
    
    {/* GitHub Releases Call-to-Action */}
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 border border-indigo-200 dark:border-indigo-800/30 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
            <Github className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-200 mb-2">
              🚀 Download MailGrid v1.0.0
            </h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-base leading-relaxed mb-4">
              Get the latest production-ready release with pre-built binaries for all platforms. 
              Includes checksums, release notes, and installation guides.
            </p>
            <div className="flex items-center gap-4 text-sm text-indigo-600 dark:text-indigo-400">
              <span>✅ Windows, Linux, macOS, FreeBSD</span>
              <span>✅ SHA256 Checksums</span>
              <span>✅ Zero Dependencies</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="https://github.com/bravo1goingdark/mailgrid/releases/tag/v1.0.0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="w-5 h-5" />
            Download v1.0.0
          </a>
          <a
            href="https://github.com/bravo1goingdark/mailgrid/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"
          >
            All Releases
          </a>
        </div>
      </div>
    </div>
    
    <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-6 mb-8">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
          <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
            Zero Dependencies Installation
          </h3>
          <p className="text-green-700 dark:text-green-300 text-base leading-relaxed">
            MailGrid is distributed as a single, self-contained binary with no external dependencies. 
            No package managers, no runtime requirements – just download and run. Perfect for 
            servers, CI/CD pipelines, and local development.
          </p>
        </div>
      </div>
    </div>
    
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">System Requirements</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">Minimum Requirements</h4>
              <ul className="text-sm text-gray-600 dark:text-dark-muted space-y-1">
                <li>• 64-bit processor</li>
                <li>• 50MB disk space</li>
                <li>• Network connectivity</li>
                <li>• SMTP server access</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">Recommended</h4>
              <ul className="text-sm text-gray-600 dark:text-dark-muted space-y-1">
                <li>• 512MB RAM</li>
                <li>• SSD storage</li>
                <li>• Stable internet</li>
                <li>• Modern terminal</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">Supported Platforms</h4>
              <ul className="text-sm text-gray-600 dark:text-dark-muted space-y-1">
                <li>• Linux (x86_64)</li>
                <li>• macOS (Intel & Apple Silicon)</li>
                <li>• Windows (x86_64)</li>
                <li>• FreeBSD, OpenBSD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Alternative Installation Methods</h2>
        
        <div className="grid md:grid-cols-1 gap-4 mb-6">
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-dark-foreground mb-4">Windows Package Managers</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">🚀 Quick Install (Recommended)</h4>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
                  <button
                    onClick={() => copyToClipboard('iwr -useb https://raw.githubusercontent.com/bravo1goingdark/mailgrid/main/install.ps1 | iex', 'windows-quick')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'windows-quick' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                  <pre className="text-green-400 text-xs">
{`# PowerShell (Quick installer with auto PATH setup)
iwr -useb https://raw.githubusercontent.com/bravo1goingdark/mailgrid/main/install.ps1 | iex`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">📦 Package Managers</h4>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
                    <button
                      onClick={() => copyToClipboard('winget install MailGrid.MailGrid', 'winget')}
                      className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === 'winget' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </button>
                    <pre className="text-green-400 text-xs">
{`# Winget
winget install MailGrid.MailGrid`}
                    </pre>
                  </div>
                  <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
                    <button
                      onClick={() => copyToClipboard('choco install mailgrid', 'choco')}
                      className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === 'choco' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </button>
                    <pre className="text-green-400 text-xs">
{`# Chocolatey
choco install mailgrid`}
                    </pre>
                  </div>
                  <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
                    <button
                      onClick={() => copyToClipboard('scoop bucket add mailgrid https://github.com/bravo1goingdark/scoop-mailgrid\nscoop install mailgrid', 'scoop')}
                      className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === 'scoop' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </button>
                    <pre className="text-green-400 text-xs">
{`# Scoop
scoop bucket add mailgrid https://github.com/bravo1goingdark/scoop-mailgrid
scoop install mailgrid`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Verify Installation</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-6 text-base leading-relaxed">
          After downloading the binary, let's verify everything is working correctly and explore the available commands.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">1. Check Version</h3>
            <p className="text-gray-600 dark:text-dark-muted mb-3">Verify MailGrid is properly installed and see the current version:</p>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('./mailgrid --version', 'version')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'version' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`./mailgrid --version`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">2. View Help</h3>
            <p className="text-gray-600 dark:text-dark-muted mb-3">Get familiar with all available commands and options:</p>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('./mailgrid --help', 'help')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'help' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`./mailgrid --help`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">3. Test Connection (Optional)</h3>
            <p className="text-gray-600 dark:text-dark-muted mb-3">If you have SMTP credentials ready, test the connection:</p>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('./mailgrid --config config.json --test-connection', 'test')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'test' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`./mailgrid --config config.json --test-connection`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/30 rounded-lg">
          <div className="flex items-start gap-3">
            <Terminal className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Add to System PATH (Optional)</h4>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-3">
                For global access from any terminal, add MailGrid to your system PATH:
              </p>
              
              <div className="space-y-3">
                {/* Windows */}
                <div>
                  <h5 className="text-xs font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Windows (PowerShell)</h5>
                  <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded p-2 text-xs font-mono text-yellow-800 dark:text-yellow-200">
                    # Add to user PATH (permanent)<br/>
                    {'$userPath = [Environment]::GetEnvironmentVariable("PATH", "User")'}<br/>
                    {'[Environment]::SetEnvironmentVariable("PATH", "$userPath;C:\\path\\to\\mailgrid", "User")'}<br/><br/>
                    # Or use our installer with PATH integration<br/>
                    .\install-enhanced.ps1 -AddToPath
                  </div>
                </div>
                
                {/* Linux/macOS */}
                <div>
                  <h5 className="text-xs font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Linux/macOS</h5>
                  <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded p-2 text-xs font-mono text-yellow-800 dark:text-yellow-200">
                    sudo mv mailgrid /usr/local/bin/  # System-wide<br/>
                    # Or add to ~/.bashrc or ~/.zshrc:<br/>
                    export PATH="$PATH:/path/to/mailgrid"
                  </div>
                </div>
                
                {/* Verification */}
                <div>
                  <h5 className="text-xs font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Verify Installation</h5>
                  <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded p-2 text-xs font-mono text-yellow-800 dark:text-yellow-200">
                    mailgrid --version  # Should work from any directory<br/>
                    mailgrid --help     # View all available commands
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6">
        <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
          <Rocket className="w-5 h-5" />
          Next Steps
        </h3>
        <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
          Now that MailGrid is installed, you're ready to send your first email campaign!
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => document.querySelector('[data-section="quick-start"]')?.click()}
            className="text-sm font-medium text-blue-800 dark:text-blue-200 hover:underline"
          >
            Continue to Quick Start →
          </button>
        </div>
      </div>
    </div>
  </div>
);

const QuickStartContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Quick Start</h1>
    
    <p className="text-lg text-gray-600 dark:text-dark-muted mb-8">
      Get MailGrid up and running in less than 5 minutes with this step-by-step guide.
    </p>

    <div className="space-y-8">
      {/* Step 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
          1
        </div>
        <div className="ml-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Create Configuration File</h2>
          <p className="text-gray-600 dark:text-dark-muted mb-4">
            First, create a JSON file with your SMTP settings. This tells MailGrid how to send emails.
          </p>
          
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">config.json</span>
              <button
                onClick={() => copyToClipboard(`{\n  "smtp_host": "smtp.gmail.com",\n  "smtp_port": 587,\n  "smtp_user": "your-email@gmail.com",\n  "smtp_pass": "your-app-password",\n  "from_email": "your-email@gmail.com",\n  "from_name": "Your Name"\n}`, 'config')}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {copiedCode === 'config' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
              <pre className="text-green-400 text-sm">
{`{
  "smtp_host": "smtp.gmail.com",
  "smtp_port": 587,
  "smtp_user": "your-email@gmail.com",
  "smtp_pass": "your-app-password",
  "from_email": "your-email@gmail.com",
  "from_name": "Your Name"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="relative">
        <div className="absolute left-0 top-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
          2
        </div>
        <div className="ml-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Prepare Your Recipients</h2>
          <p className="text-gray-600 dark:text-dark-muted mb-4">
            Create a CSV file with your recipients' information. The first row should contain column headers.
          </p>
          
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">recipients.csv</span>
              <button
                onClick={() => copyToClipboard('name,email,company\nJohn Doe,john@example.com,Acme Corp\nJane Smith,jane@company.com,Tech Inc', 'csv')}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {copiedCode === 'csv' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
              <pre className="text-green-400 text-sm">
{`name,email,company
John Doe,john@example.com,Acme Corp
Jane Smith,jane@company.com,Tech Inc`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="relative">
        <div className="absolute left-0 top-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
          3
        </div>
        <div className="ml-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Create Email Template</h2>
          <p className="text-gray-600 dark:text-dark-muted mb-4">
            Design your email template using HTML and Go template syntax for personalization.
          </p>
          
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">email.html</span>
              <button
                onClick={() => copyToClipboard(`<h1>Hello {'{{.name}}'}!</h1>\n<p>We're excited to introduce you to our latest product.</p>\n<p>Best regards,<br>The {'{{.company}}'} Team</p>`, 'template')}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {copiedCode === 'template' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
              <pre className="text-green-400 text-sm">
{`<h1>Hello {{.name}}!</h1>
<p>We're excited to introduce you to our latest product.</p>
<p>Best regards,<br>The {{.company}} Team</p>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Step 4 */}
      <div className="relative">
        <div className="absolute left-0 top-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
          4
        </div>
        <div className="ml-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Send Your First Campaign</h2>
          <p className="text-gray-600 dark:text-dark-muted mb-4">
            Now run MailGrid with your configuration, recipients, and template to send your first campaign.
          </p>
          
          <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
            <button
              onClick={() => copyToClipboard('./mailgrid --env config.json --csv recipients.csv --template email.html --subject "Welcome to our newsletter!"', 'send')}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
            >
              {copiedCode === 'send' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre className="text-green-400 text-sm">
{`./mailgrid --env config.json --csv recipients.csv --template email.html --subject "Welcome to our newsletter!"`}
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-12 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-6">
      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
        <Check className="w-5 h-5" />
        Congratulations!
      </h3>
      <p className="text-green-700 dark:text-green-300 text-sm mb-4">
        You've successfully sent your first email campaign with MailGrid! Your recipients should receive personalized emails shortly.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => document.querySelector('[data-section="configuration"]')?.click()}
          className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline"
        >
          Learn about Configuration →
        </button>
      </div>
    </div>
  </div>
);

const ConfigurationContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Configuration</h1>
    
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">SMTP Configuration</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          MailGrid requires an SMTP configuration file in JSON format to send emails. This file contains your email provider's settings.
        </p>
        
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">config.json</span>
            <button
              onClick={() => copyToClipboard('{\n  "host": "smtp.zoho.com",\n  "port": 587,\n  "username": "you@example.com",\n  "password": "your_smtp_password",\n  "from": "you@example.com"\n}', 'smtp-config')}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {copiedCode === 'smtp-config' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
            <pre className="text-green-400 text-sm">
{`{
  "host": "smtp.zoho.com",
  "port": 587,
  "username": "you@example.com",
  "password": "your_smtp_password",
  "from": "you@example.com"
}`}
            </pre>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Common SMTP Providers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">Gmail</h3>
            <div className="text-sm text-gray-600 dark:text-dark-muted space-y-1">
              <p><strong>Host:</strong> smtp.gmail.com</p>
              <p><strong>Port:</strong> 587</p>
              <p><strong>Security:</strong> Use App Password, not regular password</p>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">Zoho Mail</h3>
            <div className="text-sm text-gray-600 dark:text-dark-muted space-y-1">
              <p><strong>Host:</strong> smtp.zoho.com</p>
              <p><strong>Port:</strong> 587</p>
              <p><strong>Security:</strong> SSL/TLS</p>
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800/30 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">Outlook/Hotmail</h3>
            <div className="text-sm text-gray-600 dark:text-dark-muted space-y-1">
              <p><strong>Host:</strong> smtp-mail.outlook.com</p>
              <p><strong>Port:</strong> 587</p>
              <p><strong>Security:</strong> STARTTLS</p>
            </div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">SendGrid</h3>
            <div className="text-sm text-gray-600 dark:text-dark-muted space-y-1">
              <p><strong>Host:</strong> smtp.sendgrid.net</p>
              <p><strong>Port:</strong> 587</p>
              <p><strong>Username:</strong> apikey</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/30 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">📧 Email Security Tips</h3>
        <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
          <li>• Use App Passwords instead of regular passwords for Gmail</li>
          <li>• Enable 2FA on your email provider for better security</li>
          <li>• Store SMTP credentials in environment variables in production</li>
          <li>• Test with a small batch before sending large campaigns</li>
        </ul>
      </div>
    </div>
  </div>
);

const TemplatesContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Templates</h1>
    
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Go Template Syntax</h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">📋 Template Data Context</h3>
          <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
            Based on MailGrid's codebase, in HTML templates you have access to:
          </p>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li><code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">{'{{ .Email }}'}</code> - the recipient's email address</li>
            <li><code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">{'{{ .Data.column_name }}'}</code> - any field from your CSV (e.g., <code>{'{{ .Data.name }}'}</code>, <code>{'{{ .Data.company }}'}</code>)</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">✉️ Subject Line Templates</h3>
          <p className="text-green-700 dark:text-green-300 text-sm">
            In subject lines (via <code>--subject</code>), CSV fields are accessed directly: <code>{'{{ .name }}'}</code>, <code>{'{{ .company }}'}</code>, etc.
          </p>
        </div>
        
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Basic Template Syntax</span>
          </div>
          <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
            <pre className="text-green-400 text-sm">
{`<!-- Access CSV columns via .Data -->
Hello {{ .Data.name }}!
Your email: {{ .Email }}

<!-- Conditional content using .Data fields -->
{{ if .Data.premium }}
  🎉 Welcome to Premium!
{{ else }}
  Upgrade to Premium today!
{{ end }}

<!-- Built-in functions -->
{{ if gt .Data.score 80 }}
  🎆 High Score: {{ .Data.score }}!
{{ end }}`}
            </pre>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Example Templates</h2>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">welcome.html</span>
              <button
                onClick={() => copyToClipboard('<!DOCTYPE html>\n<html>\n<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">\n  <h1>Welcome {{ .name }}! 👋</h1>\n  \n  <p>Thank you for joining {{ .company }}. We\'re excited to have you onboard!</p>\n  \n  {{ if .trial_days }}\n  <div style="background: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0;">\n    <p><strong>🎁 Special Offer:</strong> You have {{ .trial_days }} days of free trial!</p>\n  </div>\n  {{ end }}\n  \n  <p>Best regards,<br>The {{ .company }} Team</p>\n</body>\n</html>', 'welcome-template')}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {copiedCode === 'welcome-template' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
              <pre className="text-green-400 text-xs">
{`<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h1>Welcome {{.Data.name}}! 👋</h1>
  
  <p>Thank you for joining {{.Data.company}}. We're excited to have you onboard!</p>
  <p>We'll send updates to: {{.Email}}</p>
  
  {{ if .Data.trial_days }}
  <div style="background: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <p><strong>🎁 Special Offer:</strong> You have {{.Data.trial_days}} days of free trial!</p>
  </div>
  {{ end }}
  
  <p>Best regards,<br>The {{.Data.company}} Team</p>
</body>
</html>`}
              </pre>
            </div>
          </div>
          
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">newsletter.html</span>
              <button
                onClick={() => copyToClipboard('<!DOCTYPE html>\n<html>\n<body>\n  <h1>📰 {{ .newsletter_title }}</h1>\n  \n  <p>Hi {{ .name }},</p>\n  \n  <p>Here\'s what\'s new this week:</p>\n  \n  <div style="background: #f5f5f5; padding: 20px; margin: 20px 0;">\n    <h2>🚀 Featured Article</h2>\n    <h3>{{ .featured_title }}</h3>\n    <p>{{ .featured_excerpt }}</p>\n    <a href="{{ .featured_link }}" style="color: #0066cc;">Read More →</a>\n  </div>\n  \n  <p>Stay tuned for more updates!</p>\n</body>\n</html>', 'newsletter-template')}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {copiedCode === 'newsletter-template' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
              <pre className="text-green-400 text-xs">
{`<!DOCTYPE html>
<html>
<body>
  <h1>📰 {{.Data.newsletter_title}}</h1>
  
  <p>Hi {{.Data.name}},</p>
  
  <p>Here's what's new this week:</p>
  
  <div style="background: #f5f5f5; padding: 20px; margin: 20px 0;">
    <h2>🚀 Featured Article</h2>
    <h3>{{.Data.featured_title}}</h3>
    <p>{{.Data.featured_excerpt}}</p>
    <a href="{{.Data.featured_link}}" style="color: #0066cc;">Read More →</a>
  </div>
  
  <p>Stay tuned for more updates!</p>
  <p><small>Sent to: {{.Email}}</small></p>
</body>
</html>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6">
        <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Template Tips</h3>
        <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
          <li>• Use descriptive CSV column headers - access them as <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">{'{{ .Data.column_name }}'}</code></li>
          <li>• The recipient email is always available as <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">{'{{ .Email }}'}</code></li>
          <li>• Test templates with <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">--preview</code> mode before sending</li>
          <li>• Use Go template functions like <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">{'{{ if .Data.field }}'}</code>, <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">{'{{ range }}'}</code></li>
          <li>• Keep templates mobile-friendly with responsive design</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Advanced Template Features</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800/30 rounded-lg p-4">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🎨 Template Functions</h3>
            <div className="text-purple-700 dark:text-purple-300 text-sm space-y-2">
              <p><code className="bg-purple-200 dark:bg-purple-800 px-1 rounded">{'{{ if .Data.field }}'}</code> - Conditional content</p>
              <p><code className="bg-purple-200 dark:bg-purple-800 px-1 rounded">{'{{ range .Data.items }}'}</code> - Loop through arrays</p>
              <p><code className="bg-purple-200 dark:bg-purple-800 px-1 rounded">{'{{ gt .Data.score 80 }}'}</code> - Numeric comparisons</p>
              <p><code className="bg-purple-200 dark:bg-purple-800 px-1 rounded">{'{{ upper .Data.name }}'}</code> - String functions</p>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">📄 Template Caching</h3>
            <div className="text-green-700 dark:text-green-300 text-sm space-y-2">
              <p>Templates are automatically cached using SHA256 hashing</p>
              <p>Cache supports TTL expiration and LRU eviction</p>
              <p>Perfect for high-volume campaigns with repeated sends</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 dark:text-dark-foreground mb-3">Complete Template Example</h3>
          <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
            <pre className="text-green-400 text-xs">
{`<!DOCTYPE html>
<html>
<body>
  <h1>{{ if .Data.vip }}VIP {{ end }}Welcome {{ .Data.name }}!</h1>
  <p>Email: {{ .Email }}</p>
  
  {{ if gt .Data.score 90 }}
    <div class="high-score">🏆 Excellent score: {{ .Data.score }}!</div>
  {{ else if gt .Data.score 70 }}
    <div class="good-score">👍 Good score: {{ .Data.score }}</div>
  {{ else }}
    <div class="improve">Let's improve that {{ .Data.score }} score!</div>
  {{ end }}
  
  {{ if .Data.items }}
  <h3>Your Items:</h3>
  <ul>
    {{ range .Data.items }}
    <li>{{ .name }} - \${{ .price }}</li>
    {{ end }}
  </ul>
  {{ end }}
  
  <p>{{ .Data.company }} Team</p>
</body>
</html>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CSVDataContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">CSV Data & Google Sheets</h1>
    
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">CSV File Format</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          MailGrid reads recipient data from CSV files. The only required column is <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">email</code> (case-insensitive). All other columns can be used as template variables.
        </p>
        
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">contacts.csv</span>
            <button
              onClick={() => copyToClipboard('name,email,company,tier,trial_days,subscribed\nJohn Doe,john@example.com,Acme Corp,premium,30,true\nJane Smith,jane@techcorp.com,Tech Corp,basic,,false\nDr. Alice Johnson,alice@university.edu,University,vip,90,true', 'csv-example')}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {copiedCode === 'csv-example' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
            <pre className="text-green-400 text-sm">
{`name,email,company,tier,trial_days,subscribed
John Doe,john@example.com,Acme Corp,premium,30,true
Jane Smith,jane@techcorp.com,Tech Corp,basic,,false
Dr. Alice Johnson,alice@university.edu,University,vip,90,true`}
            </pre>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Google Sheets Integration</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          You can use public Google Sheets instead of local CSV files. This is useful for dynamic recipient lists that multiple team members can update.
        </p>
        
        <div className="space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/30 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Requirements</h3>
            <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
              <li>• Sheet must be set to "Anyone with the link can view"</li>
              <li>• Must contain an <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">email</code> column</li>
              <li>• URL format: <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">https://docs.google.com/spreadsheets/d/ID/edit</code></li>
            </ul>
          </div>
          
          <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
            <button
              onClick={() => copyToClipboard('mailgrid --env config.json \\\n  --sheet-url "https://docs.google.com/spreadsheets/d/1EUh5VWlSNtrlEIJ6SjJAQ9kYAcf4XrlsIIwXtYjImKc/edit?gid=1980978683#gid=1980978683" \\\n  --template welcome.html \\\n  --subject "Welcome {{.name}}" \\\n  --concurrency 5', 'sheets-example')}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
            >
              {copiedCode === 'sheets-example' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre className="text-green-400 text-sm">
{`mailgrid --env config.json \\
  --sheet-url "https://docs.google.com/spreadsheets/d/1EUh5VWlSNtrlEIJ6SjJAQ9kYAcf4XrlsIIwXtYjImKc/edit?gid=1980978683#gid=1980978683" \\
  --template welcome.html \\
  --subject "Welcome {{.name}}" \\
  --concurrency 5`}
            </pre>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Data Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">✅ Do</h3>
              <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                <li>• Use descriptive column headers</li>
                <li>• Validate email addresses before importing</li>
                <li>• Keep data clean and consistent</li>
                <li>• Include fallback values for optional fields</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">❌ Don't</h3>
              <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                <li>• Use spaces or special characters in headers</li>
                <li>• Include duplicate email addresses</li>
                <li>• Leave email column empty</li>
                <li>• Use non-standard date formats</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FilteringContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Advanced Filtering</h1>
    
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Filter Syntax</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          MailGrid supports powerful logical expressions for targeting specific recipients. Use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">--filter</code> flag with SQL-like syntax.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Operator</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Description</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Example</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-dark-muted">
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">=, ==</td>
                <td className="py-3 px-4">Field equals value</td>
                <td className="py-3 px-4 font-mono text-xs">company = "Gadgetry"</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">!=</td>
                <td className="py-3 px-4">Field not equal to value</td>
                <td className="py-3 px-4 font-mono text-xs">tier != "basic"</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">contains</td>
                <td className="py-3 px-4">Field contains substring</td>
                <td className="py-3 px-4 font-mono text-xs">name contains "ash"</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">startswith</td>
                <td className="py-3 px-4">Field starts with substring</td>
                <td className="py-3 px-4 font-mono text-xs">email startswith "admin"</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">endswith</td>
                <td className="py-3 px-4">Field ends with substring</td>
                <td className="py-3 px-4 font-mono text-xs">email endswith "@gmail.com"</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">&gt;, &gt;=</td>
                <td className="py-3 px-4">Greater than (numeric)</td>
                <td className="py-3 px-4 font-mono text-xs">score &gt; 80</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">&lt;, &lt;=</td>
                <td className="py-3 px-4">Less than (numeric)</td>
                <td className="py-3 px-4 font-mono text-xs">age &lt;= 30</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">and, &&</td>
                <td className="py-3 px-4">Logical AND</td>
                <td className="py-3 px-4 font-mono text-xs">tier = "pro" and age &gt; 25</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">or, ||</td>
                <td className="py-3 px-4">Logical OR</td>
                <td className="py-3 px-4 font-mono text-xs">tier = "vip" or tier = "premium"</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono">()</td>
                <td className="py-3 px-4">Group expressions</td>
                <td className="py-3 px-4 font-mono text-xs">(score &gt; 50 and tier = "pro") or vip = true</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Filter Examples</h2>
        
        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">Basic</span>
              Simple Filtering
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 dark:text-dark-muted mb-2">Send only to premium users:</p>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
                  <button
                    onClick={() => copyToClipboard('--filter \'tier = "premium"\' ', 'filter-basic-1')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'filter-basic-1' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                  <pre className="text-green-400 text-sm">--filter 'tier = "premium"'</pre>
                </div>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-dark-muted mb-2">Exclude Gmail users:</p>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
                  <button
                    onClick={() => copyToClipboard('--filter \'not email endswith "@gmail.com"\' ', 'filter-basic-2')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'filter-basic-2' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                  <pre className="text-green-400 text-sm">--filter 'not email endswith "@gmail.com"'</pre>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">Advanced</span>
              Complex Filtering
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 dark:text-dark-muted mb-2">Target high-value customers:</p>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
                  <button
                    onClick={() => copyToClipboard('--filter \'(tier = "premium" or tier = "vip") and purchase_count > 5\' ', 'filter-advanced-1')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'filter-advanced-1' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                  <pre className="text-green-400 text-sm">--filter '(tier = "premium" or tier = "vip") and purchase_count &gt; 5'</pre>
                </div>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-dark-muted mb-2">Regional campaign with exclusions:</p>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
                  <button
                    onClick={() => copyToClipboard('--filter \'region = "US" and subscribed = "true" and not email contains "test"\' ', 'filter-advanced-2')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'filter-advanced-2' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                  <pre className="text-green-400 text-sm">--filter 'region = "US" and subscribed = "true" and not email contains "test"'</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/30 rounded-lg p-6">
        <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">💡 Filtering Best Practices</h3>
        <ul className="text-indigo-700 dark:text-indigo-300 text-sm space-y-1">
          <li>• Always test filters with <code className="bg-indigo-200 dark:bg-indigo-800 px-1 rounded">--dry-run</code> first</li>
          <li>• Use parentheses to group complex conditions clearly</li>
          <li>• Filters are case-insensitive for string comparisons</li>
          <li>• Empty fields can be checked with <code className="bg-indigo-200 dark:bg-indigo-800 px-1 rounded">field != ..</code></li>
        </ul>
      </div>
    </div>
  </div>
);

const SchedulingContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Scheduling & Automation</h1>
    
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Schedule Types</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3 flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-blue-600" />
              One-Time
            </h3>
            <p className="text-gray-600 dark:text-dark-muted text-sm mb-3">Schedule emails for a specific date and time</p>
            <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">--schedule-at</code>
          </div>
          
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-600" />
              Interval
            </h3>
            <p className="text-gray-600 dark:text-dark-muted text-sm mb-3">Repeat emails every N minutes/hours/days</p>
            <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">--interval</code>
          </div>
          
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-purple-600" />
              Cron
            </h3>
            <p className="text-gray-600 dark:text-dark-muted text-sm mb-3">Advanced scheduling with cron expressions</p>
            <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">--cron</code>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Scheduling Examples</h2>
        
        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4">One-Time Scheduling</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 dark:text-dark-muted mb-2">Send welcome email tomorrow at 9 AM:</p>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
                  <button
                    onClick={() => copyToClipboard('mailgrid --env config.json \\\n  --csv new_signups.csv \\\n  --template welcome.html \\\n  --subject "Welcome to our platform!" \\\n  --schedule-at "2025-01-15T09:00:00Z"', 'schedule-onetime')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'schedule-onetime' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                  <pre className="text-green-400 text-sm">
{`mailgrid --env config.json \\
  --csv new_signups.csv \\
  --template welcome.html \\
  --subject "Welcome to our platform!" \\
  --schedule-at "2025-01-15T09:00:00Z"`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4">Interval Scheduling</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 dark:text-dark-muted mb-2">Send status updates every 6 hours:</p>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
                  <button
                    onClick={() => copyToClipboard('mailgrid --env config.json \\\n  --to "team@company.com" \\\n  --template status_update.html \\\n  --subject "System Status Update" \\\n  --interval "6h"', 'schedule-interval')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'schedule-interval' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                  <pre className="text-green-400 text-sm">
{`mailgrid --env config.json \\
  --to "team@company.com" \\
  --template status_update.html \\
  --subject "System Status Update" \\
  --interval "6h"`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4">Cron Scheduling</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 dark:text-dark-muted mb-2">Weekly newsletter every Monday at 9 AM:</p>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
                  <button
                    onClick={() => copyToClipboard('mailgrid --env config.json \\\n  --csv subscribers.csv \\\n  --template newsletter.html \\\n  --subject "Weekly Newsletter - Week {{.week}}" \\\n  --cron "0 9 * * 1"', 'schedule-cron')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'schedule-cron' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                  <pre className="text-green-400 text-sm">
{`mailgrid --env config.json \\
  --csv subscribers.csv \\
  --template newsletter.html \\
  --subject "Weekly Newsletter - Week {{.week}}" \\
  --cron "0 9 * * 1"`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-4 mt-4">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Common Cron Patterns</h4>
                <div className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <div><code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">0 9 * * *</code> - Daily at 9:00 AM</div>
                  <div><code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">30 8 * * 1-5</code> - Weekdays at 8:30 AM</div>
                  <div><code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">0 0 1 * *</code> - Monthly on 1st at midnight</div>
                  <div><code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">0 */4 * * *</code> - Every 4 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Job Management</h2>
        <div className="space-y-4">
          <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 space-y-3">
            <div>
              <p className="text-gray-300 mb-2">List all scheduled jobs:</p>
              <div className="relative group">
                <button
                  onClick={() => copyToClipboard('mailgrid --jobs-list --env config.json', 'jobs-list')}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'jobs-list' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
                <pre className="text-green-400 text-sm">mailgrid --jobs-list --env config.json</pre>
              </div>
            </div>
            
            <div>
              <p className="text-gray-300 mb-2">Cancel a specific job:</p>
              <div className="relative group">
                <button
                  onClick={() => copyToClipboard('mailgrid --jobs-cancel "job-id-123" --env config.json', 'jobs-cancel')}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'jobs-cancel' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
                <pre className="text-green-400 text-sm">mailgrid --jobs-cancel "job-id-123" --env config.json</pre>
              </div>
            </div>
            
            <div>
              <p className="text-gray-300 mb-2">Run scheduler daemon:</p>
              <div className="relative group">
                <button
                  onClick={() => copyToClipboard('mailgrid --scheduler-run --env config.json', 'scheduler-run')}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'scheduler-run' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
                <pre className="text-green-400 text-sm">mailgrid --scheduler-run --env config.json</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CLIReferenceContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">CLI Reference</h1>
    
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Core Flags</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Flag</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Short</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Default</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-dark-muted">
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--env</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">""</td>
                <td className="py-3 px-4">Path to SMTP config JSON file (required)</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--csv</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">""</td>
                <td className="py-3 px-4">Path to recipient CSV file with email column</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--sheet-url</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">""</td>
                <td className="py-3 px-4">Google Sheet CSV URL (public sheets only)</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--template</td>
                <td className="py-3 px-4">-t</td>
                <td className="py-3 px-4">example/welcome.html</td>
                <td className="py-3 px-4">HTML email template with Go placeholders</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--subject</td>
                <td className="py-3 px-4">-s</td>
                <td className="py-3 px-4">Test Email from Mailgrid</td>
                <td className="py-3 px-4">Email subject line (supports templates)</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--to</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">""</td>
                <td className="py-3 px-4">Single recipient email (cannot use with --csv)</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--cc</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">""</td>
                <td className="py-3 px-4">CC recipients (comma-separated or @file.txt)</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--bcc</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">""</td>
                <td className="py-3 px-4">BCC recipients (comma-separated or @file.txt)</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--attach</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">[]</td>
                <td className="py-3 px-4">File attachments (max 10MB total)</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--concurrency</td>
                <td className="py-3 px-4">-c</td>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4">Number of parallel worker goroutines</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--retries</td>
                <td className="py-3 px-4">-r</td>
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4">Max retry attempts per email (exponential backoff)</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--batch-size</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4">Emails per SMTP connection (avoid throttling)</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--filter</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">""</td>
                <td className="py-3 px-4">Filter recipients using logical expressions</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--dry-run</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">false</td>
                <td className="py-3 px-4">Render emails to console without sending</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--preview</td>
                <td className="py-3 px-4">-p</td>
                <td className="py-3 px-4">false</td>
                <td className="py-3 px-4">Start local server to preview emails</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono">--preview-port</td>
                <td className="py-3 px-4">--port</td>
                <td className="py-3 px-4">8080</td>
                <td className="py-3 px-4">Port for preview server</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Scheduling Flags</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Flag</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Short</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-dark-muted">
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--schedule-at</td>
                <td className="py-3 px-4">-A</td>
                <td className="py-3 px-4">Schedule at RFC3339 time (e.g. 2025-01-15T10:00:00Z)</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--interval</td>
                <td className="py-3 px-4">-i</td>
                <td className="py-3 px-4">Recurring schedule using Go duration (1h, 30m, etc.)</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--cron</td>
                <td className="py-3 px-4">-C</td>
                <td className="py-3 px-4">Recurring schedule using 5-field cron expression</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--job-retries</td>
                <td className="py-3 px-4">-J</td>
                <td className="py-3 px-4">Scheduler-level max retry attempts (default: 3)</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--job-backoff</td>
                <td className="py-3 px-4">-B</td>
                <td className="py-3 px-4">Base backoff duration for retries (default: 2s)</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--jobs-list</td>
                <td className="py-3 px-4">-L</td>
                <td className="py-3 px-4">List all scheduled jobs in database</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--jobs-cancel</td>
                <td className="py-3 px-4">-X</td>
                <td className="py-3 px-4">Cancel job by ID</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--scheduler-run</td>
                <td className="py-3 px-4">-R</td>
                <td className="py-3 px-4">Run scheduler dispatcher in foreground</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono">--scheduler-db</td>
                <td className="py-3 px-4">-D</td>
                <td className="py-3 px-4">Path to BoltDB file (default: mailgrid.db)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Performance Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">Concurrency Settings</h4>
            <ul className="text-gray-600 dark:text-dark-muted text-sm space-y-1">
              <li>• Gmail/Yahoo: 1-2 workers</li>
              <li>• SendGrid/Mailgun: 5-10 workers</li>
              <li>• Amazon SES: 10-20 workers</li>
              <li>• Always start low and increase gradually</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">Batch Size Recommendations</h4>
            <ul className="text-gray-600 dark:text-dark-muted text-sm space-y-1">
              <li>• Consumer providers (Gmail): batch-size 1</li>
              <li>• Enterprise SMTP: batch-size 5-10</li>
              <li>• Transactional providers: batch-size 10-50</li>
              <li>• Test before scaling up</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FlagsContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Complete Flag Reference</h1>
    
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Basic Production Command</h2>
        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
          <button
            onClick={() => copyToClipboard('mailgrid \\\n  --env cfg/prod.json \\\n  --csv contacts.csv \\\n  --template welcome.html \\\n  --subject "Welcome!" \\\n  --concurrency 5 \\\n  --retries 3', 'production-command')}
            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
          >
            {copiedCode === 'production-command' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
          <pre className="text-green-400 text-sm">
{`mailgrid \\
  --env cfg/prod.json \\
  --csv contacts.csv \\
  --template welcome.html \\
  --subject "Welcome!" \\
  --concurrency 5 \\
  --retries 3`}
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">All Available Flags</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-6">
          Complete reference of all flags supported by MailGrid. For detailed explanations, see the CLI Reference section.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Email Content & Recipients</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-indigo-600 dark:text-indigo-400">--env</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">SMTP configuration file</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-indigo-600 dark:text-indigo-400">--csv</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">CSV file with recipients</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-indigo-600 dark:text-indigo-400">--sheet-url</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Google Sheets URL</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-indigo-600 dark:text-indigo-400">--template, -t</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">HTML template file</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-indigo-600 dark:text-indigo-400">--subject, -s</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Email subject line</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-indigo-600 dark:text-indigo-400">--to</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Single recipient email</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-indigo-600 dark:text-indigo-400">--text</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Plain text body</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-indigo-600 dark:text-indigo-400">--cc</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">CC recipients</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-indigo-600 dark:text-indigo-400">--bcc</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">BCC recipients</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-indigo-600 dark:text-indigo-400">--attach</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">File attachments (up to 10MB)</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">New Features (Latest Version)</h3>
            <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-4">
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                  <code className="font-mono text-green-600 dark:text-green-400">--to</code>
                  <span className="text-gray-600 dark:text-dark-muted ml-2">Single recipient mode (no CSV needed)</span>
                </div>
                <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                  <code className="font-mono text-green-600 dark:text-green-400">--text</code>
                  <span className="text-gray-600 dark:text-dark-muted ml-2">Plain text emails (alternative to HTML)</span>
                </div>
                <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                  <code className="font-mono text-green-600 dark:text-green-400">--cc / --bcc</code>
                  <span className="text-gray-600 dark:text-dark-muted ml-2">Carbon copy support with deduplication</span>
                </div>
                <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                  <code className="font-mono text-green-600 dark:text-green-400">Enhanced Attachments</code>
                  <span className="text-gray-600 dark:text-dark-muted ml-2">Efficient processing with MIME detection</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Performance & Filtering</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-green-600 dark:text-green-400">--concurrency, -c</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Parallel workers</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-green-600 dark:text-green-400">--retries, -r</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Retry attempts</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-green-600 dark:text-green-400">--batch-size</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Emails per batch</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-green-600 dark:text-green-400">--filter</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Recipient filtering</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Scheduling & Jobs</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-purple-600 dark:text-purple-400">--schedule-at, -A</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">One-time scheduling</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-purple-600 dark:text-purple-400">--interval, -i</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Interval scheduling</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-purple-600 dark:text-purple-400">--cron, -C</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Cron scheduling</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-purple-600 dark:text-purple-400">--job-retries, -J</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Scheduler retries</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-purple-600 dark:text-purple-400">--job-backoff, -B</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Retry backoff duration</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-purple-600 dark:text-purple-400">--jobs-list, -L</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">List scheduled jobs</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-purple-600 dark:text-purple-400">--jobs-cancel, -X</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Cancel job by ID</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-purple-600 dark:text-purple-400">--scheduler-run, -R</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Run scheduler daemon</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-purple-600 dark:text-purple-400">--scheduler-db, -D</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Database file path</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Testing & Preview</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-orange-600 dark:text-orange-400">--dry-run</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Render without sending</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-orange-600 dark:text-orange-400">--preview, -p</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Start preview server</span>
              </div>
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded p-3">
                <code className="font-mono text-orange-600 dark:text-orange-400">--preview-port, --port</code>
                <span className="text-gray-600 dark:text-dark-muted ml-2">Preview server port</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Production-Ready Example</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          Complete command showcasing the latest MailGrid features including scheduling, attachments, CC/BCC, and advanced performance settings:
        </p>
        
        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
          <button
            onClick={() => copyToClipboard('mailgrid \\\n  --env production.json \\\n  --sheet-url "https://docs.google.com/spreadsheets/d/abc123/edit" \\\n  --template campaign.html \\\n  --subject "{{.name}}, your {{.tier}} benefits await!" \\\n  --attach welcome-guide.pdf \\\n  --attach terms.pdf \\\n  --cc "manager@company.com" \\\n  --bcc "audit@company.com" \\\n  --filter "(tier = \"premium\" or tier = \"vip\") and active = true" \\\n  --concurrency 10 \\\n  --retries 3 \\\n  --batch-size 20 \\\n  --schedule-at "2025-01-15T10:00:00Z" \\\n  --job-retries 5 \\\n  --job-backoff "5s"', 'complete-example')}
            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
          >
            {copiedCode === 'complete-example' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
          <pre className="text-green-400 text-sm">
{`mailgrid \\
  --env production.json \\
  --sheet-url "https://docs.google.com/spreadsheets/d/abc123/edit" \\
  --template campaign.html \\
  --subject "{{.name}}, your {{.tier}} benefits await!" \\
  --attach welcome-guide.pdf \\
  --attach terms.pdf \\
  --cc "manager@company.com" \\
  --bcc "audit@company.com" \\
  --filter "(tier = \"premium\" or tier = \"vip\") and active = true" \\
  --concurrency 10 \\
  --retries 3 \\
  --batch-size 20 \\
  --schedule-at "2025-01-15T10:00:00Z" \\
  --job-retries 5 \\
  --job-backoff "5s"`}
          </pre>
        </div>
        
        <div className="mt-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📊 What this command does:</h3>
          <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
            <li>• Loads recipients from Google Sheets with premium/VIP filtering</li>
            <li>• Sends personalized emails with 2 PDF attachments</li>
            <li>• CC manager and BCC audit trail (with automatic deduplication)</li>
            <li>• Schedules for future delivery with job-level retry handling</li>
            <li>• Uses 10 concurrent workers with 20-email batches for optimal performance</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const TroubleshootingContent = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Troubleshooting</h1>
    
    <div className="space-y-8">
      {/* Windows-Specific Issues */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Windows-Specific Issues</h2>
        
        <div className="space-y-6">
          <div className="border border-orange-200 dark:border-orange-800/30 bg-orange-50 dark:bg-orange-900/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">🛡️ Windows Defender / Antivirus Blocking</h3>
            <p className="text-orange-700 dark:text-orange-300 text-sm mb-4">Some antivirus software may flag MailGrid as suspicious.</p>
            <ul className="text-orange-700 dark:text-orange-300 text-sm space-y-1 mb-4">
              <li>• <strong>Add Exception:</strong> Add MailGrid installation folder to antivirus exceptions</li>
              <li>• <strong>Windows Defender:</strong> Go to Windows Security → Virus & threat protection → Exclusions</li>
              <li>• <strong>Smart Screen:</strong> Click "More info" → "Run anyway" on first launch</li>
              <li>• <strong>Digital Signature:</strong> Check file properties for valid signature verification</li>
            </ul>
            <div className="bg-orange-100 dark:bg-orange-900/20 rounded p-3 mt-3">
              <div className="text-xs font-mono text-orange-800 dark:text-orange-200">
                # Add folder exclusion in Windows Defender<br/>
                Add-MpPreference -ExclusionPath "C:\\Users\\{'{YourUsername}'}\\AppData\\Local\\mailgrid"
              </div>
            </div>
          </div>
          
          <div className="border border-purple-200 dark:border-purple-800/30 bg-purple-50 dark:bg-purple-900/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">🔒 PowerShell Execution Policy</h3>
            <p className="text-purple-700 dark:text-purple-300 text-sm mb-4">PowerShell may restrict script execution.</p>
            <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1 mb-4">
              <li>• <strong>Temporary Fix:</strong> Run PowerShell as Administrator</li>
              <li>• <strong>User Policy:</strong> Allow scripts for current user only</li>
              <li>• <strong>Bypass Policy:</strong> Run installer with bypass flag</li>
              <li>• <strong>Unblock File:</strong> Unblock downloaded installer script</li>
            </ul>
            <div className="bg-purple-100 dark:bg-purple-900/20 rounded p-3 mt-3">
              <div className="text-xs font-mono text-purple-800 dark:text-purple-200">
                # Fix execution policy (run as Admin)<br/>
                Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser<br/><br/>
                # Unblock installer<br/>
                Unblock-File install.ps1<br/><br/>
                # Run with bypass<br/>
                PowerShell -ExecutionPolicy Bypass -File install.ps1
              </div>
            </div>
          </div>
          
          <div className="border border-teal-200 dark:border-teal-800/30 bg-teal-50 dark:bg-teal-900/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-2">📱 Windows Terminal & CMD Issues</h3>
            <p className="text-teal-700 dark:text-teal-300 text-sm mb-4">Command prompt and terminal compatibility issues.</p>
            <ul className="text-teal-700 dark:text-teal-300 text-sm space-y-1 mb-4">
              <li>• <strong>PowerShell vs CMD:</strong> Use PowerShell for best experience</li>
              <li>• <strong>Path Issues:</strong> Use full path to mailgrid.exe if not in PATH</li>
              <li>• <strong>Windows Terminal:</strong> Install latest version from Microsoft Store</li>
              <li>• <strong>UTF-8 Support:</strong> Enable UTF-8 encoding in terminal settings</li>
            </ul>
            <div className="bg-teal-100 dark:bg-teal-900/20 rounded p-3 mt-3">
              <div className="text-xs font-mono text-teal-800 dark:text-teal-200">
                # Check if MailGrid is in PATH<br/>
                where mailgrid<br/><br/>
                # Add to PATH temporarily<br/>
                {'$env:PATH += ";C:\\path\\to\\mailgrid"'}<br/><br/>
                # Run with full path<br/>
                "C:\\Users\\YourName\\AppData\\Local\\mailgrid\\bin\\mailgrid.exe" --version
              </div>
            </div>
          </div>
          
          <div className="border border-pink-200 dark:border-pink-800/30 bg-pink-50 dark:bg-pink-900/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-pink-800 dark:text-pink-200 mb-2">📎 Windows Package Manager Issues</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm mb-4">Troubleshoot Winget, Chocolatey, and Scoop installation problems.</p>
            <ul className="text-pink-700 dark:text-pink-300 text-sm space-y-1 mb-4">
              <li>• <strong>Winget Not Found:</strong> Install from Microsoft Store or GitHub</li>
              <li>• <strong>Chocolatey Issues:</strong> Run as Administrator and update Chocolatey</li>
              <li>• <strong>Scoop Bucket:</strong> Add MailGrid bucket before installing</li>
              <li>• <strong>Update Managers:</strong> Keep package managers updated</li>
            </ul>
            <div className="bg-pink-100 dark:bg-pink-900/20 rounded p-3 mt-3">
              <div className="text-xs font-mono text-pink-800 dark:text-pink-200">
                # Check package managers<br/>
                winget --version<br/>
                choco --version<br/>
                scoop --version<br/><br/>
                # Update package managers<br/>
                winget upgrade --all<br/>
                choco upgrade chocolatey
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Common Issues</h2>
        
        <div className="space-y-6">
          <div className="border border-red-200 dark:border-red-800/30 bg-red-50 dark:bg-red-900/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">SMTP Authentication Failed</h3>
            <p className="text-red-700 dark:text-red-300 text-sm mb-4">Most common cause of authentication failures.</p>
            <ul className="text-red-700 dark:text-red-300 text-sm space-y-1 mb-4">
              <li>• <strong>Gmail:</strong> Use App Password, not regular password</li>
              <li>• <strong>2FA:</strong> Enable 2-factor authentication and generate app password</li>
              <li>• <strong>Less Secure Apps:</strong> Gmail no longer supports this option</li>
              <li>• <strong>Credentials:</strong> Double-check username and password in config.json</li>
            </ul>
          </div>
          
          <div className="border border-yellow-200 dark:border-yellow-800/30 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Emails Going to Spam</h3>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-4">Improve email deliverability with these tips.</p>
            <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
              <li>• <strong>Sender Reputation:</strong> Use established email addresses</li>
              <li>• <strong>Content Quality:</strong> Avoid spam trigger words</li>
              <li>• <strong>Volume:</strong> Start with small batches and gradually increase</li>
              <li>• <strong>Authentication:</strong> Set up SPF, DKIM, and DMARC records</li>
              <li>• <strong>Unsubscribe:</strong> Always include unsubscribe links</li>
            </ul>
          </div>
          
          <div className="border border-blue-200 dark:border-blue-800/30 bg-blue-50 dark:bg-blue-900/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Rate Limiting Issues</h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">When your SMTP provider throttles or blocks connections.</p>
            <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
              <li>• <strong>Reduce Concurrency:</strong> Lower --concurrency to 1-2</li>
              <li>• <strong>Batch Size:</strong> Use --batch-size 1 for consumer providers</li>
              <li>• <strong>Add Delays:</strong> Space out campaigns over time</li>
              <li>• <strong>Provider Limits:</strong> Check your SMTP provider's rate limits</li>
            </ul>
          </div>
          
          <div className="border border-green-200 dark:border-green-800/30 bg-green-50 dark:bg-green-900/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">Template Rendering Errors</h3>
            <p className="text-green-700 dark:text-green-300 text-sm mb-4">Fix common template issues.</p>
            <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
              <li>• <strong>Missing Fields:</strong> Check CSV column names match template variables</li>
              <li>• <strong>Syntax Errors:</strong> Use {'{{.field}}'} not {'{{field}}'}</li>
              <li>• <strong>Preview First:</strong> Always test with --preview or --dry-run</li>
              <li>• <strong>Special Characters:</strong> Escape HTML characters properly</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Debugging Tips</h2>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Step-by-Step Debugging</h3>
            <ol className="text-gray-600 dark:text-dark-muted space-y-2 list-decimal list-inside">
              <li>Test SMTP config with a single email using <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">--to</code></li>
              <li>Validate CSV format and headers</li>
              <li>Test templates with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">--preview</code> mode</li>
              <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">--dry-run</code> to check rendered output</li>
              <li>Start with low concurrency (1-2 workers)</li>
              <li>Gradually increase volume after testing</li>
            </ol>
          </div>
          
          <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="text-gray-200 mb-3">Debug Commands</h3>
            <div className="space-y-2 text-sm">
              <div className="text-green-400"># Test single email</div>
              <div className="text-white">mailgrid --env config.json --to "test@example.com" --subject "Test" --text "Hello World"</div>
              
              <div className="text-green-400 mt-3"># Preview templates</div>
              <div className="text-white">mailgrid --preview --csv data.csv --template email.html</div>
              
              <div className="text-green-400 mt-3"># Dry run with filters</div>
              <div className="text-white">mailgrid --dry-run --csv data.csv --template email.html --filter 'tier = "test"'</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Performance Optimization</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">✅ Best Practices</h3>
            <ul className="text-gray-600 dark:text-dark-muted text-sm space-y-1">
              <li>• Start with --concurrency 1, increase gradually</li>
              <li>• Use --batch-size 1 for consumer email providers</li>
              <li>• Test campaigns with small recipient lists first</li>
              <li>• Monitor success.csv and failed.csv output files</li>
              <li>• Keep templates and CSV files optimized</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">⚠️ Common Mistakes</h3>
            <ul className="text-gray-600 dark:text-dark-muted text-sm space-y-1">
              <li>• Setting concurrency too high initially</li>
              <li>• Using large batch sizes with Gmail/Yahoo</li>
              <li>• Not testing templates before sending</li>
              <li>• Ignoring SMTP provider rate limits</li>
              <li>• Sending to unvalidated email lists</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/30 rounded-lg p-6">
        <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">🆘 Need More Help?</h3>
        <p className="text-indigo-700 dark:text-indigo-300 text-sm mb-4">
          If you're still experiencing issues after following this guide, check these resources:
        </p>
        <div className="flex gap-3">
          <a
            href="https://github.com/bravo1goingdark/mailgrid/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-800 dark:text-indigo-200 hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            GitHub Issues
          </a>
          <a
            href="https://github.com/bravo1goingdark/mailgrid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-800 dark:text-indigo-200 hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            Main Repository
          </a>
        </div>
      </div>
    </div>
  </div>
);

const NewsletterExampleContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Newsletter Campaign</h1>
    
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Weekly Newsletter Automation</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          Set up a recurring newsletter campaign that sends every Monday at 9 AM to your subscribers with personalized content.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Step-by-Step Setup</h2>
        
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <div className="ml-12">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Prepare Subscriber Data</h3>
              <p className="text-gray-600 dark:text-dark-muted mb-4">Create a CSV file with subscriber information including preferences and segmentation data.</p>
              
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">subscribers.csv</span>
                  <button
                    onClick={() => copyToClipboard('name,email,interests,subscribed,segment,week\nJohn Doe,john@example.com,"tech,ai",true,premium,"Week of Jan 15"\nJane Smith,jane@company.com,"design,tech",true,standard,"Week of Jan 15"\nBob Wilson,bob@startup.com,"business,tech",true,premium,"Week of Jan 15"', 'newsletter-csv')}
                    className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    {copiedCode === 'newsletter-csv' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
                  <pre className="text-green-400 text-sm">
{`name,email,interests,subscribed,segment,week
John Doe,john@example.com,"tech,ai",true,premium,"Week of Jan 15"
Jane Smith,jane@company.com,"design,tech",true,standard,"Week of Jan 15"
Bob Wilson,bob@startup.com,"business,tech",true,premium,"Week of Jan 15"`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <div className="ml-12">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Create Newsletter Template</h3>
              <p className="text-gray-600 dark:text-dark-muted mb-4">Design a responsive HTML template with dynamic content sections.</p>
              
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">newsletter.html</span>
                  <button
                    onClick={() => copyToClipboard('<!DOCTYPE html>\n<html>\n<head>\n  <title>Weekly Newsletter</title>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>\n<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">\n  <header style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px; margin-bottom: 30px;">\n    <h1>📰 Weekly Tech Digest</h1>\n    <p>{{ .week }}</p>\n  </header>\n  \n  <div style="margin-bottom: 30px;">\n    <h2 style="color: #333;">Hi {{ .name }}! 👋</h2>\n    <p>Here\'s what\'s trending in {{ .interests }} this week.</p>\n  </div>\n  \n  {{ if eq .segment "premium" }}\n  <div style="background: #e7f3ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0066cc; margin: 20px 0;">\n    <h3 style="color: #0066cc; margin-top: 0;">🎯 Premium Highlights</h3>\n    <ul>\n      <li>Exclusive industry insights</li>\n      <li>Early access to new tools</li>\n      <li>Premium community access</li>\n    </ul>\n  </div>\n  {{ end }}\n  \n  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">\n    <h3 style="color: #333;">📈 This Week\'s Top Stories</h3>\n    <ul>\n      <li><strong>AI Breakthrough:</strong> New developments in machine learning</li>\n      <li><strong>Tech Trends:</strong> What\'s shaping the industry</li>\n      <li><strong>Startup News:</strong> Latest funding rounds and launches</li>\n    </ul>\n  </div>\n  \n  <footer style="text-align: center; padding: 30px 0; border-top: 1px solid #eee; margin-top: 40px; color: #666;">\n    <p>Thanks for reading! Reply to this email with feedback.</p>\n    <p><small>You\'re receiving this because you subscribed to our {{ .segment }} newsletter.</small></p>\n  </footer>\n</body>\n</html>', 'newsletter-template')}
                    className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    {copiedCode === 'newsletter-template' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="bg-gray-900 dark:bg-gray-800 rounded p-3 max-h-96 overflow-y-auto">
                  <pre className="text-green-400 text-xs">
{`<!DOCTYPE html>
<html>
<head>
  <title>Weekly Newsletter</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <header style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px; margin-bottom: 30px;">
    <h1>📰 Weekly Tech Digest</h1>
    <p>{{.week}}</p>
  </header>
  
  <div style="margin-bottom: 30px;">
    <h2 style="color: #333;">Hi {{.name}}! 👋</h2>
    <p>Here's what's trending in {{.interests}} this week.</p>
  </div>
  
  {{ if eq .segment "premium" }}
  <div style="background: #e7f3ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0066cc; margin: 20px 0;">
    <h3 style="color: #0066cc; margin-top: 0;">🎯 Premium Highlights</h3>
    <ul>
      <li>Exclusive industry insights</li>
      <li>Early access to new tools</li>
      <li>Premium community access</li>
    </ul>
  </div>
  {{ end }}
  
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #333;">📈 This Week's Top Stories</h3>
    <ul>
      <li><strong>AI Breakthrough:</strong> New developments in machine learning</li>
      <li><strong>Tech Trends:</strong> What's shaping the industry</li>
      <li><strong>Startup News:</strong> Latest funding rounds and launches</li>
    </ul>
  </div>
  
  <footer style="text-align: center; padding: 30px 0; border-top: 1px solid #eee; margin-top: 40px; color: #666;">
    <p>Thanks for reading! Reply to this email with feedback.</p>
    <p><small>You're receiving this because you subscribed to our {{.segment}} newsletter.</small></p>
  </footer>
</body>
</html>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <div className="ml-12">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Schedule the Campaign</h3>
              <p className="text-gray-600 dark:text-dark-muted mb-4">Set up recurring delivery every Monday at 9 AM with filtering for active subscribers.</p>
              
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
                <button
                  onClick={() => copyToClipboard('mailgrid \\\n  --env config.json \\\n  --csv subscribers.csv \\\n  --template newsletter.html \\\n  --subject "📰 Weekly Tech Digest - {{.week}}" \\\n  --cron "0 9 * * 1" \\\n  --filter \'subscribed = "true" AND interests contains "tech"\' \\\n  --concurrency 3 \\\n  --batch-size 5', 'newsletter-command')}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'newsletter-command' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="text-green-400 text-sm">
{`mailgrid \\
  --env config.json \\
  --csv subscribers.csv \\
  --template newsletter.html \\
  --subject "📰 Weekly Tech Digest - {{.week}}" \\
  --cron "0 9 * * 1" \\
  --filter 'subscribed = "true" AND interests contains "tech"' \\
  --concurrency 3 \\
  --batch-size 5`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-6">
        <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
          <Check className="w-5 h-5" />
          Campaign Results
        </h3>
        <div className="text-green-700 dark:text-green-300 text-sm space-y-2">
          <p><strong>Delivery:</strong> Automatically sends every Monday at 9:00 AM</p>
          <p><strong>Targeting:</strong> Only active subscribers interested in tech content</p>
          <p><strong>Personalization:</strong> Each email includes subscriber name, interests, and segment-specific content</p>
          <p><strong>Performance:</strong> 3 concurrent workers with batch size of 5 for optimal delivery</p>
        </div>
      </div>
    </div>
  </div>
);

const DripCampaignContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Drip Campaign Setup</h1>
    
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 border border-purple-200 dark:border-purple-800/30 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Abandoned Cart Recovery Sequence</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          Recover lost sales with a strategic 3-email sequence sent at optimal intervals after cart abandonment.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Campaign Flow</h2>
        
        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
              <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">Email 1</span>
              Gentle Reminder (2 hours after abandonment)
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-dark-muted">Friendly reminder about items left in cart with social proof.</p>
              
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
                <button
                  onClick={() => copyToClipboard('mailgrid \\\n  --env config.json \\\n  --csv abandoned_carts.csv \\\n  --template cart_reminder.html \\\n  --subject "{{.name}}, you left something behind! 🛒" \\\n  --filter \'hours_since_abandonment >= 2 AND recovered = "false"\' \\\n  --concurrency 2', 'drip-email-1')}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'drip-email-1' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
                <pre className="text-green-400 text-sm">
{`mailgrid \\
  --env config.json \\
  --csv abandoned_carts.csv \\
  --template cart_reminder.html \\
  --subject "{{.name}}, you left something behind! 🛒" \\
  --filter 'hours_since_abandonment >= 2 AND recovered = "false"' \\
  --concurrency 2`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
              <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-sm">Email 2</span>
              Incentive Offer (24 hours later)
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-dark-muted">Offer discount or free shipping to encourage completion.</p>
              
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
                <button
                  onClick={() => copyToClipboard('mailgrid \\\n  --env config.json \\\n  --csv abandoned_carts.csv \\\n  --template cart_discount.html \\\n  --subject "10% OFF your cart - Limited time!" \\\n  --schedule-at "2025-01-16T10:00:00Z" \\\n  --filter \'hours_since_abandonment >= 24 AND recovered = "false"\' \\\n  --concurrency 2', 'drip-email-2')}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'drip-email-2' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
                <pre className="text-green-400 text-sm">
{`mailgrid \\
  --env config.json \\
  --csv abandoned_carts.csv \\
  --template cart_discount.html \\
  --subject "10% OFF your cart - Limited time!" \\
  --schedule-at "2025-01-16T10:00:00Z" \\
  --filter 'hours_since_abandonment >= 24 AND recovered = "false"' \\
  --concurrency 2`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">Email 3</span>
              Final Attempt (72 hours later)
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-dark-muted">Last chance email with urgency and alternative products.</p>
              
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
                <button
                  onClick={() => copyToClipboard('mailgrid \\\n  --env config.json \\\n  --csv abandoned_carts.csv \\\n  --template cart_final.html \\\n  --subject "Last chance: Your cart expires soon ⏰" \\\n  --schedule-at "2025-01-18T10:00:00Z" \\\n  --filter \'hours_since_abandonment >= 72 AND recovered = "false"\' \\\n  --concurrency 2', 'drip-email-3')}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'drip-email-3' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
                <pre className="text-green-400 text-sm">
{`mailgrid \\
  --env config.json \\
  --csv abandoned_carts.csv \\
  --template cart_final.html \\
  --subject "Last chance: Your cart expires soon ⏰" \\
  --schedule-at "2025-01-18T10:00:00Z" \\
  --filter 'hours_since_abandonment >= 72 AND recovered = "false"' \\
  --concurrency 2`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Sample Data Structure</h2>
        
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">abandoned_carts.csv</span>
            <button
              onClick={() => copyToClipboard('name,email,cart_value,cart_items,hours_since_abandonment,recovered,discount_code\nJohn Doe,john@example.com,"$89.97","2 items",2,false,SAVE10\nJane Smith,jane@company.com,"$156.50","3 items",25,false,SAVE10\nBob Wilson,bob@startup.com,"$45.99","1 item",75,false,SAVE10', 'drip-csv')}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {copiedCode === 'drip-csv' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
            <pre className="text-green-400 text-sm">
{`name,email,cart_value,cart_items,hours_since_abandonment,recovered,discount_code
John Doe,john@example.com,"$89.97","2 items",2,false,SAVE10
Jane Smith,jane@company.com,"$156.50","3 items",25,false,SAVE10
Bob Wilson,bob@startup.com,"$45.99","1 item",75,false,SAVE10`}
            </pre>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Optimization Tips</h3>
          <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
            <li>• Test different discount percentages</li>
            <li>• A/B test subject lines for each email</li>
            <li>• Personalize product recommendations</li>
            <li>• Track conversion rates by email sequence</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800/30 rounded-lg p-6">
          <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">📊 Expected Results</h3>
          <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
            <li>• Email 1: 15-20% recovery rate</li>
            <li>• Email 2: 8-12% additional recovery</li>
            <li>• Email 3: 3-5% final conversions</li>
            <li>• Total: 25-35% cart recovery</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const EventInvitesContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Event Invitation Campaign</h1>
    
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Product Launch Event</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          Send personalized invitations to VIP customers and prospects with tiered messaging and event details.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Multi-Tier Campaign</h2>
        
        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
              <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm">VIP</span>
              Exclusive Early Access
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-dark-muted">VIP customers get exclusive early access with premium perks.</p>
              
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
                <button
                  onClick={() => copyToClipboard('mailgrid \\\n  --env config.json \\\n  --csv customer_list.csv \\\n  --template vip_invite.html \\\n  --subject "🌟 VIP Exclusive: {{.product_name}} Launch Event" \\\n  --filter \'tier = "VIP" AND region = "{{.event_region}}"\' \\\n  --attach vip_agenda.pdf \\\n  --attach venue_map.pdf \\\n  --concurrency 2', 'event-vip')}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'event-vip' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
                <pre className="text-green-400 text-sm">
{`mailgrid \\
  --env config.json \\
  --csv customer_list.csv \\
  --template vip_invite.html \\
  --subject "🌟 VIP Exclusive: {{.product_name}} Launch Event" \\
  --filter 'tier = "VIP" AND region = "{{.event_region}}"' \\
  --attach vip_agenda.pdf \\
  --attach venue_map.pdf \\
  --concurrency 2`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">Premium</span>
              Standard Invitation (24h later)
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-dark-muted">Premium customers receive standard invitations with event details.</p>
              
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
                <button
                  onClick={() => copyToClipboard('mailgrid \\\n  --env config.json \\\n  --csv customer_list.csv \\\n  --template premium_invite.html \\\n  --subject "🎉 You\'re Invited: {{.product_name}} Launch" \\\n  --schedule-at "2025-01-16T10:00:00Z" \\\n  --filter \'tier = "premium" AND region = "{{.event_region}}"\' \\\n  --attach event_agenda.pdf \\\n  --concurrency 3', 'event-premium')}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'event-premium' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
                <pre className="text-green-400 text-sm">
{`mailgrid \\
  --env config.json \\
  --csv customer_list.csv \\
  --template premium_invite.html \\
  --subject "🎉 You're Invited: {{.product_name}} Launch" \\
  --schedule-at "2025-01-16T10:00:00Z" \\
  --filter 'tier = "premium" AND region = "{{.event_region}}"' \\
  --attach event_agenda.pdf \\
  --concurrency 3`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm">General</span>
              Public Announcement (48h later)
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-dark-muted">General audience gets public announcement with registration link.</p>
              
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
                <button
                  onClick={() => copyToClipboard('mailgrid \\\n  --env config.json \\\n  --csv prospect_list.csv \\\n  --template public_invite.html \\\n  --subject "Join us for the {{.product_name}} Launch Event!" \\\n  --schedule-at "2025-01-17T10:00:00Z" \\\n  --filter \'subscribed = "true" AND region = "{{.event_region}}"\' \\\n  --concurrency 5', 'event-public')}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'event-public' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
                <pre className="text-green-400 text-sm">
{`mailgrid \\
  --env config.json \\
  --csv prospect_list.csv \\
  --template public_invite.html \\
  --subject "Join us for the {{.product_name}} Launch Event!" \\
  --schedule-at "2025-01-17T10:00:00Z" \\
  --filter 'subscribed = "true" AND region = "{{.event_region}}"' \\
  --concurrency 5`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Event Data Structure</h2>
        
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">customer_list.csv</span>
            <button
              onClick={() => copyToClipboard('name,email,tier,region,product_name,event_region,event_date\nJohn Doe,john@example.com,VIP,US,"AI Assistant Pro",US,"January 25, 2025"\nJane Smith,jane@company.com,premium,US,"AI Assistant Pro",US,"January 25, 2025"\nBob Wilson,bob@startup.com,standard,UK,"AI Assistant Pro",UK,"January 30, 2025"', 'event-csv')}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {copiedCode === 'event-csv' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
            <pre className="text-green-400 text-sm">
{`name,email,tier,region,product_name,event_region,event_date
John Doe,john@example.com,VIP,US,"AI Assistant Pro",US,"January 25, 2025"
Jane Smith,jane@company.com,premium,US,"AI Assistant Pro",US,"January 25, 2025"
Bob Wilson,bob@startup.com,standard,UK,"AI Assistant Pro",UK,"January 30, 2025"`}
            </pre>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/30 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">🌟 VIP Benefits</h3>
          <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
            <li>• 48h early access</li>
            <li>• Exclusive networking session</li>
            <li>• Premium seating</li>
            <li>• Welcome gift</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💎 Premium Features</h3>
          <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
            <li>• 24h early access</li>
            <li>• Reserved seating</li>
            <li>• Q&A session</li>
            <li>• Event swag</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">📢 Public Access</h3>
          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
            <li>• Standard registration</li>
            <li>• General seating</li>
            <li>• Live streaming option</li>
            <li>• Event recording access</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default MailGridDocs;