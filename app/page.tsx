import { Arrow, Brand, Header, Motion } from './components';
import { care, clinic } from './content';

function ContactLink({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <a href={clinic.whatsapp} className={`button ${className}`} target="_blank" rel="noopener noreferrer">{children}<span><Arrow diagonal /></span></a>;
}

export default function Home() {
  return <>
    <a href="#principal" className="skip-link">Pular para o conteúdo</a><Header /><Motion />
    <main id="principal">
      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <div className="hero-topline wrap"><span>FISIOTERAPIA & PILATES CLÍNICO</span><span>CRICIÚMA, SC <i /></span></div>
        <div className="hero-grid wrap">
          <div className="hero-copy"><p className="eyebrow"><span className="small-line" /> Seu corpo merece atenção.</p><h1 id="hero-title">Se cuidar<br />para <em>viver bem.</em></h1><p className="hero-description">Fisioterapia e Pilates clínico para cuidar da sua dor e do seu movimento, com atenção à sua história e ao seu ritmo.</p><ContactLink>Solicitar uma avaliação</ContactLink><a className="explore" href="#atendimentos"><span className="down-arrow">↓</span> Encontre o seu cuidado</a></div>
          <figure className="hero-portrait"><div className="portrait-loop" aria-hidden="true" /><div className="portrait-window"><img src="images/adriana-retrato.webp" alt="Dra. Adriana Wenz, fisioterapeuta da BEMVI" width="900" height="1125" fetchPriority="high" /></div><figcaption><span>Dra. Adriana Wenz<small>Fisioterapeuta · CREFITO-10/412836-F</small></span><span className="caption-dot" aria-hidden="true" /></figcaption><span className="portrait-note" aria-hidden="true">ESCUTA. CUIDADO. MOVIMENTO.</span></figure>
        </div>
        <div className="hero-foot wrap"><span>Um cuidado que começa por você.</span><span>REABILITAÇÃO <b>·</b> PILATES CLÍNICO</span></div>
      </section>

      <section className="intro wrap section-space" aria-labelledby="intro-title" data-reveal><p className="eyebrow">O jeito BEMVI de cuidar</p><div><h2 id="intro-title">Antes de orientar o movimento,<br /><em>entender você.</em></h2><p>Dor, desconforto ou vontade de se movimentar melhor. Cada pessoa chega com uma história. Na BEMVI, a avaliação e a escuta ajudam a direcionar o cuidado para a sua realidade.</p></div><span className="intro-seal" aria-hidden="true">bem<br /><em>viver.</em></span></section>

      <section id="atendimentos" className="care-section section-space" aria-labelledby="care-title"><div className="wrap"><header className="section-header" data-reveal><div><p className="eyebrow">Atendimentos</p><h2 id="care-title">Diferentes caminhos.<br /><em>O seu cuidado.</em></h2></div><p>Conheça os atendimentos e converse com a equipe sobre o que faz sentido para você.</p></header><div className="care-list">{care.map(service => <article key={service.number} className="care-row" data-reveal><span className="care-number">{service.number}</span><div className="care-title"><p className="eyebrow">{service.label}</p><h3>{service.title}</h3><div className="care-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="care-detail"><p>{service.text}</p><details><summary>Sobre o atendimento <span aria-hidden="true">+</span></summary><p>{service.detail}</p><a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">Solicitar informações <Arrow diagonal /></a></details></div></article>)}</div></div></section>

      <section id="profissionais" className="team-section wrap section-space" aria-labelledby="team-title"><div className="team-heading" data-reveal><p className="eyebrow">Quem cuida de você</p><h2 id="team-title">Técnica no olhar.<br /><em>Atenção na escuta.</em></h2><p>Conheça a profissional apresentada pela BEMVI.</p></div><div className="team-profiles"><article className="professional" data-reveal><div className="professional-heading"><span>01 / FISIOTERAPIA</span><a href="https://www.instagram.com/dra.adrianawenz/" target="_blank" rel="noopener noreferrer" aria-label="Perfil profissional de Adriana Wenz no Instagram"><Arrow diagonal /></a></div><h3>Dra. Adriana Wenz</h3><p className="registration">CREFITO-10/412836-F</p><p>Atuação em dor, coluna e reabilitação ortopédica. Formação no Método McKenzie e instrutora de Pilates.</p><div className="professional-bottom">Dor e coluna <span>Reabilitação ortopédica</span></div></article></div></section>

      <section className="care-note" aria-label="Filosofia de cuidado"><div className="wrap"><span className="note-mark" aria-hidden="true">“</span><p>O cuidado acompanha<br /><em>o seu ritmo.</em></p><div className="note-aside"><span>O CORPO TEM UMA HISTÓRIA.</span><span>O CUIDADO TAMBÉM.</span></div></div></section>

      <section id="primeiro-contato" className="contact-start wrap section-space" aria-labelledby="start-title"><div data-reveal><p className="eyebrow">Primeiro contato</p><h2 id="start-title">Vamos começar<br /><em>com uma conversa?</em></h2></div><div className="start-copy" data-reveal><p>Conte à equipe o que você procura e consulte a disponibilidade para uma avaliação ou para conhecer o Pilates clínico.</p><p>Você pode tirar suas dúvidas sobre os atendimentos diretamente no WhatsApp da BEMVI.</p><ContactLink className="button-dark">Conversar com a BEMVI</ContactLink></div></section>

      <section id="contato" className="location" aria-labelledby="location-title"><div className="wrap location-grid"><div><p className="eyebrow">Perto de você, em Criciúma</p><h2 id="location-title">Seu cuidado tem<br /><em>um ponto de encontro.</em></h2><address>{clinic.address}<br />{clinic.city}</address><a className="inline-link" href={clinic.maps} target="_blank" rel="noopener noreferrer">Traçar rota no Google Maps <Arrow diagonal /></a></div><aside className="visit-note"><span className="location-symbol" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M24 42s14-14 14-25a14 14 0 0 0-28 0c0 11 14 25 14 25Z" stroke="currentColor" strokeWidth="1.4"/><circle cx="24" cy="17" r="5" stroke="currentColor" strokeWidth="1.4"/></svg></span><h3>Combine sua visita.</h3><p>Consulte os horários disponíveis e as orientações para chegar à clínica.</p><ContactLink>Falar pelo WhatsApp</ContactLink><a className="instagram-link" href={clinic.instagram} target="_blank" rel="noopener noreferrer">Acompanhe @bemvifisio <Arrow diagonal /></a></aside></div></section>
    </main>
    <footer><div className="wrap footer-main"><Brand /><p>Se cuidar para viver bem.</p><a href="#inicio">Voltar ao início ↑</a></div><div className="wrap footer-bottom"><span>BEMVI · Fisioterapia e Pilates</span><span>Criciúma, Santa Catarina</span></div></footer>
    <a className="mobile-contact" href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">Solicitar avaliação <Arrow diagonal /></a>
  </>;
}
