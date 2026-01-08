import { motion } from 'motion/react';
import { Database, Fingerprint, Brain, Search, Shield, Layers, GitBranch } from 'lucide-react';

const Ucfp = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full mb-6">
              <span className="text-indigo-700 dark:text-indigo-300 text-sm font-semibold">🔍 Universal Content Fingerprinting</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-dark-foreground">
              Deterministic, perceptual & semantic fingerprints
              <span className="block text-indigo-600 dark:text-indigo-400">for your content pipeline</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-dark-muted mb-8"
          >
            UCFP is an open-source Rust framework for generating reproducible, meaning-aware fingerprints across
            your content pipeline, from raw payloads to search-ready indexes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >
            <a
              href="https://github.com/bravo1goingdark/ucfp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-indigo-600 dark:bg-indigo-500 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 dark:hover:bg-indigo-600 transition inline-block text-center"
            >
              View on GitHub
            </a>
            <a
              href="https://github.com/bravo1goingdark/ucfp#quickstart"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold rounded-lg transition inline-block text-center"
            >
              Read Quickstart
            </a>
          </motion.div>

        </div>

        {/* Right Side - Who it's for */}
        <div className="w-full flex flex-col gap-4">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-center text-sm md:text-2xl font-bold tracking-tight text-indigo-800 dark:text-indigo-300 mb-4"
          >
            Built for data-heavy, content-rich systems
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/10 dark:to-blue-900/10 border border-indigo-200 dark:border-indigo-800/30 rounded-lg p-4"
            >
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-1">Dataset platforms</h4>
              <p className="text-xs text-gray-600 dark:text-dark-muted">
                Collapse duplicates, normalize feeds, and keep training corpora clean.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/10 dark:to-fuchsia-900/10 border border-purple-200 dark:border-purple-800/30 rounded-lg p-4"
            >
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <Fingerprint className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-1">Plagiarism & abuse SaaS</h4>
              <p className="text-xs text-gray-600 dark:text-dark-muted">
                Offer plagiarism and content-integrity checks to LMS, publishing, and research platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-200 dark:border-emerald-800/30 rounded-lg p-4"
            >
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-1">Content provenance SaaS</h4>
              <p className="text-xs text-gray-600 dark:text-dark-muted">
                Sell fingerprinting and audit trails to UGC, AI content, and compliance-heavy platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-sky-900/10 dark:to-cyan-900/10 border border-sky-200 dark:border-sky-800/30 rounded-lg p-4"
            >
              <div className="p-2 bg-sky-100 dark:bg-sky-900/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <Search className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-dark-foreground mb-1">Multimodal search SaaS</h4>
              <p className="text-xs text-gray-600 dark:text-dark-muted">
                Power hosted search APIs that blend exact, perceptual, and semantic matching.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap gap-6 text-sm mt-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full" />
              <span className="text-gray-600 dark:text-dark-muted">
                <strong className="text-gray-900 dark:text-dark-foreground">Deterministic</strong> ingest &amp; canonical text
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span className="text-gray-600 dark:text-dark-muted">
                <strong className="text-gray-900 dark:text-dark-foreground">Perceptual</strong> MinHash fingerprints
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-gray-600 dark:text-dark-muted">
                <strong className="text-gray-900 dark:text-dark-foreground">Semantic</strong> ONNX/API embeddings
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-gray-600 dark:text-dark-muted">
                <strong className="text-gray-900 dark:text-dark-foreground">Multimodal-ready</strong> across text, audio, image, video &amp; docs
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full" />
              <span className="text-gray-600 dark:text-dark-muted">
                <strong className="text-gray-900 dark:text-dark-foreground">Policy-aware matching</strong> with multi-tenant isolation &amp; score thresholds
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wide">
              📚 Core Use Cases
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-foreground">
              One pipeline, many workflows
            </h2>
            <p className="mt-3 text-gray-600 dark:text-dark-muted text-sm max-w-2xl mx-auto">
              UCFP is designed as a layered pipeline so you can adopt just what you need today
              and grow into perceptual and semantic stages over time.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {[{
            title: 'Dataset deduplication',
            desc: 'Deterministic ingest + canonical hashes collapse byte-identical or trivially modified submissions before downstream processing.',
            highlight: 'Clean training corpora & ETL feeds.',
          }, {
            title: 'Plagiarism & near-duplicate detection',
            desc: 'Token streams, shingles, and MinHash signatures reveal paraphrased overlaps and suspicious similarity across documents.',
            highlight: 'Content-aware similarity, not just checksums.',
          }, {
            title: 'Content provenance & auditing',
            desc: 'Stable IDs, canonical metadata, and perceptual fingerprints trace assets across crawlers, storage, and review tools.',
            highlight: 'Explain where content came from and how it changed.',
          }, {
            title: 'Multimodal and semantic search',
            desc: 'Canonical text and binary payloads feed into embeddings and a pluggable index, unlocking semantic and cross-modal retrieval.',
            highlight: 'Bring-your-own backend via ufp_index.',
          }, {
            title: 'AI safety & policy enforcement',
            desc: 'Fingerprint prompts, outputs, and training corpora to detect unsafe reuse, leaks, and policy violations over time.',
            highlight: 'Sell compliance and trust tooling to AI-native products.',
          }, {
            title: 'Hosted similarity APIs',
            desc: 'Expose near-duplicate and semantic search as an API for other teams and customers without sharing raw data.',
            highlight: 'Turn UCFP into a metered SaaS feature.',
          }].map((item, i) => (
            <motion.div
              key={item.title}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-dark-muted mb-3">{item.desc}</p>
              <p className="text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-900/20 px-3 py-1 rounded-full inline-block">
                {item.highlight}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pipeline Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wide">
            🧬 Layered Architecture
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-foreground">
            From raw payloads to search-ready fingerprints
          </h2>
          <p className="mt-3 text-gray-600 dark:text-dark-muted text-sm max-w-2xl mx-auto">
            Each layer is a standalone crate  ufp_ingest, ufp_canonical, ufp_perceptual, ufp_semantic, and ufp_index 
            wired together by the root ucfp crate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-full">
                <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-dark-foreground">Ingest</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-dark-muted mb-2">
              Validate metadata, normalize whitespace, strip control characters, and emit CanonicalIngestRecord.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Crate: ufp_ingest</p>
          </div>

          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                <GitBranch className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-dark-foreground">Canonical</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-dark-muted mb-2">
              Normalize Unicode (NFKC), apply casing rules, and turn text into token streams with byte offsets and SHA-256 hashes.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Crate: ufp_canonical</p>
          </div>

          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/20 rounded-full">
                <Fingerprint className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-dark-foreground">Perceptual</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-dark-muted mb-2">
              Build rolling-hash shingles, apply winnowing, and derive MinHash fingerprints tuned for near-duplicate detection.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Crate: ufp_perceptual</p>
          </div>

          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/20 rounded-full">
                <Brain className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-dark-foreground">Semantic</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-dark-muted mb-2">
              Turn canonical text into dense embeddings via ONNX or HTTP APIs, with deterministic stub tiers when models are offline.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Crate: ufp_semantic</p>
          </div>

          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-sky-100 dark:bg-sky-900/20 rounded-full">
                <Database className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-dark-foreground">Index</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-dark-muted mb-2">
              Store, retrieve, and search hashes, fingerprints, and embeddings using pluggable backends like in-memory or RocksDB.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Crate: ufp_index</p>
          </div>

          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-rose-100 dark:bg-rose-900/20 rounded-full">
                <Search className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-dark-foreground">Match</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-dark-muted mb-2">
              Turn free-text queries into canonical form, run semantic/perceptual/hybrid search over the index, and enforce multi-tenant match policies.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Crate: ufp_match</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/30 rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 flex items-center gap-2">
            <Fingerprint className="w-5 h-5" />
            End-to-end in one call
          </h3>
          <p className="text-sm text-indigo-800/90 dark:text-indigo-100 mb-3">
            Use helper functions like <code className="bg-indigo-100 dark:bg-indigo-900/40 px-1 rounded text-xs">process_record_with_perceptual</code>
            {' '}or{' '}
            <code className="bg-indigo-100 dark:bg-indigo-900/40 px-1 rounded text-xs">process_record_with_semantic</code> to wire the
            whole pipeline without touching each layer directly.
          </p>
          <p className="text-xs text-indigo-900/80 dark:text-indigo-200">
            When you need finer control, drop down into the individual crates and tune configs like
            <code className="mx-1 bg-indigo-100 dark:bg-indigo-900/40 px-1 rounded">IngestConfig</code>,
            <code className="mx-1 bg-indigo-100 dark:bg-indigo-900/40 px-1 rounded">CanonicalizeConfig</code>,
            <code className="mx-1 bg-indigo-100 dark:bg-indigo-900/40 px-1 rounded">PerceptualConfig</code>, and
            <code className="mx-1 bg-indigo-100 dark:bg-indigo-900/40 px-1 rounded">IndexConfig</code>.
          </p>
        </div>
      </section>

      {/* Metrics & Observability */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wide">
            📈 Metrics & Observability
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 dark:text-dark-foreground">
            See how the pipeline behaves in production
          </h2>
          <p className="mt-3 text-gray-600 dark:text-dark-muted text-sm max-w-2xl mx-auto">
            UCFP ships with hooks for structured logging and metrics, so you can understand ingest, canonical,
            perceptual, semantic, and index stages instead of treating them as a black box.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-base font-semibold text-gray-900 dark:text-dark-foreground mb-2">Pipeline metrics</h3>
            <p className="text-sm text-gray-600 dark:text-dark-muted mb-3">
              Plug in a <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">PipelineMetrics</code> recorder via
              {' '}<code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">set_pipeline_metrics</code> to track latency and
              outcomes for each stage. Use it to catch regressions and keep fingerprints reproducible at scale.
            </p>
          </div>

          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-6">
            <h3 className="text-base font-semibold text-gray-900 dark:text-dark-foreground mb-2">Structured logging</h3>
            <p className="text-sm text-gray-600 dark:text-dark-muted mb-3">
              Attach a logger with <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">set_pipeline_logger</code>
              and helpers like <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">KeyValueLogger</code> to emit
              grep-friendly key/value lines for every record: stage, status, latency, IDs, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Quickstart CTA */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Try UCFP locally in minutes</h2>
            <p className="text-sm md:text-base text-indigo-100 mb-4 max-w-xl">
              Clone the repo, run the examples, and inspect the fingerprints and embeddings produced from
              real text payloads. The README walks through <code className="bg-white/10 px-1 rounded">cargo run --example full_pipeline</code>
              {' '}and workspace layout.
            </p>
            <ul className="text-xs md:text-sm text-indigo-100 space-y-1">
              <li>• Rust-first design, no external services required.</li>
              <li>• Examples for ingest, canonical, perceptual, semantic, and index layers.</li>
              <li>• Metrics & logging hooks via <code className="bg-white/10 px-1 rounded">set_pipeline_metrics</code> and <code className="bg-white/10 px-1 rounded">set_pipeline_logger</code>.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto">
            <a
              href="https://github.com/bravo1goingdark/ucfp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow hover:bg-gray-100 transition text-center"
            >
              ⭐ Star on GitHub
            </a>
            <a
              href="https://github.com/bravo1goingdark/ucfp#quickstart"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-indigo-300 text-indigo-100 font-semibold rounded-lg hover:bg-indigo-800/40 transition text-center"
            >
              Open Quickstart
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ucfp;
