import React from 'react'
import { motion } from 'framer-motion'
import { BriefcaseBusiness, TextSearch, Zap, Users } from 'lucide-react'




const AboutSection = () => {
  const skills = [
    { name: 'Atualizações sobre mudanças tributárias, reforma fiscal e ebooks;'},
    { name: 'Notícias sobre tecnologia aplicada ao setor tributário'},
    { name: 'Tecnologia Fiscal e Automação'},
    { name: 'Orientações para quem trabalha com contabilidade e setor fiscal'},
    { name: 'Tutoriais com ferramentas e scripts'},
    { name: 'SPED ICMS/IPI, SPED Contribuições, EFD-Reinf, ECF, DCTFWeb.'},
    { name: 'Estratégias, sustentabilidade, custos.' },
    
    
  ]

  const features = [
    {
      icon: BriefcaseBusiness,
      title: 'Conformidade Fiscal',
      description: ''
    },
    {
      icon: TextSearch,
      title: 'De olho no imposto',
      description: ''
    },
    {
      icon: Zap,
      title: 'Eficiência em Processos',
      description: ''
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: ''
    },
  ]

  return (
    <section id="about" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Sobre a <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">TecFis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Atualmente a maior página dedicada a manter você atualizado sobre Tecnologia Fiscal e reforma tributária, pesquisas, 
            dicas e muito mais.
          
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
           

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Conteúdos que Você Encontra na TecFis </h4>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      {/* removido o nível */}
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }} // sempre preenchida
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

