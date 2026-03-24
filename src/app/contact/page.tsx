'use client';

import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import { Button } from '@/components/Button';

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Get In Touch | NDINDA MWANZA</title>
        <meta name="description" content="Contact NDINDA MWANZA for product marketing, content strategy, and digital growth consulting. Send a message or schedule a call." />
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-section">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-hero font-bold text-text mb-12 text-center">Get In Touch With Me</h1>
              <ContactForm />
            </div>
          </div>
        </main>
        <footer className="bg-surface border-t border-border pt-16 pb-8 border-b border-red-500">
          <div className="container mx-auto px-6 text-center">
            <p className="text-text-muted">&copy; 2025 NDINDA MWANZA. All rights reserved.</p>
          </div>
        </footer>
        <div className="h-4 bg-red-500"></div>
      </div>
    </>
  );
}

function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    honeypot: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (form.honeypot.trim() !== '') {
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xkowrkla', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-text"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-text"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-text resize-vertical"
        />
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="honeypot"
        value={form.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <Button
        type="submit"
        disabled={status === 'sending'}
        className="w-full"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
        </div>
      )}
    </form>
  );
}