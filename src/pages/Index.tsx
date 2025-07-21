import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";

const customPortfolioData: PortfolioPageProps = {
  logo: {
    initials: 'RM',
    name: 'Renzo Maggi',
  },
  navLinks: [
    { label: 'Bio', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: '#skills' },
  ],
  resume: {
    label: 'Contactame',
    onClick: () => { window.location.href = '/contact'; },
  },
  hero: {
    titleLine1: 'Diseño & Desarrollo',
    titleLine2Gradient: 'Web.',
    subtitle: 'Creo experiencias web modernas que combinan diseño y desarrollo con propósito.',
  },
  ctaButtons: {
    primary: {
      label: 'Explora mi trabajo',
      onClick: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); },
    },
    secondary: {
      label: 'Contactame',
      onClick: () => { window.location.href = '/contact'; },
    },
  },
  projects: [
    { 
      title: 'Ceramica Virtual', 
      description: 'Landing page moderna y estetica para un curso de ceramica virtual',
      tags: ['HTML - CSS - JS', 'Paypal', 'Thinkific'],
      imageContent: (
        <a href="https://ceramicavirtualv3.netlify.app/" target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
          <video className="w-full h-full object-cover rounded-xl" src="/ceramicavirtual.mp4" autoPlay loop muted />
        </a>
      )
    },
    { 
      title: 'Alfred Bot', 
      description: 'Landing page para un bot de trading de WhatsApp',
      tags: ['HTML - CSS - JS', 'N8N', 'React'],
      imageContent: (
        <a href="https://alfredbot.netlify.app/" target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
          <video className="w-full h-full object-cover rounded-xl" src="/alfred.mp4" autoPlay loop muted />
        </a>
      )
    },
    { 
      title: 'WAKEUP Trading', 
      description: 'Pagina personalizada para un mentor de trading',
      tags: ['HTML - CSS - JS', 'React', 'Tailwind CSS'],
      imageContent: (
        <a href="https://ttmtrading.netlify.app/" target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
          <video className="w-full h-full object-cover rounded-xl" src="/wakeuptrading.mp4" autoPlay loop muted />
        </a>
      )
    },
  ],
  stats: [
    { value: '4+', label: 'Años de experiencia' },
    { value: '15+', label: 'Proyectos exitosos' },
    { value: '95.5%', label: 'Sastifaccion del cliente' },
  ],
  showAnimatedBackground: true,
};

const Index = () => {
  return <PortfolioPage {...customPortfolioData} />;
};

export default Index;
