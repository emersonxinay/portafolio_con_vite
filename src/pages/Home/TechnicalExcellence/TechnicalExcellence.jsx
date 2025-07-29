import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Title from '../../../components/Title';

const TechnicalExcellence = () => {
  const [activeTab, setActiveTab] = useState('architecture');

  const technicalAreas = {
    architecture: {
      title: "System Architecture",
      icon: "fas fa-sitemap",
      gradient: "from-blue-500 to-cyan-500",
      content: [
        {
          title: "Microservices at Scale",
          description: "Designed distributed systems handling 500K+ concurrent users",
          metrics: ["99.9% Uptime", "< 50ms Latency", "Auto-scaling"],
          technologies: ["Docker", "Kubernetes", "Redis", "PostgreSQL"],
          code: `# High-performance API Gateway
@app.route('/api/v1/process')
@rate_limit(1000, per=60)  # 1000 req/min
@cache.memoize(timeout=300)
def process_request():
    with db_pool.connection() as conn:
        result = conn.execute(optimized_query)
    return jsonify(result)`
        },
        {
          title: "Database Optimization",
          description: "Query optimization reducing response time from 2s to 45ms",
          metrics: ["95% Query Improvement", "50TB+ Data", "Real-time Analytics"],
          technologies: ["PostgreSQL", "Redis", "ElasticSearch", "TimescaleDB"],
          code: `-- Optimized query with indexing strategy
CREATE INDEX CONCURRENTLY idx_user_activity 
ON user_events USING BTREE (user_id, created_at DESC);

-- Result: 2000ms → 45ms response time`
        }
      ]
    },
    development: {
      title: "Development Excellence",
      icon: "fas fa-code",
      gradient: "from-green-500 to-emerald-500",
      content: [
        {
          title: "Clean Code Practices",
          description: "Maintainable codebases with 90%+ test coverage",
          metrics: ["90% Test Coverage", "0.1% Bug Rate", "CI/CD Pipeline"],
          technologies: ["Python", "pytest", "GitHub Actions", "SonarQube"],
          code: `# Test-driven development approach
class TestUserService(unittest.TestCase):
    def test_user_creation_with_validation(self):
        user = UserService.create_user({
            'email': 'test@enterprise.com',
            'role': 'admin'
        })
        self.assertEqual(user.status, 'active')
        self.assertTrue(user.is_validated)`
        },
        {
          title: "API Design & Documentation",
          description: "RESTful APIs with comprehensive OpenAPI documentation",
          metrics: ["OpenAPI 3.0", "Auto-generated Docs", "SDK Generation"],
          technologies: ["FastAPI", "Swagger", "Postman", "Insomnia"],
          code: `# Self-documenting API with validation
@app.post("/users/", response_model=UserResponse)
async def create_user(
    user: UserCreate,
    db: Session = Depends(get_db)
) -> UserResponse:
    """Create new user with enterprise validation"""
    return UserService.create_validated_user(db, user)`
        }
      ]
    },
    performance: {
      title: "Performance Engineering",
      icon: "fas fa-tachometer-alt",
      gradient: "from-purple-500 to-pink-500",
      content: [
        {
          title: "Caching Strategies",
          description: "Multi-layer caching reducing database load by 80%",
          metrics: ["80% DB Load Reduction", "10x Faster Queries", "Smart Invalidation"],
          technologies: ["Redis", "Memcached", "CDN", "Application Cache"],
          code: `# Intelligent caching layer
@cache_with_tags(['user', 'profile'])
@expires(hours=24)
def get_user_profile(user_id: int):
    # Cache hit: 5ms, Cache miss: 45ms
    return db.query(User).filter(
        User.id == user_id
    ).options(joinedload(User.profile))`
        },
        {
          title: "Async Processing",
          description: "Background task processing with queue management",
          metrics: ["1M+ Tasks/Day", "Zero Message Loss", "Auto-retry Logic"],
          technologies: ["Celery", "RabbitMQ", "Redis Queue", "Asyncio"],
          code: `# Scalable background processing
@celery.task(bind=True, max_retries=3)
def process_enterprise_data(self, data_batch):
    try:
        # Process 10K records in parallel
        results = asyncio.run(
            process_batch_async(data_batch)
        )
        return results
    except Exception as exc:
        self.retry(countdown=60, exc=exc)`
        }
      ]
    },
    devops: {
      title: "DevOps & Infrastructure",
      icon: "fas fa-server",
      gradient: "from-orange-500 to-red-500",
      content: [
        {
          title: "Container Orchestration",
          description: "Kubernetes deployments with auto-scaling and monitoring",
          metrics: ["Zero-downtime Deploy", "Auto-scaling", "Health Monitoring"],
          technologies: ["Kubernetes", "Docker", "Helm", "Prometheus"],
          code: `# Kubernetes deployment with HPA
apiVersion: apps/v1
kind: Deployment
metadata:
  name: enterprise-api
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0`
        },
        {
          title: "CI/CD Pipeline",
          description: "Automated testing, building, and deployment pipeline",
          metrics: ["15min Deploy Time", "Automated Testing", "Rollback Ready"],
          technologies: ["GitHub Actions", "Jenkins", "ArgoCD", "Terraform"],
          code: `# Automated deployment pipeline
name: Enterprise CI/CD
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests with coverage
        run: pytest --cov=90%
      - name: Deploy to staging
        run: kubectl apply -f k8s/`
        }
      ]
    }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <Title title="💻 Technical Excellence" />
        
        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {Object.entries(technicalAreas).map(([key, area]) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === key
                  ? `bg-gradient-to-r ${area.gradient} text-white shadow-lg`
                  : 'bg-slate-800/50 text-zinc-300 hover:bg-slate-700/50 border border-slate-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={area.icon}></i>
              {area.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {technicalAreas[activeTab].content.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Left Side - Information */}
                  <div className="space-y-6">
                    <div>
                      <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${technicalAreas[activeTab].gradient} mb-3`}>
                        {item.title}
                      </h3>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {item.metrics.map((metric, i) => (
                        <div key={i} className="text-center p-3 bg-slate-800/50 rounded-xl border border-slate-700/30">
                          <div className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${technicalAreas[activeTab].gradient}`}>
                            {metric.split(' ')[0]}
                          </div>
                          <div className="text-xs text-zinc-400">
                            {metric.split(' ').slice(1).join(' ')}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 bg-gradient-to-r ${technicalAreas[activeTab].gradient} text-white text-sm rounded-full font-medium shadow-lg`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Code Example */}
                  <div className="bg-slate-900/50 rounded-2xl border border-slate-700/30 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700/30">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-zinc-400 text-sm ml-2">production_code.{activeTab === 'devops' ? 'yml' : 'py'}</span>
                    </div>
                    <div className="p-4 font-mono text-sm leading-relaxed">
                      <pre className="text-zinc-300 whitespace-pre-wrap">
                        <code dangerouslySetInnerHTML={{ __html: item.code }} />
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Ready to Scale Your Systems?
            </h3>
            <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how these technical skills can solve your enterprise challenges and drive business growth.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <i className="fas fa-comments mr-2"></i>
              Let's Talk Technical Solutions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalExcellence;