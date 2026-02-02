'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 800));
    setStatus('sent');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-6 md:p-8 bg-brand-charcoal border border-white/10 rounded-sm"
        noValidate
        aria-label="Formular contact"
      >
        <div>
          <label htmlFor="contact-name" className="block text-sm uppercase tracking-widest text-brand-muted mb-2">
            Nume *
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-brand-black border border-white/10 text-brand-white placeholder:text-brand-muted focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
            placeholder="Numele tău"
            autoComplete="name"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm uppercase tracking-widest text-brand-muted mb-2">
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-brand-black border border-white/10 text-brand-white placeholder:text-brand-muted focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
            placeholder="email@exemplu.ro"
            autoComplete="email"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm uppercase tracking-widest text-brand-muted mb-2">
            Telefon
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-brand-black border border-white/10 text-brand-white placeholder:text-brand-muted focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
            placeholder="07xx xxx xxx"
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm uppercase tracking-widest text-brand-muted mb-2">
            Mesaj *
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-brand-black border border-white/10 text-brand-white placeholder:text-brand-muted focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-y min-h-[120px]"
            placeholder="Descrie pe scurt ce ai vrea (tip tatuaj, zonă, preferințe)..."
            aria-required="true"
          />
        </div>
        {status === 'sent' && (
          <p className="text-brand-green-glow text-sm" role="status">
            Mesajul a fost trimis. Te contactăm în curând.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm" role="alert">
            A apărut o eroare. Încearcă din nou sau sună-ne.
          </p>
        )}
        <Button
          type="submit"
          variant="primary"
          aria-label="Trimite mesajul"
          className="w-full sm:w-auto"
        >
          {status === 'sending' ? 'Se trimite...' : 'Trimite'}
        </Button>
      </form>
    </motion.div>
  );
}
