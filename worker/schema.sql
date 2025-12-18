-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'idle',
  last_build_at TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Builds table
CREATE TABLE IF NOT EXISTS builds (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL,
  version TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  duration INTEGER,
  timestamp TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects(id)
);

-- Deployments table
CREATE TABLE IF NOT EXISTS deployments (
  id TEXT PRIMARY KEY,
  build_id TEXT NOT NULL,
  server TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  progress INTEGER DEFAULT 0,
  started_at TEXT DEFAULT CURRENT_TIMESTAMP,
  completed_at TEXT,
  FOREIGN KEY (build_id) REFERENCES builds(id)
);

-- Deployment steps table
CREATE TABLE IF NOT EXISTS deploy_steps (
  id TEXT PRIMARY KEY,
  deployment_id TEXT NOT NULL,
  step_name TEXT NOT NULL,
  status TEXT DEFAULT 'awaiting',
  started_at TEXT,
  completed_at TEXT,
  FOREIGN KEY (deployment_id) REFERENCES deployments(id)
);

-- Sessions table
CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL,
  name TEXT NOT NULL,
  status TEXT DEFAULT 'idle',
  duration INTEGER,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects(id)
);

-- Metrics table
CREATE TABLE IF NOT EXISTS metrics (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL,
  metric_name TEXT NOT NULL,
  value REAL NOT NULL,
  timestamp TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects(id)
);

-- Templates table
CREATE TABLE IF NOT EXISTS templates (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  icon TEXT,
  tags TEXT,
  deploys INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Build tags table
CREATE TABLE IF NOT EXISTS build_tags (
  id TEXT PRIMARY KEY,
  build_id TEXT NOT NULL,
  tag TEXT NOT NULL,
  FOREIGN KEY (build_id) REFERENCES builds(id)
);

-- Insert seed data
INSERT OR IGNORE INTO projects (id, name, description, status, last_build_at) VALUES
  ('proj-1', '3D-dev-hero', 'Connected • Ready to become interactive', 'idle', '2024-01-15 14:32');

INSERT OR IGNORE INTO builds (id, project_id, version, status, duration, timestamp) VALUES
  ('build-001', 'proj-1', 'v2.3.1', 'Succeeded', 134, '2024-01-15 14:32'),
  ('build-002', 'proj-1', 'v2.3.0', 'Succeeded', 128, '2024-01-15 12:18'),
  ('build-003', 'proj-1', 'v2.2.9', 'Failed', 112, '2024-01-14 16:45'),
  ('build-004', 'proj-1', 'v2.2.8', 'Succeeded', 139, '2024-01-14 09:22');

INSERT OR IGNORE INTO build_tags (id, build_id, tag) VALUES
  ('tag-1', 'build-001', 'production'),
  ('tag-2', 'build-001', 'stable');

INSERT OR IGNORE INTO sessions (id, project_id, name, status, duration) VALUES
  ('sess-1', 'proj-1', 'Production', 'active', 8040),
  ('sess-2', 'proj-1', 'Staging', 'idle', 2700),
  ('sess-3', 'proj-1', 'Development', 'active', 5520),
  ('sess-4', 'proj-1', 'Testing', 'idle', 720);

INSERT OR IGNORE INTO templates (id, title, description, category, icon, tags, deploys) VALUES
  ('tmpl-1', 'E-Commerce API', 'Full-featured REST API with Stripe integration', 'featured', 'rocket', 'API,Stripe,Production', 0),
  ('tmpl-2', 'Content Delivery', 'CDN edge workers with caching layer', 'featured', 'file-text', 'CDN,Cache,Edge', 0),
  ('tmpl-3', 'AI Processing', 'ML model inference at the edge', 'featured', 'cpu', 'AI,ML,Edge', 0),
  ('tmpl-4', 'Image Optimizer', 'Resize and optimize images on-the-fly', 'worker', 'image', 'Images,Optimization', 1200),
  ('tmpl-5', 'Auth Service', 'JWT authentication and authorization', 'worker', 'shield', 'Auth,JWT', 856),
  ('tmpl-6', 'Rate Limiter', 'Distributed rate limiting service', 'worker', 'gauge', 'Security,Rate Limit', 623),
  ('tmpl-7', 'Analytics Collector', 'Real-time event tracking', 'worker', 'bar-chart', 'Analytics,Events', 412);
