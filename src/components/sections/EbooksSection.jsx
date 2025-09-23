import React from 'react'
import { motion } from 'framer-motion'
import { Download, Eye, MessageCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const EbooksSection = () => {
  const ebooks = [
    {
      id: 1,
      title: 'Guia Prático do Simples Nacional',
      description: 'Entenda desde a abertura até o fechamento de empresas, cálculo de tributos, Fator R e obrigações acessórias.',
      cover: '/api/placeholder/300/400',
      downloads: 1250,
      rating: 4.8,
      comments: 45,
      available: true,
      price: 'Gratuito'
    },
    {
      id: 2,
      title: 'Automação Fiscal com Excel',
      description: 'Crie planilhas inteligentes para cálculo de impostos, conferência de notas e geração de relatórios.',
      cover: '/api/placeholder/300/400',
      downloads: 890,
      rating: 4.9,
      comments: 32,
      available: true,
      price: 'Gratuito'
    },
    {
      id: 3,
      title: 'Reforma Tributária 2026',
      description: 'Um guia rápido sobre as mudanças na apuração de impostos e como se preparar para elas.',
      cover: '/api/placeholder/300/400',
      downloads: 650,
      rating: 4.7,
      comments: 28,
      available: false,
      price: 'Gratuito'
    },

    {
      id: 3,
      title: 'IA e Linguagens de Programação 2025',
      description: 'Veja o impacto da tecnologia no Setor contábil e Fiscal, com foco em IA, Python, N8N, HTML, CSS e JavaScript para automações.',
      cover: '/api/placeholder/300/400',
      downloads: 650,
      rating: 4.7,
      comments: 28,
      available: false,
      price: 'Gratuito'
    }
  ]

  return (
    <section id="ebooks" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meus <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Ebooks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conhecimento aprofundado em formato digital para acelerar seu aprendizado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Cover Image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Download className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg">{ebook.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{ebook.rating}</span>
                  </div>
                  <span className="text-sm font-bold text-primary">{ebook.price}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {ebook.description}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    {ebook.downloads} downloads
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {ebook.comments} comentários
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    disabled={!ebook.available}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {ebook.available ? 'Download' : 'Em breve'}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EbooksSection

