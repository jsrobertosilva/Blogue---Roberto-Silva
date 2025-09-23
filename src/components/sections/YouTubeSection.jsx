import React from 'react'
import { motion } from 'framer-motion'
import { Youtube, Play, Eye, ThumbsUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const YouTubeSection = () => {
  const videos = [
    {
      id: 1,
      title: 'Reforma Tributária 2026: O que Muda na Apuração de Impostos',
      thumbnail: '/api/placeholder/320/180',
      views: '15.2K',
      likes: '1.2K',
      duration: '10',
      description: 'Uma aula para entender os principais impactos da reforma no dia a dia das empresas.'
    },
    {
      id: 2,
      title: 'Emissão de NFS-e: Erros Comuns e Como Evitá-los',
      thumbnail: '/api/placeholder/320/180',
      views: '8.7K',
      likes: '890',
      duration: '25',
      description: 'Dicas práticas para emitir notas fiscais eletrônicas sem inconsistências e garantir a escrituração correta.'
    },
    {
      id: 3,
      title: 'Fator R: Como Reduzir sua Tributação no Simples Nacional',
      thumbnail: '/api/placeholder/320/180',
      views: '12.4K',
      likes: '1.5K',
      duration: '45',
      description: 'Descubra como calcular o Fator R, entender o limite de 28% e planejar a folha de pagamento para enquadrar sua empresa no Anexo III, pagando menos imposto.'
    },

    {
      id: 3,
      title: 'IA e Linguagens de Programação 2025',
      thumbnail: '/api/placeholder/320/180',
      views: '12.4K',
      likes: '1.5K',
      duration: '25',
      description: 'Entenda o impacto da tecnologia no Setor contábil e Fiscal, com foco em IA, Python, N8N, HTML, CSS e JavaScript para automações.'
    }
  ]

  return (
    <section id="youtube" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Canal <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">YouTube</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Tutoriais e conteúdos sobre o setor Fiscal e a influência da tecnologia. Atenção!!! Você não verá nenhum conteúdo ainda, pois esste site está em manutenção.
          </p>
          
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={() => window.open('https://youtube.com/@robertosilva', '_blank')}
          >
            <Youtube className="w-5 h-5 mr-2" />
            Inscrever-se no Canal
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-red-500 to-red-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {video.views}
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {video.likes}
                    </div>
                  </div>
                </div>
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
            Ver Todos os Vídeos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default YouTubeSection

