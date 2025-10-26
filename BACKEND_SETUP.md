# 🚀 Backend Setup Guide

Este proyecto está preparado para conectarse a un backend en **Flask**, **C# .NET**, o **Ruby on Rails** con base de datos **PostgreSQL**.

## 📁 Estructura Frontend Lista

```
src/
├── config/
│   └── api.config.js           ← Configuración de endpoints
├── services/
│   ├── api.service.js          ← Cliente HTTP base
│   ├── projects.service.js     ← Servicio de proyectos
│   └── contact.service.js      ← Servicio de contacto
├── hooks/
│   ├── useApi.js               ← Hook para llamadas API
│   └── useContactForm.js       ← Hook para formulario contacto
└── data/                       ← Mock data (hasta conectar backend)
```

---

## 🔧 Configuración de Variables de Entorno

### 1. Copiar archivo de ejemplo
```bash
cp .env.example .env.development
```

### 2. Configurar URL del backend
```env
# .env.development
VITE_API_BASE_URL=http://localhost:5000/api
VITE_USE_MOCK_DATA=false  # Cambiar a false cuando backend esté listo
```

---

## 🐍 Opción 1: Backend Flask + PostgreSQL

### Estructura del Proyecto Backend
```
backend/
├── app/
│   ├── __init__.py
│   ├── models/
│   │   ├── __init__.py
│   │   ├── project.py
│   │   ├── experience.py
│   │   ├── tech_stack.py
│   │   └── contact.py
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── projects.py
│   │   ├── experience.py
│   │   └── contact.py
│   └── config.py
├── migrations/
├── requirements.txt
└── run.py
```

### requirements.txt
```txt
Flask==3.0.0
Flask-SQLAlchemy==3.1.1
Flask-CORS==4.0.0
Flask-Migrate==4.0.5
psycopg2-binary==2.9.9
python-dotenv==1.0.0
gunicorn==21.2.0
```

### Modelo de Ejemplo: Project
```python
# app/models/project.py
from app import db
from datetime import datetime

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(50), nullable=False)
    tech = db.Column(db.ARRAY(db.String), nullable=False)
    image = db.Column(db.String(500))
    live_url = db.Column(db.String(500))
    github_url = db.Column(db.String(500))
    status = db.Column(db.String(20), default='live')
    featured = db.Column(db.Boolean, default=False)
    gradient = db.Column(db.String(100))
    color = db.Column(db.String(100))
    bg_color = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'category': self.category,
            'tech': self.tech,
            'image': self.image,
            'liveUrl': self.live_url,
            'githubUrl': self.github_url,
            'status': self.status,
            'featured': self.featured,
            'gradient': self.gradient,
            'color': self.color,
            'bgColor': self.bg_color
        }
```

### Rutas de Ejemplo: Projects
```python
# app/routes/projects.py
from flask import Blueprint, jsonify, request
from app.models.project import Project
from app import db

projects_bp = Blueprint('projects', __name__)

@projects_bp.route('/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return jsonify([p.to_dict() for p in projects])

@projects_bp.route('/projects/<int:id>', methods=['GET'])
def get_project(id):
    project = Project.query.get_or_404(id)
    return jsonify(project.to_dict())

@projects_bp.route('/projects/featured', methods=['GET'])
def get_featured_projects():
    projects = Project.query.filter_by(featured=True).all()
    return jsonify([p.to_dict() for p in projects])

@projects_bp.route('/projects/category/<category>', methods=['GET'])
def get_projects_by_category(category):
    projects = Project.query.filter_by(category=category).all()
    return jsonify([p.to_dict() for p in projects])

@projects_bp.route('/projects', methods=['POST'])
def create_project():
    data = request.get_json()
    project = Project(
        title=data['title'],
        description=data['description'],
        category=data['category'],
        tech=data['tech'],
        image=data.get('image'),
        live_url=data.get('liveUrl'),
        github_url=data.get('githubUrl'),
        status=data.get('status', 'live'),
        featured=data.get('featured', False),
        gradient=data.get('gradient'),
        color=data.get('color'),
        bg_color=data.get('bgColor')
    )
    db.session.add(project)
    db.session.commit()
    return jsonify(project.to_dict()), 201
```

### Configuración Principal
```python
# app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from config import Config

db = SQLAlchemy()
migrate = Migrate()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)

    # Registrar blueprints
    from app.routes.projects import projects_bp
    from app.routes.contact import contact_bp

    app.register_blueprint(projects_bp, url_prefix='/api')
    app.register_blueprint(contact_bp, url_prefix='/api')

    return app
```

### Config
```python
# config.py
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key')
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL',
        'postgresql://user:password@localhost:5432/portfolio_db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
```

### Comandos para iniciar
```bash
# Instalar dependencias
pip install -r requirements.txt

# Crear base de datos
createdb portfolio_db

# Inicializar migraciones
flask db init
flask db migrate -m "Initial migration"
flask db upgrade

# Ejecutar servidor
flask run --port=5000
```

---

## 💎 Opción 2: Backend Ruby on Rails + PostgreSQL

### Crear proyecto Rails
```bash
rails new portfolio-backend --api --database=postgresql
cd portfolio-backend
```

### Modelo Project
```bash
rails generate model Project title:string description:text category:string \
  tech:text image:string live_url:string github_url:string status:string \
  featured:boolean gradient:string color:string bg_color:string
```

### Migración
```ruby
# db/migrate/XXXXXX_create_projects.rb
class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :category, null: false
      t.text :tech, array: true, default: []
      t.string :image
      t.string :live_url
      t.string :github_url
      t.string :status, default: 'live'
      t.boolean :featured, default: false
      t.string :gradient
      t.string :color
      t.string :bg_color

      t.timestamps
    end

    add_index :projects, :category
    add_index :projects, :featured
  end
end
```

### Modelo
```ruby
# app/models/project.rb
class Project < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :category, presence: true

  scope :featured, -> { where(featured: true) }
  scope :by_category, ->(category) { where(category: category) }
end
```

### Controller
```ruby
# app/controllers/api/projects_controller.rb
module Api
  class ProjectsController < ApplicationController
    before_action :set_project, only: [:show, :update, :destroy]

    def index
      @projects = Project.all
      render json: @projects
    end

    def show
      render json: @project
    end

    def featured
      @projects = Project.featured
      render json: @projects
    end

    def by_category
      @projects = Project.by_category(params[:category])
      render json: @projects
    end

    def create
      @project = Project.new(project_params)
      if @project.save
        render json: @project, status: :created
      else
        render json: @project.errors, status: :unprocessable_entity
      end
    end

    private

    def set_project
      @project = Project.find(params[:id])
    end

    def project_params
      params.require(:project).permit(
        :title, :description, :category, :image, :live_url,
        :github_url, :status, :featured, :gradient, :color,
        :bg_color, tech: []
      )
    end
  end
end
```

### Routes
```ruby
# config/routes.rb
Rails.application.routes.draw do
  namespace :api do
    resources :projects do
      collection do
        get 'featured'
        get 'category/:category', action: :by_category
      end
    end
    resources :experience
    resources :tech_stack
    post 'contact/send'
  end
end
```

### CORS
```ruby
# config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:3003', '127.0.0.1:3003'
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

### Comandos
```bash
# Crear base de datos
rails db:create
rails db:migrate

# Ejecutar servidor
rails server -p 5000
```

---

## 🔵 Opción 3: Backend C# .NET + PostgreSQL

### Crear proyecto
```bash
dotnet new webapi -n PortfolioApi
cd PortfolioApi
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
dotnet add package Microsoft.EntityFrameworkCore.Design
```

### Modelo Project
```csharp
// Models/Project.cs
using System.ComponentModel.DataAnnotations;

namespace PortfolioApi.Models
{
    public class Project
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Category { get; set; }

        public string[] Tech { get; set; }
        public string? Image { get; set; }
        public string? LiveUrl { get; set; }
        public string? GithubUrl { get; set; }
        public string Status { get; set; } = "live";
        public bool Featured { get; set; } = false;
        public string? Gradient { get; set; }
        public string? Color { get; set; }
        public string? BgColor { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
```

### DbContext
```csharp
// Data/ApplicationDbContext.cs
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Models;

namespace PortfolioApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Project>()
                .HasIndex(p => p.Category);

            modelBuilder.Entity<Project>()
                .HasIndex(p => p.Featured);
        }
    }
}
```

### Controller
```csharp
// Controllers/ProjectsController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Data;
using PortfolioApi.Models;

namespace PortfolioApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProjectsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
            return await _context.Projects.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetProject(int id)
        {
            var project = await _context.Projects.FindAsync(id);

            if (project == null)
            {
                return NotFound();
            }

            return project;
        }

        [HttpGet("featured")]
        public async Task<ActionResult<IEnumerable<Project>>> GetFeaturedProjects()
        {
            return await _context.Projects
                .Where(p => p.Featured)
                .ToListAsync();
        }

        [HttpGet("category/{category}")]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjectsByCategory(string category)
        {
            return await _context.Projects
                .Where(p => p.Category == category)
                .ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Project>> PostProject(Project project)
        {
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProject), new { id = project.Id }, project);
        }
    }
}
```

### Program.cs
```csharp
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:3003")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowFrontend");
app.UseAuthorization();
app.MapControllers();

app.Run();
```

### appsettings.json
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=portfolio_db;User Id=postgres;Password=yourpassword;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  }
}
```

### Comandos
```bash
# Crear migración
dotnet ef migrations add InitialCreate

# Aplicar migración
dotnet ef database update

# Ejecutar API
dotnet run
```

---

## 🗄️ Esquema de Base de Datos PostgreSQL

```sql
-- Tabla Projects
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    tech TEXT[] NOT NULL,
    image VARCHAR(500),
    live_url VARCHAR(500),
    github_url VARCHAR(500),
    status VARCHAR(20) DEFAULT 'live',
    featured BOOLEAN DEFAULT false,
    gradient VARCHAR(100),
    color VARCHAR(100),
    bg_color VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_featured ON projects(featured);

-- Tabla Experience
CREATE TABLE experience (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(100),
    color VARCHAR(100),
    "order" INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Tech Stack
CREATE TABLE tech_stack (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    icon VARCHAR(100),
    color VARCHAR(100),
    category VARCHAR(50) NOT NULL, -- 'frontend', 'backend', 'tools'
    "order" INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Contact Messages
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    subject VARCHAR(300) NOT NULL,
    message TEXT NOT NULL,
    phone VARCHAR(50),
    status VARCHAR(20) DEFAULT 'new', -- 'new', 'read', 'replied'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_contact_status ON contact_messages(status);
CREATE INDEX idx_contact_created_at ON contact_messages(created_at DESC);
```

---

## 🚀 Activar Backend en el Frontend

### 1. Cambiar a modo producción
```env
# .env.development
VITE_USE_MOCK_DATA=false  # Cambiar a false
```

### 2. Los componentes ya están listos
Los componentes que creamos ya están preparados para usar los hooks:

```jsx
import { useProjects } from '../hooks/useApi';

const Projects = () => {
  const { projects, loading, error } = useProjects();

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  );
};
```

---

## ✅ Checklist de Deployment

### Frontend
- [ ] Configurar `.env.production` con URL del backend
- [ ] Cambiar `VITE_USE_MOCK_DATA=false`
- [ ] Build production: `npm run build`
- [ ] Deploy en Vercel/Netlify

### Backend
- [ ] Base de datos PostgreSQL creada
- [ ] Migraciones aplicadas
- [ ] CORS configurado
- [ ] Variables de entorno configuradas
- [ ] Deploy en Railway/Render/Heroku/DigitalOcean

---

## 📚 Recursos Adicionales

- [Flask Documentation](https://flask.palletsprojects.com/)
- [Ruby on Rails Guides](https://guides.rubyonrails.org/)
- [.NET Core Documentation](https://docs.microsoft.com/dotnet/core/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

**¡Tu frontend ya está 100% preparado para conectarse al backend!** 🎉

Solo necesitas elegir tu framework favorito y seguir las instrucciones correspondientes.
