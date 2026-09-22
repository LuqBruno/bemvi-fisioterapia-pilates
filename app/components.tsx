'use client';
import { useEffect, useRef, useState } from 'react';
import { clinic } from './content';

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={diagonal ? {transform:'rotate(-45deg)'} : undefined}><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function Brand() {
  return <a href="#inicio" className="brand" aria-label="BEMVI Fisioterapia e Pilates — início"><img src="images/bemvi-logo.webp" width="600" height="300" alt="BEMVI Fisioterapia e Pilates" /></a>;
}
export function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); button.current?.focus(); } };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, []);
  return <header className="site-header"><div className="header-inner"><Brand /><nav aria-label="Navegação principal" className="desktop-nav"><a href="#atendimentos">Atendimentos</a><a href="#profissionais">Quem cuida</a><a href="#contato">Onde estamos</a></nav><a className="header-contact" href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">Vamos conversar <Arrow diagonal /></a><button ref={button} className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? 'Fechar' : 'Menu'} <span aria-hidden="true">{open ? '−' : '+'}</span></button></div><nav id="mobile-nav" aria-label="Navegação móvel" hidden={!open}><a href="#atendimentos" onClick={() => setOpen(false)}>Atendimentos <Arrow /></a><a href="#profissionais" onClick={() => setOpen(false)}>Quem cuida <Arrow /></a><a href="#contato" onClick={() => setOpen(false)}>Onde estamos <Arrow /></a><a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Conversar no WhatsApp <Arrow diagonal /></a></nav></header>;
}

export function Motion() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    }), { threshold: 0.1 });
    targets.forEach(target => { target.classList.add('will-reveal'); observer.observe(target); });
    return () => { observer.disconnect(); targets.forEach(t => t.classList.remove('will-reveal')); };
  }, []);
  return null;
}
