import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log('Form submitted:', formData)
    alert('Mensagem enviada com sucesso!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jsrobertho.silva@gmail.com',
      link: 'mailto:jsrobertho.silva@gmail.com'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'jsrobertosilva',
      link: 'https://github.com/jsrobertosilva'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@jsroberto.silva',
      link: 'https://instagram.com/jsroberto.silva'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Entre em <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Abaixo você encontra minhas informações de contato e um formulário para me enviar uma mensagem diretamente. Fico feliz em conectar com você!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border hover:shadow-md transition-shadow group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            <motion.div
              className="mt-8 p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-2">Fico feliz em compartilhar meus Projetos</h4>
              <p className="text-muted-foreground text-sm">
                 
               Sinta-se a vontade para ler os conteúdos do meu blog, visitar meu canal no YouTube e conferir meus projetos no GitHub.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

