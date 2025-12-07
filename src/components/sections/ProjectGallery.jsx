import React from 'react'
import { motion } from 'framer-motion'
import { Camera, ExternalLink, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ProjectGallery = () => {
  const projects = [
    {
      id: 1,
      title: 'Documentos Imoport',
      description: 'Documentos import é uma planilha automatizada que importa informações complexas em formato TXT, Como " Alíquotas de impostos, textos, etc." Em grande volume gerando uma tabela organizada no excel com todas ás informações, essa aplicação é capaz de reduzir em até 50% o tempo gasto em tarefas manuais de organização de dados.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'Planilha + Linguagens de Programação'
    },
    {
      id: 2,
      title: 'Emissão e Consulta de Notas Fiscais Eletrônicas (NF-e)',
      description: 'Essa Automatização permite a emissão e consulta de Notas Fiscais Eletrônicas (NF-e) de forma rápida e eficiente. Com integração direta com a API da SEFAZ, o sistema facilita o processo de consulta de faturamento e extração de arquivos digitais como o famoso XML, TXT, CSV, garantindo a agilidade nos processos fiscais operacionais vigentes.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'D3.js', 'Firebase'],
      category: 'Em teste, Sistema Robusto'
    },
    {
      id: 3,
      title: 'Aplicativo web para cálculo do Simples Nacional e Cálculo do IBPT',
      description: 'Essa aplicação web permite que empresas e contadores calculem de forma rápida e precisa os impostos devidos no regime do Simples Nacional, além de fornecer o cálculo do IBPT (Imposto sobre Bens e Serviços). Com uma interface intuitiva e recursos avançados, o aplicativo facilita a gestão tributária e ajuda a evitar erros nos cálculos.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Expo', 'Redux'],
      category: 'Web'
    },
    {
      id: 4,
      title: 'Automatização de envio de E-mails Personalizados',
      description: 'Essa aplicação automatiza o envio de e-mails personalizados para listas de contatos, economizando tempo e aumentando a eficiência na comunicação. Com recursos avançados de segmentação e personalização, é possível criar campanhas de e-mail marketing altamente eficazes.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Framer Motion', 'Tailwind'],
      category: 'Automation'
    }
  ]

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Galeria de <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma coleção dos projetos desenvolvidos pela TechFis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-white/80" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" className="w-full bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Projeto
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                  <Zap className="w-4 h-4 text-yellow-500" />
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-primary text-xs font-medium rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectGallery

