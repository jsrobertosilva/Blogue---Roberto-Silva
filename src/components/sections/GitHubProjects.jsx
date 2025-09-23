import React from 'react'
import { motion } from 'framer-motion'
import { Github, Star, GitFork, ExternalLink, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'

const GitHubProjects = () => {
  const projects = [
    {
      id: 1,
      name: 'Documentos Imoport',
      description: 'Projeto Completo',
      language: 'JavaScript',
      stars: 45,
      forks: 12,
      updated: '2024-01-15',
      topics: ['JavaScript', 'api', 'productivity']
    },
    {
      id: 2,
      name: 'Emissão e Consulta de Notas Fiscais Eletrônicas (NF-e)',
      description: 'Projeto Completo',
      language: 'Python',
      stars: 78,
      forks: 23,
      updated: '2024-01-10',
      topics: ['python', 'automation', 'nfe']
    },
    {
      id: 3,
      name: 'Aplicativo web para cálculo do Simples Nacional e Cálculo do IBPT',
      description: 'Projeto Completo',
      language: 'JavaScript',
      stars: 32,
      forks: 8,
      updated: '2024-01-08',
      topics: ['JavaScript', 'calculation', 'tax']
    },
    {
      id: 4,
      name: 'Automatização de envio de E-mails Personalizados',
      description: 'Projeto Completo',
      language: 'JavaScript',
      stars: 25,
      forks: 5,
      updated: '2024-01-05',
      topics: ['Mala Direta', 'email', 'automation']
    }
  ]

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      CSS: 'bg-purple-500'
    }
    return colors[language] || 'bg-gray-500'
  }

  return (
    <section id="projects" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Projetos <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">GitHub</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore meus repositórios open source e projetos de desenvolvimento
          </p>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://github.com/jsrobertosilva', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            Ver Perfil no GitHub
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">{project.name}</h3>
                </div>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.topics.map((topic, topicIndex) => (
                  <span
                    key={topicIndex}
                    className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`} />
                    <span>{project.language}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
                <span>Atualizado em {new Date(project.updated).toLocaleDateString('pt-BR')}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg">
            Ver Mais Projetos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubProjects

