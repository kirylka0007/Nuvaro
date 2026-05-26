'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, Loader2 } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  product: z.enum(['flow', 'sync', 'both']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

type Status = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 text-white text-sm ' +
  'placeholder:text-slate-500 focus:outline-none focus:border-brand transition-colors';

const labelClass = 'block text-sm font-medium text-slate-300 mb-2';

const errorClass = 'text-xs text-red-400 mt-1';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      product: 'flow',
    },
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleReset = () => {
    reset();
    setStatus('idle');
  };

  return (
    <section id="contact" className="bg-navy-800 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <SectionLabel>GET IN TOUCH</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Start a conversation
          </h2>
          <p className="text-lg text-slate-400">
            Tell us about your business and we&apos;ll be in touch within one working day.
          </p>
        </div>

        {/* Success state */}
        {status === 'success' ? (
          <div className="mt-12 flex flex-col items-center gap-4 text-center py-16">
            <CheckCircle size={48} color="#1E7FD8" aria-hidden="true" />
            <h3 className="text-2xl font-bold text-white">Thank you!</h3>
            <p className="text-slate-400 max-w-md">
              We&apos;ve received your enquiry and will be in touch within one working day.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-4 text-sm text-brand hover:text-brand-light transition-colors underline underline-offset-2 cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-12 flex flex-col gap-4">
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  className={inputClass}
                  {...register('name')}
                />
                {errors.name && <p className={errorClass}>{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@company.com"
                  className={inputClass}
                  {...register('email')}
                />
                {errors.email && <p className={errorClass}>{errors.email.message}</p>}
              </div>
            </div>

            {/* Row 2: Company + Product */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className={labelClass}>
                  Company <span className="text-slate-500 font-normal">(optional)</span>
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Acme Ltd"
                  className={inputClass}
                  {...register('company')}
                />
              </div>

              <div>
                <label htmlFor="product" className={labelClass}>
                  Product interest <span className="text-red-400">*</span>
                </label>
                <select
                  id="product"
                  className={inputClass}
                  {...register('product')}
                >
                  <option value="flow">Nuvaro Flow</option>
                  <option value="sync">Nuvaro Sync</option>
                  <option value="both">Both products</option>
                </select>
                {errors.product && <p className={errorClass}>{errors.product.message}</p>}
              </div>
            </div>

            {/* Row 3: Message */}
            <div>
              <label htmlFor="message" className={labelClass}>
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your business and what you're hoping to achieve..."
                className={inputClass}
                style={{ resize: 'vertical' }}
                {...register('message')}
              />
              {errors.message && <p className={errorClass}>{errors.message.message}</p>}
            </div>

            {/* Error banner */}
            {status === 'error' && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again or email us at{' '}
                <a
                  href="mailto:enquiries@nuvaro.co.uk"
                  className="underline hover:text-red-300 transition-colors"
                >
                  enquiries@nuvaro.co.uk
                </a>
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full gradient-bg text-white py-3 text-sm font-semibold rounded-lg disabled:opacity-60 transition-opacity flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                'Send message'
              )}
            </button>

            <p className="text-xs text-slate-500 text-center mt-2">
              Your data is stored securely and never sold to third parties.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
