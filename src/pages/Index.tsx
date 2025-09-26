import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeSection, setActiveSection] = useState('home')

  const services = [
    {
      title: 'Системная интеграция',
      description: 'Комплексные решения для интеграции IT-систем и бизнес-процессов',
      icon: 'Network'
    },
    {
      title: 'Инженерные системы', 
      description: 'Проектирование и внедрение современных инженерных решений',
      icon: 'Settings'
    },
    {
      title: 'Разработка ПО',
      description: 'Создание программного обеспечения под ваши задачи',
      icon: 'Code'
    },
    {
      title: 'Информационная безопасность',
      description: 'Защита ваших данных и IT-инфраструктуры',
      icon: 'Shield'
    }
  ]

  const projects = [
    {
      id: 1,
      title: 'Проект 1',
      description: 'Системы глобального мониторинга',
      image: '/img/4106a24f-11c5-47de-96e0-73e461663cdf.jpg'
    },
    {
      id: 2,
      title: 'Проект 2',
      description: 'Платформа аналитики данных',
      image: '/img/4106a24f-11c5-47de-96e0-73e461663cdf.jpg'
    },
    {
      id: 3,
      title: 'Проект 3',
      description: 'Облачная инфраструктура',
      image: '/img/4106a24f-11c5-47de-96e0-73e461663cdf.jpg'
    }
  ]

  const partners = [
    'Microsoft', 'CheckPoint', 'VMware', 'Dell', 'Citrix', 'MikroTik',
    'Softline', 'Uranium', 'ГПБ Развитие Активов'
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-heading font-bold text-xl text-primary">Niktel</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`transition-colors ${activeSection === 'about' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                О компании
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className={`transition-colors ${activeSection === 'portfolio' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                Портфолио
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className={`transition-colors ${activeSection === 'contacts' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                Контакты
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-gradient-start to-blue-gradient-end opacity-90"
          style={{
            backgroundImage: `url('/img/4106a24f-11c5-47de-96e0-73e461663cdf.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Ваш проводник в мир IT
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Мы построим для вас IT-инфраструктуру любого масштаба<br />
            с использованием самых современных технологий
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
            onClick={() => scrollToSection('about')}
          >
            Узнать больше
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексные IT-решения для современного бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-white hover:shadow-lg transition-all duration-300 animate-slide-up border-l-4 border-l-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={service.icon as any} className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Global Clients */}
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
              Клиенты по всему миру
            </h3>
            <p className="text-lg text-gray-600">
              Мы обслуживаем клиентов компаний в Европе, США, Африке и Азии
            </p>
          </div>

          {/* Virtual Workplaces */}
          <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg animate-slide-up">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Виртуальные рабочие места
              </h3>
              <p className="text-gray-600 mb-6">
                Внедрение VDI для международной компании
              </p>
              <div className="flex justify-center">
                <Icon name="Monitor" className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>

          {/* Cloud Data Export */}
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-slide-up">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Выгрузка данных из облака
              </h3>
              <p className="text-gray-600 mb-6">
                Облачное хранение архива электронной почты не позволяет выгружать данные
              </p>
              <div className="flex justify-center">
                <Icon name="Cloud" className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-gray-900 mb-12 animate-slide-up">
            Наши клиенты и партнёры
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 items-center opacity-60">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gray-100 rounded-lg p-4 h-16 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-900 mb-16 animate-slide-up">
            Наши проекты
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                Контакты:
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="w-5 h-5" />
                  <span>ул. ул.+7 (495) 507-19-84, ул. Каскадная, дом 7, строение 1</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="w-5 h-5" />
                  <span>+7 (495) 507-19-84</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="w-5 h-5" />
                  <span>+7 (495) 507-19-85</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="w-5 h-5" />
                  <span>niktel@mail.com</span>
                </div>
              </div>
              <div className="mt-8 text-sm opacity-75">
                © 2019 ООО «Никтел»
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-white/10 rounded-lg p-6 h-80">
                <div className="text-center h-full flex items-center justify-center">
                  <div>
                    <Icon name="Map" className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="opacity-75">Интерактивная карта</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-heading font-bold text-xl">Niktel</span>
            </div>
            <div className="flex space-x-8 text-sm">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">
                Контакты
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">
                Портфолио
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index