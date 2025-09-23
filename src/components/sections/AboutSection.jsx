import React from 'react'
import { motion } from 'framer-motion'
import { BriefcaseBusiness, TextSearch, Zap, Users } from 'lucide-react'




const AboutSection = () => {
  const skills = [
    { name: 'Fechamento completo de empresas do Simples Nacional;'},
    { name: 'Emissão e Escrituração de Notas Fiscais'},
    { name: 'Conferência de CFOP Estaduais e Interestaduais'},
    { name: 'Declarações fiscais'},
    { name: 'JavaScript'},
    { name: 'CSS/SCSS'},
    { name: 'HTML' },
    
    
  ]

  const features = [
    {
      icon: BriefcaseBusiness,
      title: 'Conformidade Fiscal',
      description: 'Garanto que todas as operações estejam em conformidade com as normas tributárias e obrigações acessórias.'
    },
    {
      icon: TextSearch,
      title: 'Análise Tributária',
      description: 'Realizo conferência de CFOP, apuração de impostos e revisão de notas fiscais para evitar inconsistências.'
    },
    {
      icon: Zap,
      title: 'Eficiência em Processos',
      description: 'Otimizo rotinas fiscais e automatizo planilhas para aumentar produtividade e reduzir erros.'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalho bem em equipe e me comunico de forma eficaz.'
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
            Sobre <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contabilista apaixonado por criar experiências incríveis
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
            <h3 className="text-2xl font-bold mb-6">Olá! Eu sou Roberto Silva</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Profissional do setor fiscal com forte domínio de rotinas fiscais, Excel avançado e 
experiência em tecnologias web (HTML, CSS e JavaScript). 
              </p>
              <p> 
                Sempre busco aprender novas tecnologias e melhores práticas para entregar 
                soluções fiscais de alta qualidade.
              </p>
              <p>
                Gosto de compartilhar conhecimento através de 
                artigos técnicos e contribuir para a comunidade.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Experiência Profissional </h4>
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

