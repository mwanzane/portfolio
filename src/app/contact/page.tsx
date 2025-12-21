'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { Button } from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

export default function Contact() {
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
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-section">
        <div className="container mx-auto px-6 max-w-2xl">
          <SectionHeading>Get In Touch</SectionHeading>
          <p className="text-center text-text-muted mb-12">
            Have a question or want to work together? Send me a message.
          </p>

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
          </form>

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

          {/* Paid Questions CTA */}
          <div className="mt-12 p-6 bg-surface border border-border rounded-lg text-center">
            <h3 className="text-subheading font-bold text-text mb-4">Need a Quick Answer?</h3>
            <p className="text-text-muted mb-6">
              For paid questions or consulting, check out Replom.
            </p>
            <Link
              href="https://replom.com/ask/ndinda-f3089466"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-surface border border-primary text-primary rounded-lg hover:bg-primary hover:text-surface transition-smooth"
            >
              Ask a Paid Question
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-surface border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-text-muted">&copy; 2023 NDINDA MWANZA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}