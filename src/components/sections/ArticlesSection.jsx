import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, Clock, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ArticlesSection = () => {
  const articles = [
    {
      id: 1,
      title: 'Reforma Tributária 2026: O que Muda na Apuração de Impostos',
      excerpt: 'Um guia simples para entender os principais impactos da reforma no dia a dia das empresas.',
      date: '2025-01-15',
      readTime: '10 min',
      comments: 12,
      category: 'Fiscal'
    },
    {
      id: 2,
      title: 'Emissão de NFS-e: Erros Comuns e Como Evitá-los',
      excerpt: 'Dicas práticas para emitir notas fiscais eletrônicas sem inconsistências e garantir a escrituração correta.',
      date: '2024-01-10',
      readTime: '25 min',
      comments: 8,
      category: 'Fiscal'
    },
    {
      id: 3,
      title: 'Fator R: Como Reduzir sua Tributação no Simples Nacional',
      excerpt: 'Descubra como calcular o Fator R, entender o limite de 28% e planejar a folha de pagamento para enquadrar sua empresa no Anexo III, pagando menos imposto.',
      date: '2024-01-05',
      readTime: '45 min',
      comments: 15,
      category: 'Fiscal'
    },

    {
      id: 3,
      title: 'Integração Fiscal: Como HTML, CSS e JavaScript Podem Ajudar',
      excerpt: 'Como pequenas automações web podem facilitar o envio de informações ao fisco e reduzir erros.',
      date: '2024-01-05',
      readTime: '25 min',
      comments: 15,
      category: 'Tecnologia'
    }


  ]

  return (
    <section id="articles" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meus <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Artigos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fique por dentro das últimas novidades em tecnologia fiscal, reforma tributária e dicas práticas para profissionais da área.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('pt-BR')}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {article.comments} comentários
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Ler Artigo
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button size="lg" variant="outline">
            Ver Todos os Artigos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ArticlesSection

