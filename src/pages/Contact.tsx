import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-background text-foreground geist-font min-h-screen">
      <div className="relative">
        <nav className="w-full px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-border backdrop-blur-md border border-border flex items-center justify-center">
                <span className="geist-font text-sm font-bold text-foreground">RM</span>
              </div>
              <span className="geist-font text-lg font-medium text-foreground">Renzo Maggi</span>
            </Link>
            <Link to="/" className="glass-button px-4 py-2 rounded-lg text-foreground text-sm font-medium inter-font">
              Volver al inicio
            </Link>
          </div>
        </nav>
        <div className="divider" />
        
        <main className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 float-animation">
              <h1 className="md:text-6xl lg:text-7xl leading-[1.1] geist-font text-5xl font-light text-foreground tracking-tight mb-4">
                Contacto
              </h1>
              <p className="md:text-xl max-w-3xl leading-relaxed inter-font text-lg font-light text-muted-foreground mx-auto">
                Estoy disponible para nuevos proyectos y colaboraciones. ¡Contáctame!
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a 
                  href="mailto:renzomaggipers@gmail.com" 
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl mb-4 flex justify-center">
                    <div className="text-purple-400/70">📧</div>
                  </div>
                  <h3 className="text-lg font-medium text-card-foreground mb-2 geist-font">Email</h3>
                  <p className="text-muted-foreground text-sm inter-font">renzomaggipers@gmail.com</p>
                </a>
                
                <a 
                  href="https://instagram.com/renzo.maggii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl mb-4 flex justify-center">
                    <div className="text-pink-400/70">📸</div>
                  </div>
                  <h3 className="text-lg font-medium text-card-foreground mb-2 geist-font">Instagram</h3>
                  <p className="text-muted-foreground text-sm inter-font">renzo.maggii</p>
                </a>
                
                <a 
                  href="https://github.com/RenzoMaggi16" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl mb-4 flex justify-center">
                    <div className="text-blue-400/70">💻</div>
                  </div>
                  <h3 className="text-lg font-medium text-card-foreground mb-2 geist-font">GitHub</h3>
                  <p className="text-muted-foreground text-sm inter-font">RenzoMaggi16</p>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;