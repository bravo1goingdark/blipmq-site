import { motion } from 'motion/react';
import React, { useState } from 'react';
import { 
  BookOpen, 
  Rocket, 
  Terminal, 
  Code, 
  Zap, 
  Database, 
  Settings, 
  Monitor,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Hash,
  ArrowLeft,
  Github,
  Download,
  Server,
  MessageSquare,
  BarChart3,
  Shield,
  Cpu,
  Network,
  HardDrive,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BlipMQDocs = () => {
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

  // Sync active section with URL hash
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
        { id: 'installation', title: 'Installation', icon: Download },
        { id: 'quick-start', title: 'Quick Start', icon: Zap },
      ]
    },
    {
      id: 'guides',
      title: 'Guides',
      items: [
        { id: 'configuration', title: 'Configuration', icon: Settings },
        { id: 'pub-sub', title: 'Pub/Sub Patterns', icon: MessageSquare },
        { id: 'durability', title: 'Durability & WAL', icon: HardDrive },
        { id: 'performance', title: 'Performance Tuning', icon: Cpu },
        { id: 'deployment', title: 'Deployment', icon: Server },
      ]
    },
    {
      id: 'reference',
      title: 'API Reference',
      items: [
        { id: 'cli-reference', title: 'CLI Reference', icon: Terminal },
        { id: 'protocol', title: 'Protocol Spec', icon: Code },
        { id: 'metrics', title: 'Metrics & Monitoring', icon: BarChart3 },
        { id: 'troubleshooting', title: 'Troubleshooting', icon: Monitor },
      ]
    },
    {
      id: 'examples',
      title: 'Examples',
      items: [
        { id: 'iot-edge', title: 'IoT & Edge', icon: Network },
        { id: 'microservices', title: 'Microservices', icon: Database },
        { id: 'logging', title: 'Log Aggregation', icon: Activity },
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
      case 'pub-sub':
        return <PubSubContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'durability':
        return <DurabilityContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'performance':
        return <PerformanceContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'deployment':
        return <DeploymentContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'cli-reference':
        return <CLIReferenceContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'protocol':
        return <ProtocolContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'metrics':
        return <MetricsContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'troubleshooting':
        return <TroubleshootingContent />;
      case 'iot-edge':
        return <IoTEdgeContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'microservices':
        return <MicroservicesContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
      case 'logging':
        return <LoggingContent copyToClipboard={copyToClipboard} copiedCode={copiedCode} />;
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
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Welcome to BlipMQ</h1>
    
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 border border-indigo-200 dark:border-indigo-800/30 rounded-xl p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
          <Zap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-2">
            Ultra-Lightweight Message Queue for Edge & Embedded
          </h2>
          <p className="text-gray-600 dark:text-dark-muted text-base leading-relaxed">
            BlipMQ is a blazing-fast, fault-tolerant message queue written in Rust, designed for edge, embedded, and 
            developer-first environments. Combining Kafka-level durability with MQTT-level simplicity and NATS-level 
            performance — all in a single binary under 5MB.
          </p>
        </div>
      </div>
    </div>
    
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">What is BlipMQ?</h2>
      <p className="text-gray-600 dark:text-dark-muted text-base leading-relaxed mb-6">
        BlipMQ is a high-performance message broker built specifically for scenarios where traditional message queues 
        are too heavy or complex. It provides topic-based publish/subscribe messaging with configurable QoS levels, 
        Write-Ahead Logging for durability, and per-subscriber isolated queues for optimal performance.
      </p>
      
      <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-4 mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <BookOpen className="h-5 w-5 text-blue-500 mt-0.5" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Perfect for Modern Architectures
            </h3>
            <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
              <p>From IoT gateways to microservice communication, BlipMQ adapts to your architecture without the operational overhead of larger message brokers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-600" />
          Core Features
        </h3>
        <ul className="space-y-2 text-gray-600 dark:text-dark-muted">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Single static binary (no runtime deps)
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            TCP-based FlatBuffers protocol
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Topic-based publish/subscribe
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            QoS 0 & QoS 1 delivery modes
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Write-Ahead Log with CRC32 checksums
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Prometheus metrics & observability
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
          <Rocket className="w-5 h-5 text-green-600" />
          Ideal Use Cases
        </h3>
        <ul className="space-y-2 text-gray-600 dark:text-dark-muted">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            IoT & Edge Gateways
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            Microservice Communication
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            Log Aggregation & Streaming
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            Real-time Chat & Gaming
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            CI/CD Pipeline Events
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            Local Development & Testing
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-6">Why Choose BlipMQ?</h3>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <strong className="text-lg text-gray-900 dark:text-dark-foreground">Ultra-Low Latency</strong>
            <p className="text-gray-600 dark:text-dark-muted mt-2 leading-relaxed">
              Sub-millisecond message delivery with lock-free data structures and reactive I/O. No polling, 
              no busy-waiting — just pure event-driven performance that scales from embedded devices to 
              high-throughput servers.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <strong className="text-lg text-gray-900 dark:text-dark-foreground">Fault-Tolerant by Design</strong>
            <p className="text-gray-600 dark:text-dark-muted mt-2 leading-relaxed">
              Write-Ahead Logging with CRC32 checksums ensures data integrity. Automatic message replay on 
              restart, configurable retention policies, and graceful degradation under load keep your 
              system resilient even in harsh environments.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
            <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <strong className="text-lg text-gray-900 dark:text-dark-foreground">Resource Efficient</strong>
            <p className="text-gray-600 dark:text-dark-muted mt-2 leading-relaxed">
              Single binary under 5MB, minimal memory footprint, and efficient CPU utilization. Perfect for 
              edge devices, containers, and anywhere you need maximum performance with minimal resources.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </div>
          <div>
            <strong className="text-lg text-gray-900 dark:text-dark-foreground">Developer Experience First</strong>
            <p className="text-gray-600 dark:text-dark-muted mt-2 leading-relaxed">
              Simple configuration, comprehensive CLI tools, Prometheus metrics out-of-the-box, and extensive 
              documentation. Get started in minutes, not hours. Built by developers, for developers.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 border border-green-200 dark:border-green-800/30 rounded-lg">
        <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
          <span className="text-green-600 dark:text-green-400">Ready to get started?</span> 
          BlipMQ can be up and running in under 2 minutes. Zero configuration, maximum performance.
        </p>
      </div>
    </div>
  </div>
);

const InstallationContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Installation</h1>
    
    {/* GitHub Releases CTA */}
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 border border-indigo-200 dark:border-indigo-800/30 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
            <Github className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-200 mb-2">
              🚀 Download BlipMQ v1.0.0
            </h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-base leading-relaxed mb-4">
              Get the latest production-ready release with pre-built binaries for all platforms. 
              Single static binary, no dependencies required.
            </p>
            <div className="flex items-center gap-4 text-sm text-indigo-600 dark:text-indigo-400">
              <span>✅ Linux, Windows, macOS</span>
              <span>✅ ARM64 & x86-64</span>
              <span>✅ Zero Dependencies</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="https://github.com/bravo1goingdark/blipmq/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            Download Latest
          </a>
          <a
            href="https://github.com/bravo1goingdark/blipmq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>

    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Quick Install Methods</h2>
        
        <div className="grid md:grid-cols-1 gap-6 mb-6">
          {/* Cargo Install */}
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-orange-600" />
              Cargo (Recommended)
            </h3>
            <p className="text-gray-600 dark:text-dark-muted mb-4">Install directly from crates.io with optimizations enabled:</p>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
              <button
                onClick={() => copyToClipboard('cargo install blipmq --features mimalloc', 'cargo-install')}
                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'cargo-install' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              </button>
              <pre className="text-green-400 text-sm">
{`cargo install blipmq --features mimalloc`}
              </pre>
            </div>
          </div>

          {/* Build from Source */}
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-600" />
              Build from Source
            </h3>
            <p className="text-gray-600 dark:text-dark-muted mb-4">For maximum performance with native CPU optimizations:</p>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
              <button
                onClick={() => copyToClipboard('git clone https://github.com/bravo1goingdark/blipmq.git\ncd blipmq\nRUSTFLAGS="-C target-cpu=native" cargo build --release --features mimalloc', 'build-source')}
                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'build-source' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              </button>
              <pre className="text-green-400 text-sm">
{`git clone https://github.com/bravo1goingdark/blipmq.git
cd blipmq
RUSTFLAGS="-C target-cpu=native" cargo build --release --features mimalloc`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Verify Installation</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">1. Check Version</h3>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('blipmq --version', 'version')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'version' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`blipmq --version`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">2. Test Broker Start</h3>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('blipmq start --config blipmq.toml', 'test-start')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'test-start' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`blipmq start --config blipmq.toml`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            Next Steps
          </h3>
          <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
            BlipMQ is now installed! Let's get your first broker running.
          </p>
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
      Get BlipMQ up and running in 60 seconds. This guide will walk you through starting a broker, publishing messages, and subscribing to topics.
    </p>

    <div className="space-y-8">
      {/* Step 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
          1
        </div>
        <div className="ml-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Start the Broker</h2>
          <p className="text-gray-600 dark:text-dark-muted mb-4">
            BlipMQ works with sensible defaults. Start a broker with minimal configuration:
          </p>
          
          <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
            <button
              onClick={() => copyToClipboard('blipmq start --bind 127.0.0.1:7878', 'start-broker')}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
            >
              {copiedCode === 'start-broker' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre className="text-green-400 text-sm">
{`# Start BlipMQ broker with default settings
blipmq start --bind 127.0.0.1:7878`}
            </pre>
          </div>
          
          <div className="mt-4 text-sm text-gray-600 dark:text-dark-muted">
            <p>The broker will start on port 7878 with metrics on port 9090. You should see:</p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 mt-2 font-mono text-xs">
              🚀 BlipMQ broker started on 127.0.0.1:7878<br/>
              📊 Metrics available at http://127.0.0.1:9090/metrics
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
          <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Subscribe to a Topic</h2>
          <p className="text-gray-600 dark:text-dark-muted mb-4">
            Open a new terminal and subscribe to receive messages:
          </p>
          
          <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
            <button
              onClick={() => copyToClipboard('blipmq-cli --addr 127.0.0.1:7878 sub chat', 'subscribe')}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
            >
              {copiedCode === 'subscribe' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre className="text-green-400 text-sm">
{`# Subscribe to 'chat' topic
blipmq-cli --addr 127.0.0.1:7878 sub chat`}
            </pre>
          </div>
          
          <div className="mt-4 text-sm text-gray-600 dark:text-dark-muted">
            <p>The subscriber will connect and wait for messages. You'll see a confirmation:</p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 mt-2 font-mono text-xs">
              ✅ Subscribed to topic 'chat', waiting for messages...
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
          <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Publish Messages</h2>
          <p className="text-gray-600 dark:text-dark-muted mb-4">
            In another terminal, publish messages to the topic:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('blipmq-cli --addr 127.0.0.1:7878 pub chat --ttl 5000 "Hello, BlipMQ!"', 'publish-text')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'publish-text' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`# Publish a text message with 5 second TTL
blipmq-cli --addr 127.0.0.1:7878 pub chat --ttl 5000 "Hello, BlipMQ!"`}
              </pre>
            </div>
            
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('echo "Real-time message" | blipmq-cli --addr 127.0.0.1:7878 pub chat --ttl 0 -', 'publish-pipe')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'publish-pipe' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`# Publish from stdin (use '-' as message)
echo "Real-time message" | blipmq-cli --addr 127.0.0.1:7878 pub chat --ttl 0 -`}
              </pre>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600 dark:text-dark-muted">
            <p>Your subscriber should immediately receive the messages. The output will look like:</p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 mt-2 font-mono text-xs">
              📨 [chat] Hello, BlipMQ!<br/>
              📨 [chat] Real-time message
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
          <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Explore Features</h2>
          <p className="text-gray-600 dark:text-dark-muted mb-4">
            Try some advanced features to see BlipMQ's capabilities:
          </p>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Multiple topics:</p>
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
                <button
                  onClick={() => copyToClipboard('blipmq-cli --addr 127.0.0.1:7878 sub "system.logs"', 'multi-topic')}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'multi-topic' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
                <pre className="text-green-400 text-sm">blipmq-cli --addr 127.0.0.1:7878 sub "system.logs"</pre>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Publish binary data:</p>
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
                <button
                  onClick={() => copyToClipboard('blipmq-cli --addr 127.0.0.1:7878 pubfile system.logs --ttl 0 /path/to/file.bin', 'binary-data')}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'binary-data' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
                <pre className="text-green-400 text-sm">blipmq-cli --addr 127.0.0.1:7878 pubfile system.logs --ttl 0 /path/to/file.bin</pre>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Check metrics:</p>
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 relative group">
                <button
                  onClick={() => copyToClipboard('curl http://127.0.0.1:9090/metrics', 'check-metrics')}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'check-metrics' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
                <pre className="text-green-400 text-sm">curl http://127.0.0.1:9090/metrics</pre>
              </div>
            </div>
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
        You've successfully set up BlipMQ and sent your first messages. The broker is handling pub/sub messaging with sub-millisecond latency!
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => document.querySelector('[data-section="configuration"]')?.click()}
          className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline"
        >
          Learn about Configuration →
        </button>
        <button
          onClick={() => document.querySelector('[data-section="pub-sub"]')?.click()}
          className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline"
        >
          Explore Pub/Sub Patterns →
        </button>
      </div>
    </div>
  </div>
);

// I'll continue with the remaining content components...
const ConfigurationContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Configuration</h1>
    
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Configuration File (blipmq.toml)</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          BlipMQ uses TOML configuration files for comprehensive broker settings. Here's a complete example with all options:
        </p>
        
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">blipmq.toml</span>
            <button
              onClick={() => copyToClipboard(`[server]
bind_addr = "127.0.0.1:7878"
max_connections = 256
max_message_size_bytes = 1048576

[metrics]
bind_addr = "127.0.0.1:9090"

[queues]
topic_capacity = 1024
subscriber_capacity = 512
overflow_policy = "drop_oldest"

[delivery]
max_batch = 64
max_batch_bytes = 262144 # 256 KiB
flush_interval_ms = 1
fanout_shards = 0 # auto
default_ttl_ms = 0

[wal]
enabled = true
segment_size_mb = 64
max_segments = 10
fsync_interval_ms = 100

[auth]
enabled = false
api_key = ""`, 'full-config')}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {copiedCode === 'full-config' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
            <pre className="text-green-400 text-sm">
{`[server]
bind_addr = "127.0.0.1:7878"
max_connections = 256
max_message_size_bytes = 1048576

[metrics]
bind_addr = "127.0.0.1:9090"

[queues]
topic_capacity = 1024
subscriber_capacity = 512
overflow_policy = "drop_oldest"

[delivery]
max_batch = 64
max_batch_bytes = 262144 # 256 KiB
flush_interval_ms = 1
fanout_shards = 0 # auto
default_ttl_ms = 0

[wal]
enabled = true
segment_size_mb = 64
max_segments = 10
fsync_interval_ms = 100

[auth]
enabled = false
api_key = ""`}
            </pre>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Configuration Sections</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">[server] - Core Settings</h3>
            <div className="text-sm text-gray-600 dark:text-dark-muted space-y-1">
              <p><code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">bind_addr</code> - TCP address to bind to</p>
              <p><code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">max_connections</code> - Connection limit</p>
              <p><code className="bg-blue-200 dark:bg-blue-800 px-1 rounded">max_message_size_bytes</code> - Message size limit</p>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">[queues] - Queue Management</h3>
            <div className="text-sm text-gray-600 dark:text-dark-muted space-y-1">
              <p><code className="bg-green-200 dark:bg-green-800 px-1 rounded">topic_capacity</code> - Per-topic buffer size</p>
              <p><code className="bg-green-200 dark:bg-green-800 px-1 rounded">subscriber_capacity</code> - Per-subscriber queue</p>
              <p><code className="bg-green-200 dark:bg-green-800 px-1 rounded">overflow_policy</code> - drop_oldest/drop_new/block</p>
            </div>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800/30 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">[delivery] - Performance Tuning</h3>
            <div className="text-sm text-gray-600 dark:text-dark-muted space-y-1">
              <p><code className="bg-purple-200 dark:bg-purple-800 px-1 rounded">max_batch</code> - Messages per batch</p>
              <p><code className="bg-purple-200 dark:bg-purple-800 px-1 rounded">flush_interval_ms</code> - Batch flush timing</p>
              <p><code className="bg-purple-200 dark:bg-purple-800 px-1 rounded">fanout_shards</code> - Concurrency level</p>
            </div>
          </div>
          
          <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">[wal] - Durability</h3>
            <div className="text-sm text-gray-600 dark:text-dark-muted space-y-1">
              <p><code className="bg-orange-200 dark:bg-orange-800 px-1 rounded">enabled</code> - Enable WAL logging</p>
              <p><code className="bg-orange-200 dark:bg-orange-800 px-1 rounded">segment_size_mb</code> - Log file size</p>
              <p><code className="bg-orange-200 dark:bg-orange-800 px-1 rounded">fsync_interval_ms</code> - Sync frequency</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/30 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">🔧 Performance Tuning Tips</h3>
        <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
          <li>• Increase <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">fanout_shards</code> to match CPU cores for high-throughput</li>
          <li>• Set <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">flush_interval_ms = 0</code> for ultra-low latency</li>
          <li>• Use <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">overflow_policy = "drop_oldest"</code> for real-time systems</li>
          <li>• Disable WAL with <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">enabled = false</code> for maximum speed</li>
        </ul>
      </div>
    </div>
  </div>
);

const PubSubContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Publish/Subscribe Patterns</h1>
    
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Topic-Based Messaging</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-6">
          BlipMQ implements a topic-based publish/subscribe model where publishers send messages to named topics 
          and subscribers receive messages from topics they're interested in. This decouples publishers from 
          subscribers, allowing for flexible and scalable communication patterns.
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-4 mb-6">
          <div className="flex items-start">
            <MessageSquare className="h-5 w-5 text-blue-500 mt-0.5 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">Core Concept</h3>
              <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                Topics are lightweight, created on-demand when first published to. No pre-configuration required.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Topic Naming Conventions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4">✅ Best Practices</h3>
            <ul className="space-y-2 text-gray-600 dark:text-dark-muted text-sm">
              <li>• Use hierarchical structure: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">sensor/temperature/room1</code></li>
              <li>• Keep names descriptive: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">events/user/login</code></li>
              <li>• Use consistent casing: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">metrics/cpu/usage</code></li>
              <li>• Separate with forward slashes: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">logs/app/error</code></li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4">❌ Avoid</h3>
            <ul className="space-y-2 text-gray-600 dark:text-dark-muted text-sm">
              <li>• Special characters: <code className="bg-red-100 dark:bg-red-900/20 px-1 rounded">topic@#$</code></li>
              <li>• Spaces: <code className="bg-red-100 dark:bg-red-900/20 px-1 rounded">my topic name</code></li>
              <li>• Very long names (&gt;255 chars)</li>
              <li>• Starting with numbers: <code className="bg-red-100 dark:bg-red-900/20 px-1 rounded">123topic</code></li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Publishing Messages</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">Publishers send messages to topics without knowing who (if anyone) will receive them.</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Basic Publishing</h3>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('blipmq-cli --addr 127.0.0.1:7878 pub "sensors/temperature" "22.5"', 'basic-pub')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'basic-pub' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`# Publish a simple text message
blipmq-cli --addr 127.0.0.1:7878 pub "sensors/temperature" "22.5"`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Publishing with TTL</h3>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('blipmq-cli --addr 127.0.0.1:7878 pub "alerts/critical" --ttl 30000 "High CPU usage detected"', 'ttl-pub')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'ttl-pub' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`# Publish with 30-second TTL
blipmq-cli --addr 127.0.0.1:7878 pub "alerts/critical" --ttl 30000 "High CPU usage detected"`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Publishing Binary Data</h3>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('blipmq-cli --addr 127.0.0.1:7878 pubfile "data/binary" data.jpg', 'binary-pub')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'binary-pub' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`# Publish file contents as binary
blipmq-cli --addr 127.0.0.1:7878 pubfile "data/binary" data.jpg`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Subscribing to Topics</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">Subscribers connect to topics and receive all messages published to those topics while connected.</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Basic Subscription</h3>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('blipmq-cli --addr 127.0.0.1:7878 sub "sensors/temperature"', 'basic-sub')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'basic-sub' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`# Subscribe to temperature sensor data
blipmq-cli --addr 127.0.0.1:7878 sub "sensors/temperature"`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Limited Subscription</h3>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('blipmq-cli --addr 127.0.0.1:7878 sub "logs/error" --count 10', 'limited-sub')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'limited-sub' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`# Subscribe and exit after 10 messages
blipmq-cli --addr 127.0.0.1:7878 sub "logs/error" --count 10`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Message Delivery Semantics</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">QoS 0: At Most Once</h3>
            <ul className="text-green-700 dark:text-green-300 text-sm space-y-2">
              <li>• <strong>Speed</strong>: Fastest delivery, minimal overhead</li>
              <li>• <strong>Reliability</strong>: Messages may be lost</li>
              <li>• <strong>Use Case</strong>: Real-time data, sensor readings</li>
              <li>• <strong>Guarantee</strong>: Message delivered 0 or 1 times</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">QoS 1: At Least Once</h3>
            <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-2">
              <li>• <strong>Reliability</strong>: Guaranteed delivery with ACK</li>
              <li>• <strong>Overhead</strong>: Requires acknowledgments</li>
              <li>• <strong>Use Case</strong>: Critical events, commands</li>
              <li>• <strong>Guarantee</strong>: Message delivered 1 or more times</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Common Patterns</h2>
        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-indigo-600" />
              Fan-out Pattern
            </h3>
            <p className="text-gray-600 dark:text-dark-muted mb-4">
              One publisher sends messages to multiple subscribers. Perfect for broadcasting events or notifications.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded p-3 text-sm font-mono">
              Publisher → Topic → [Subscriber 1, Subscriber 2, Subscriber 3, ...]
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3 flex items-center gap-2">
              <Network className="w-5 h-5 text-green-600" />
              Load Balancing Pattern
            </h3>
            <p className="text-gray-600 dark:text-dark-muted mb-4">
              Multiple subscribers on the same topic. Each message is delivered to all subscribers (not load balanced).
            </p>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded p-3 text-sm font-mono">
              Publisher → Topic → All Subscribers (each gets copy)
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3 flex items-center gap-2">
              <Activity className="w-5 h-5 text-purple-600" />
              Request-Response Pattern
            </h3>
            <p className="text-gray-600 dark:text-dark-muted mb-4">
              Use two topics: one for requests, one for responses. Include correlation IDs to match responses.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded p-3 text-sm font-mono">
              Client → "requests/service" → Service<br/>
              Service → "responses/client_id" → Client
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/30 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">💡 Best Practices</h3>
        <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
          <li>• Keep topic names short but descriptive</li>
          <li>• Use consistent naming conventions across your application</li>
          <li>• Consider message size - smaller messages = better performance</li>
          <li>• Use appropriate TTL values to prevent message accumulation</li>
          <li>• Monitor subscriber queues to detect processing bottlenecks</li>
          <li>• Use QoS 1 sparingly - only for critical messages</li>
        </ul>
      </div>
    </div>
  </div>
);

const DurabilityContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Durability & Write-Ahead Log</h1>
    
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Write-Ahead Log (WAL) Overview</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-6">
          BlipMQ's Write-Ahead Log provides message durability by persisting messages to disk before acknowledging 
          successful publication. This ensures that messages survive broker restarts and system failures.
        </p>
        
        <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 p-4 mb-6">
          <div className="flex items-start">
            <HardDrive className="h-5 w-5 text-indigo-500 mt-0.5 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-indigo-800 dark:text-indigo-200">Durability Guarantee</h3>
              <p className="mt-2 text-sm text-indigo-700 dark:text-indigo-300">
                Once a message is acknowledged by the broker, it's guaranteed to survive restarts and be delivered to subscribers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">WAL Configuration</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          Configure WAL behavior in your blipmq.toml file:
        </p>
        
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">blipmq.toml - WAL Section</span>
            <button
              onClick={() => copyToClipboard(`[wal]
# Enable Write-Ahead Log for message durability
enabled = true

# Size of each WAL segment file in megabytes
segment_size_mb = 64

# Maximum number of WAL segment files to keep
max_segments = 10

# How often to sync WAL writes to disk in milliseconds
fsync_interval_ms = 100

# Directory to store WAL files
wal_dir = "./wal"`, 'wal-config')}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {copiedCode === 'wal-config' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
            <pre className="text-green-400 text-sm">
{`[wal]
# Enable Write-Ahead Log for message durability
enabled = true

# Size of each WAL segment file in megabytes
segment_size_mb = 64

# Maximum number of WAL segment files to keep
max_segments = 10

# How often to sync WAL writes to disk in milliseconds
fsync_interval_ms = 100

# Directory to store WAL files
wal_dir = "./wal"`}
            </pre>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">WAL Architecture</h2>
        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Segmented Storage</h3>
            <p className="text-gray-600 dark:text-dark-muted mb-4">
              WAL uses multiple segment files to manage disk usage and improve performance:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded p-4 space-y-2 font-mono text-sm">
              <div>./wal/segment_000001.log  ← Active segment (current writes)</div>
              <div>./wal/segment_000002.log  ← Previous segment</div>
              <div>./wal/segment_000003.log  ← Older segment</div>
              <div className="text-gray-500">... (up to max_segments)</div>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Write Process</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400">1</div>
                <div>
                  <strong className="text-gray-900 dark:text-dark-foreground">Message Received</strong>
                  <p className="text-gray-600 dark:text-dark-muted text-sm">Broker receives publish request</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400">2</div>
                <div>
                  <strong className="text-gray-900 dark:text-dark-foreground">WAL Write</strong>
                  <p className="text-gray-600 dark:text-dark-muted text-sm">Message written to active WAL segment with CRC32 checksum</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400">3</div>
                <div>
                  <strong className="text-gray-900 dark:text-dark-foreground">Fsync (Optional)</strong>
                  <p className="text-gray-600 dark:text-dark-muted text-sm">Periodic sync to disk based on fsync_interval_ms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-sm font-semibold text-green-600 dark:text-green-400">4</div>
                <div>
                  <strong className="text-gray-900 dark:text-dark-foreground">Acknowledge</strong>
                  <p className="text-gray-600 dark:text-dark-muted text-sm">Publish acknowledgment sent to client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Recovery and Replay</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          When BlipMQ restarts, it automatically replays unacknowledged messages from the WAL:
        </p>
        
        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Startup Recovery Process</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Scan WAL directory for segment files</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Validate each segment using CRC32 checksums</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Identify unacknowledged messages</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Replay messages to appropriate subscriber queues</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Resume normal operation</span>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/30 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Recovery Time</h4>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              Recovery time depends on WAL size and number of unacknowledged messages. 
              Smaller segment sizes and regular cleanup reduce recovery time.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Performance Considerations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">High Throughput</h3>
            <ul className="text-green-700 dark:text-green-300 text-sm space-y-2">
              <li>• <strong>Larger segments</strong>: 128MB+ for fewer file operations</li>
              <li>• <strong>Longer fsync intervals</strong>: 1000ms for batch writes</li>
              <li>• <strong>SSD storage</strong>: Fast random and sequential I/O</li>
              <li>• <strong>More segments</strong>: Distribute I/O load</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">Low Latency</h3>
            <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-2">
              <li>• <strong>Frequent fsync</strong>: 10-50ms for durability</li>
              <li>• <strong>Smaller segments</strong>: 32MB for faster recovery</li>
              <li>• <strong>NVMe storage</strong>: Ultra-low write latency</li>
              <li>• <strong>Direct I/O</strong>: Bypass OS page cache</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">WAL Management Commands</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          Use these commands to inspect and manage WAL files:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Check WAL Status</h3>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('blipmq wal-status --config blipmq.toml', 'wal-status')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'wal-status' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`# Show WAL statistics and segment information
blipmq wal-status --config blipmq.toml`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Compact WAL</h3>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('blipmq wal-compact --config blipmq.toml', 'wal-compact')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'wal-compact' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`# Remove acknowledged entries and compact segments
blipmq wal-compact --config blipmq.toml`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Verify WAL Integrity</h3>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('blipmq wal-verify --config blipmq.toml --repair', 'wal-verify')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'wal-verify' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`# Verify checksums and repair corrupted segments
blipmq wal-verify --config blipmq.toml --repair`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Disabling WAL</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          For maximum performance in non-critical scenarios, you can disable WAL:
        </p>
        
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Disable WAL Configuration</span>
            <button
              onClick={() => copyToClipboard('[wal]\nenabled = false', 'disable-wal')}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {copiedCode === 'disable-wal' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
            <pre className="text-green-400 text-sm">
{`[wal]
enabled = false`}
            </pre>
          </div>
        </div>
        
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">⚠️ Warning: No Durability</h4>
          <p className="text-red-700 dark:text-red-300 text-sm">
            With WAL disabled, messages exist only in memory and will be lost on broker restart or crash. 
            Only use this for high-throughput scenarios where message loss is acceptable.
          </p>
        </div>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/30 rounded-lg p-6">
        <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">💡 WAL Best Practices</h3>
        <ul className="text-indigo-700 dark:text-indigo-300 text-sm space-y-1">
          <li>• Use dedicated storage volumes for WAL files</li>
          <li>• Monitor disk space usage and set up alerts</li>
          <li>• Regularly compact WAL to remove acknowledged entries</li>
          <li>• Test recovery procedures in non-production environments</li>
          <li>• Consider RAID configurations for additional redundancy</li>
          <li>• Tune segment sizes based on message volume and recovery requirements</li>
        </ul>
      </div>
    </div>
  </div>
);

const PerformanceContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Performance Tuning</h1>
    
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Performance Overview</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-6">
          BlipMQ is designed for high performance out of the box, but can be tuned for specific workloads. 
          This guide covers optimization strategies for different scenarios: ultra-low latency, high throughput, 
          and memory-constrained environments.
        </p>
        
        <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 p-4 mb-6">
          <div className="flex items-start">
            <Cpu className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-green-800 dark:text-green-200">Default Performance</h3>
              <p className="mt-2 text-sm text-green-700 dark:text-green-300">
                Out of the box, BlipMQ can handle 100K+ messages/second with sub-millisecond latency on modern hardware.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Performance Profiles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              Ultra-Low Latency
            </h3>
            <ul className="text-gray-600 dark:text-dark-muted text-sm space-y-2">
              <li>• Sub-millisecond delivery</li>
              <li>• Immediate flushing</li>
              <li>• No batching</li>
              <li>• Memory-only operation</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              High Throughput
            </h3>
            <ul className="text-gray-600 dark:text-dark-muted text-sm space-y-2">
              <li>• 1M+ messages/second</li>
              <li>• Large batches</li>
              <li>• Multiple fanout shards</li>
              <li>• Optimized for bandwidth</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4 flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-green-600" />
              Resource Efficient
            </h3>
            <ul className="text-gray-600 dark:text-dark-muted text-sm space-y-2">
              <li>• Minimal memory usage</li>
              <li>• Small queue sizes</li>
              <li>• Conservative batching</li>
              <li>• Perfect for edge devices</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Configuration Templates</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-6">
          Copy these optimized configurations for different use cases:
        </p>
        
        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              Ultra-Low Latency Configuration
            </h3>
            <p className="text-gray-600 dark:text-dark-muted mb-4">
              Optimized for trading systems, gaming, and real-time control systems:
            </p>
            <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">ultra-low-latency.toml</span>
                <button
                  onClick={() => copyToClipboard(`[server]
bind_addr = "127.0.0.1:7878"
max_connections = 1024
max_message_size_bytes = 65536  # 64KB max

[queues]
topic_capacity = 256
subscriber_capacity = 128
overflow_policy = "drop_oldest"

[delivery]
max_batch = 1  # No batching
max_batch_bytes = 65536
flush_interval_ms = 0  # Immediate
fanout_shards = 0  # Auto-detect
default_ttl_ms = 1000  # 1 second

[wal]
enabled = false  # Memory-only for speed

[performance]
tcp_nodelay = true
tcp_recv_buffer = 262144  # 256KB
tcp_send_buffer = 262144  # 256KB
cpu_affinity = true`, 'ultra-latency-config')}
                  className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {copiedCode === 'ultra-latency-config' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
                <pre className="text-green-400 text-xs">
{`[server]
bind_addr = "127.0.0.1:7878"
max_connections = 1024
max_message_size_bytes = 65536  # 64KB max

[queues]
topic_capacity = 256
subscriber_capacity = 128
overflow_policy = "drop_oldest"

[delivery]
max_batch = 1  # No batching
max_batch_bytes = 65536
flush_interval_ms = 0  # Immediate
fanout_shards = 0  # Auto-detect
default_ttl_ms = 1000  # 1 second

[wal]
enabled = false  # Memory-only for speed

[performance]
tcp_nodelay = true
tcp_recv_buffer = 262144  # 256KB
tcp_send_buffer = 262144  # 256KB
cpu_affinity = true`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              High Throughput Configuration
            </h3>
            <p className="text-gray-600 dark:text-dark-muted mb-4">
              Optimized for log aggregation, metrics collection, and bulk data processing:
            </p>
            <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">high-throughput.toml</span>
                <button
                  onClick={() => copyToClipboard(`[server]
bind_addr = "0.0.0.0:7878"
max_connections = 10000
max_message_size_bytes = 10485760  # 10MB

[queues]
topic_capacity = 10000
subscriber_capacity = 5000
overflow_policy = "drop_oldest"

[delivery]
max_batch = 1000  # Large batches
max_batch_bytes = 10485760  # 10MB
flush_interval_ms = 50  # 50ms batching
fanout_shards = 16  # Match CPU cores
default_ttl_ms = 300000  # 5 minutes

[wal]
enabled = true
segment_size_mb = 256  # Large segments
max_segments = 50
fsync_interval_ms = 1000  # 1 second

[performance]
allocator = "mimalloc"
tcp_recv_buffer = 1048576  # 1MB
tcp_send_buffer = 1048576  # 1MB`, 'high-throughput-config')}
                  className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {copiedCode === 'high-throughput-config' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
                <pre className="text-green-400 text-xs">
{`[server]
bind_addr = "0.0.0.0:7878"
max_connections = 10000
max_message_size_bytes = 10485760  # 10MB

[queues]
topic_capacity = 10000
subscriber_capacity = 5000
overflow_policy = "drop_oldest"

[delivery]
max_batch = 1000  # Large batches
max_batch_bytes = 10485760  # 10MB
flush_interval_ms = 50  # 50ms batching
fanout_shards = 16  # Match CPU cores
default_ttl_ms = 300000  # 5 minutes

[wal]
enabled = true
segment_size_mb = 256  # Large segments
max_segments = 50
fsync_interval_ms = 1000  # 1 second

[performance]
allocator = "mimalloc"
tcp_recv_buffer = 1048576  # 1MB
tcp_send_buffer = 1048576  # 1MB`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3 flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-green-600" />
              Resource Efficient Configuration
            </h3>
            <p className="text-gray-600 dark:text-dark-muted mb-4">
              Optimized for IoT gateways, embedded systems, and memory-constrained environments:
            </p>
            <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">resource-efficient.toml</span>
                <button
                  onClick={() => copyToClipboard(`[server]
bind_addr = "127.0.0.1:7878"
max_connections = 64
max_message_size_bytes = 4096  # 4KB

[queues]
topic_capacity = 64
subscriber_capacity = 32
overflow_policy = "drop_new"

[delivery]
max_batch = 16  # Small batches
max_batch_bytes = 8192  # 8KB
flush_interval_ms = 10  # Frequent flushes
fanout_shards = 1  # Single thread
default_ttl_ms = 30000  # 30 seconds

[wal]
enabled = true
segment_size_mb = 8  # Small segments
max_segments = 3
fsync_interval_ms = 500
wal_dir = "/tmp/blipmq-wal"  # Use tmpfs if available

[performance]
allocator = "system"
tcp_recv_buffer = 16384  # 16KB
tcp_send_buffer = 16384  # 16KB`, 'resource-efficient-config')}
                  className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {copiedCode === 'resource-efficient-config' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
                <pre className="text-green-400 text-xs">
{`[server]
bind_addr = "127.0.0.1:7878"
max_connections = 64
max_message_size_bytes = 4096  # 4KB

[queues]
topic_capacity = 64
subscriber_capacity = 32
overflow_policy = "drop_new"

[delivery]
max_batch = 16  # Small batches
max_batch_bytes = 8192  # 8KB
flush_interval_ms = 10  # Frequent flushes
fanout_shards = 1  # Single thread
default_ttl_ms = 30000  # 30 seconds

[wal]
enabled = true
segment_size_mb = 8  # Small segments
max_segments = 3
fsync_interval_ms = 500
wal_dir = "/tmp/blipmq-wal"  # Use tmpfs if available

[performance]
allocator = "system"
tcp_recv_buffer = 16384  # 16KB
tcp_send_buffer = 16384  # 16KB`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">System-Level Optimizations</h2>
        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Operating System Tuning</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">Linux Kernel Parameters</h4>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
                  <button
                    onClick={() => copyToClipboard(`# /etc/sysctl.d/99-blipmq.conf

# Network optimizations
net.core.rmem_default = 262144
net.core.rmem_max = 16777216
net.core.wmem_default = 262144
net.core.wmem_max = 16777216
net.core.netdev_max_backlog = 5000
net.ipv4.tcp_rmem = 4096 262144 16777216
net.ipv4.tcp_wmem = 4096 262144 16777216

# File descriptor limits
fs.file-max = 1048576

# Virtual memory
vm.swappiness = 1
vm.dirty_ratio = 15
vm.dirty_background_ratio = 5`, 'linux-tuning')}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'linux-tuning' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <pre className="text-green-400 text-sm">
{`# /etc/sysctl.d/99-blipmq.conf

# Network optimizations
net.core.rmem_default = 262144
net.core.rmem_max = 16777216
net.core.wmem_default = 262144
net.core.wmem_max = 16777216
net.core.netdev_max_backlog = 5000
net.ipv4.tcp_rmem = 4096 262144 16777216
net.ipv4.tcp_wmem = 4096 262144 16777216

# File descriptor limits
fs.file-max = 1048576

# Virtual memory
vm.swappiness = 1
vm.dirty_ratio = 15
vm.dirty_background_ratio = 5`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-2">Process Limits</h4>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
                  <button
                    onClick={() => copyToClipboard(`# /etc/security/limits.d/blipmq.conf
blipmq soft nofile 1048576
blipmq hard nofile 1048576
blipmq soft nproc 65536
blipmq hard nproc 65536
blipmq soft memlock unlimited
blipmq hard memlock unlimited`, 'process-limits')}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'process-limits' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <pre className="text-green-400 text-sm">
{`# /etc/security/limits.d/blipmq.conf
blipmq soft nofile 1048576
blipmq hard nofile 1048576
blipmq soft nproc 65536
blipmq hard nproc 65536
blipmq soft memlock unlimited
blipmq hard memlock unlimited`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Hardware Recommendations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4">CPU & Memory</h3>
            <ul className="text-gray-600 dark:text-dark-muted text-sm space-y-2">
              <li><strong>CPU</strong>: Modern x86-64 with high single-thread performance</li>
              <li><strong>Cores</strong>: 8+ cores for high-throughput workloads</li>
              <li><strong>RAM</strong>: 8GB+ for large message queues</li>
              <li><strong>Cache</strong>: Large L3 cache improves message throughput</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-4">Storage & Network</h3>
            <ul className="text-gray-600 dark:text-dark-muted text-sm space-y-2">
              <li><strong>Storage</strong>: NVMe SSD for WAL files</li>
              <li><strong>Network</strong>: 10GbE+ for high-throughput scenarios</li>
              <li><strong>Latency</strong>: Low-latency network cards for trading systems</li>
              <li><strong>Bandwidth</strong>: Consider message size × throughput</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Monitoring Performance</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          Use these commands and metrics to monitor BlipMQ performance:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Real-time Metrics</h3>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('curl -s http://127.0.0.1:9090/metrics | grep blipmq_', 'metrics-monitor')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'metrics-monitor' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`# Monitor key metrics
curl -s http://127.0.0.1:9090/metrics | grep blipmq_`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-3">Performance Test</h3>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
              <button
                onClick={() => copyToClipboard('# Terminal 1: Start subscriber\nblipmq-cli --addr 127.0.0.1:7878 sub perf_test --count 100000\n\n# Terminal 2: Run throughput test\nfor i in {1..100000}; do\n  echo "Message $i" | blipmq-cli --addr 127.0.0.1:7878 pub perf_test --ttl 0 -\ndone', 'perf-test')}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'perf-test' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-green-400 text-sm">
{`# Terminal 1: Start subscriber
blipmq-cli --addr 127.0.0.1:7878 sub perf_test --count 100000

# Terminal 2: Run throughput test
for i in {1..100000}; do
  echo "Message $i" | blipmq-cli --addr 127.0.0.1:7878 pub perf_test --ttl 0 -
done`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30 rounded-lg p-6">
        <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🎯 Performance Tuning Tips</h3>
        <ul className="text-orange-700 dark:text-orange-300 text-sm space-y-1">
          <li>• Start with default settings and measure baseline performance</li>
          <li>• Tune one parameter at a time and measure the impact</li>
          <li>• Consider your workload: latency vs throughput vs resource usage</li>
          <li>• Use appropriate hardware for your performance requirements</li>
          <li>• Monitor system resources (CPU, memory, disk, network) under load</li>
          <li>• Test configuration changes in a staging environment first</li>
          <li>• Document your optimizations for future reference</li>
        </ul>
      </div>
    </div>
  </div>
);

const DeploymentContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Deployment Guide</h1>
    <p className="text-gray-600 dark:text-dark-muted">
      Deploy BlipMQ in production environments including Docker, Kubernetes, and systemd configurations.
    </p>
    <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg">
      <p className="text-blue-800 dark:text-blue-200">
        📝 This section is under development. Check back soon for deployment documentation!
      </p>
    </div>
  </div>
);

const CLIReferenceContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">CLI Reference</h1>
    
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Broker Commands</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Command</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Description</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Example</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-dark-muted">
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">start</td>
                <td className="py-3 px-4">Start the message broker</td>
                <td className="py-3 px-4 font-mono text-xs">blipmq start --config blipmq.toml</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--bind</td>
                <td className="py-3 px-4">Override bind address</td>
                <td className="py-3 px-4 font-mono text-xs">blipmq start --bind 0.0.0.0:7878</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--version</td>
                <td className="py-3 px-4">Show version information</td>
                <td className="py-3 px-4 font-mono text-xs">blipmq --version</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Client Commands (blipmq-cli)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Command</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Description</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Example</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-dark-muted">
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">pub</td>
                <td className="py-3 px-4">Publish message to topic</td>
                <td className="py-3 px-4 font-mono text-xs">blipmq-cli pub chat "Hello"</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">pubfile</td>
                <td className="py-3 px-4">Publish file contents</td>
                <td className="py-3 px-4 font-mono text-xs">blipmq-cli pubfile logs data.json</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">sub</td>
                <td className="py-3 px-4">Subscribe to topic</td>
                <td className="py-3 px-4 font-mono text-xs">blipmq-cli sub chat</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">unsub</td>
                <td className="py-3 px-4">Unsubscribe from topic</td>
                <td className="py-3 px-4 font-mono text-xs">blipmq-cli unsub chat</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">--count</td>
                <td className="py-3 px-4">Exit after N messages</td>
                <td className="py-3 px-4 font-mono text-xs">blipmq-cli sub chat --count 10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

const ProtocolContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Protocol Specification</h1>
    <p className="text-gray-600 dark:text-dark-muted">
      BlipMQ uses a TCP-based FlatBuffers protocol for efficient serialization and network communication.
    </p>
    <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg">
      <p className="text-blue-800 dark:text-blue-200">
        📝 This section is under development. Check back soon for complete protocol documentation!
      </p>
    </div>
  </div>
);

const MetricsContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Metrics & Monitoring</h1>
    
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Prometheus Metrics</h2>
        <p className="text-gray-600 dark:text-dark-muted mb-4">
          BlipMQ exposes Prometheus-compatible metrics on the `/metrics` endpoint (default port 9090).
        </p>
        
        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative group">
          <button
            onClick={() => copyToClipboard('curl http://127.0.0.1:9090/metrics', 'metrics-curl')}
            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
          >
            {copiedCode === 'metrics-curl' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
          <pre className="text-green-400 text-sm">
{`curl http://127.0.0.1:9090/metrics`}
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark-foreground mb-4">Available Metrics</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-dark-foreground border-b border-gray-200 dark:border-gray-700">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-dark-muted">
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">blipmq_published</td>
                <td className="py-3 px-4">Counter</td>
                <td className="py-3 px-4">Total messages published</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">blipmq_enqueued</td>
                <td className="py-3 px-4">Counter</td>
                <td className="py-3 px-4">Messages enqueued to subscribers</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">blipmq_dropped_ttl</td>
                <td className="py-3 px-4">Counter</td>
                <td className="py-3 px-4">Messages dropped due to TTL expiration</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">blipmq_dropped_sub_queue_full</td>
                <td className="py-3 px-4">Counter</td>
                <td className="py-3 px-4">Messages dropped due to full subscriber queues</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">blipmq_flush_bytes</td>
                <td className="py-3 px-4">Counter</td>
                <td className="py-3 px-4">Total bytes flushed to network</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4 font-mono">blipmq_flush_batches</td>
                <td className="py-3 px-4">Counter</td>
                <td className="py-3 px-4">Total batches flushed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

const TroubleshootingContent = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Troubleshooting</h1>
    <p className="text-gray-600 dark:text-dark-muted">
      Common issues and their solutions when running BlipMQ.
    </p>
    <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg">
      <p className="text-blue-800 dark:text-blue-200">
        📝 This section is under development. Check back soon for troubleshooting guides!
      </p>
    </div>
  </div>
);

const IoTEdgeContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">IoT & Edge Computing</h1>
    <p className="text-gray-600 dark:text-dark-muted">
      Using BlipMQ in IoT gateways, edge devices, and sensor networks.
    </p>
    <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg">
      <p className="text-blue-800 dark:text-blue-200">
        📝 This section is under development. Check back soon for IoT examples!
      </p>
    </div>
  </div>
);

const MicroservicesContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Microservices Communication</h1>
    <p className="text-gray-600 dark:text-dark-muted">
      Implementing event-driven microservices with BlipMQ for service-to-service communication.
    </p>
    <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg">
      <p className="text-blue-800 dark:text-blue-200">
        📝 This section is under development. Check back soon for microservices examples!
      </p>
    </div>
  </div>
);

const LoggingContent = ({ copyToClipboard, copiedCode }: { copyToClipboard: (text: string, id: string) => void; copiedCode: string }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-foreground mb-8">Log Aggregation</h1>
    <p className="text-gray-600 dark:text-dark-muted">
      Using BlipMQ for high-performance log aggregation and real-time log streaming.
    </p>
    <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg">
      <p className="text-blue-800 dark:text-blue-200">
        📝 This section is under development. Check back soon for logging examples!
      </p>
    </div>
  </div>
);

export default BlipMQDocs;