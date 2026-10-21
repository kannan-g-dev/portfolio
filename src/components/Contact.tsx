import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioConfig, isValidUrl } from '../config/portfolio';
import { Mail, Github, Linkedin, MapPin, Send, Check, Copy, AlertCircle, Clock } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { contact } = portfolioConfig;

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setSubmitFeedback(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Check if an external form service is genuinely configured
    if (contact.formService.configured && contact.formService.endpointUrl) {
      setSubmitting(true);
      try {
        const response = await fetch(contact.formService.endpointUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitFeedback({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully.',
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setSubmitFeedback({
            type: 'error',
            message: 'Message delivery failed. Please reach out directly via email.',
          });
        }
      } catch {
        setSubmitFeedback({
          type: 'error',
          message: 'Network error communicating with the form service. Please email me directly.',
        });
      } finally {
        setSubmitting(false);
      }
    } else {
      // Honest Static Fallback: Open prefilled email draft in user's default client
      const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
      const bodyEncoded = encodeURIComponent(
        `Hi Kannan,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
      );
      const mailtoUrl = `mailto:${contact.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

      window.location.href = mailtoUrl;

      setSubmitFeedback({
        type: 'info',
        message:
          'Your default email client has been opened with this message prefilled. You can also copy the formatted text below.',
      });
    }
  };

  const handleCopyMessage = () => {
    const formatted = `Subject: [Portfolio Inquiry] ${formData.subject || 'Engineering Discussion'}\nFrom: ${formData.name || 'Anonymous'}\nEmail: ${formData.email || 'Not specified'}\n\n${formData.message || ''}`;
    navigator.clipboard.writeText(formatted).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const hasLinkedin = isValidUrl(contact.linkedinUrl);

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-light-border dark:border-dark-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Get In Touch"
          title="Connect for Engineering Discussions"
          description="Have questions about backend architecture, OKR platforms, Elasticsearch data behavior, or potential opportunities? Feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <div className="card-surface p-5 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono uppercase tracking-wider text-light-subtle dark:text-dark-subtle">
                  Email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm font-semibold text-light-text dark:text-dark-text hover:text-brand-blue transition-colors break-all"
                >
                  {contact.email}
                </a>
                <p className="text-[11px] text-light-muted dark:text-dark-muted mt-0.5">
                  Direct inquiries and technical discussions
                </p>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="card-surface p-5 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono uppercase tracking-wider text-light-subtle dark:text-dark-subtle">
                  GitHub Profile
                </p>
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-light-text dark:text-dark-text hover:text-brand-blue transition-colors"
                >
                  github.com/kannan-g-dev
                </a>
                <p className="text-[11px] text-light-muted dark:text-dark-muted mt-0.5">
                  Code repositories and practice projects
                </p>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="card-surface p-5 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-brand-indigo/10 dark:bg-brand-indigo/15 text-brand-indigo shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono uppercase tracking-wider text-light-subtle dark:text-dark-subtle">
                  LinkedIn
                </p>
                {hasLinkedin ? (
                  <a
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-light-text dark:text-dark-text hover:text-brand-blue transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                ) : (
                  <p className="text-xs text-light-subtle dark:text-dark-subtle italic">
                    Configurable via portfolio.ts
                  </p>
                )}
                <p className="text-[11px] text-light-muted dark:text-dark-muted mt-0.5">
                  Professional network and connections
                </p>
              </div>
            </div>

            {/* Location & Response Expectation */}
            <div className="card-surface p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-light-muted dark:text-dark-muted">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Location: {contact.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-light-muted dark:text-dark-muted">
                <Clock className="w-4 h-4 text-brand-blue shrink-0" />
                <span>{contact.responseExpectation}</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="card-surface p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-light-border dark:border-dark-border">
                <h3 className="text-base font-bold text-light-text dark:text-dark-text">
                  Send a Message
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-dark-surface text-light-subtle dark:text-dark-subtle border border-light-border dark:border-white/5">
                  {contact.formService.configured ? 'API Connected' : 'Draft Workflow'}
                </span>
              </div>

              {submitFeedback && (
                <div
                  className={`mb-6 p-4 rounded-xl text-xs sm:text-sm flex items-start gap-3 ${
                    submitFeedback.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                      : submitFeedback.type === 'error'
                      ? 'bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400'
                      : 'bg-brand-blue/10 border border-brand-blue/20 text-brand-blue dark:text-blue-300'
                  }`}
                  role="status"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p>{submitFeedback.message}</p>
                    {submitFeedback.type === 'info' && (
                      <button
                        type="button"
                        onClick={handleCopyMessage}
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold underline underline-offset-2 hover:text-white"
                      >
                        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied to clipboard!' : 'Copy message text to clipboard'}</span>
                      </button>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-light-text dark:text-dark-text mb-1"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-dark-surface border ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-light-border dark:border-white/10 focus:border-brand-blue'
                      } text-light-text dark:text-dark-text placeholder:text-light-subtle dark:placeholder:text-dark-subtle focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-rose-500 font-mono">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-light-text dark:text-dark-text mb-1"
                    >
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-dark-surface border ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-light-border dark:border-white/10 focus:border-brand-blue'
                      } text-light-text dark:text-dark-text placeholder:text-light-subtle dark:placeholder:text-dark-subtle focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-rose-500 font-mono">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-medium text-light-text dark:text-dark-text mb-1"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    placeholder="e.g. Backend Engineering Inquiry"
                    className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-dark-surface border ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-light-border dark:border-white/10 focus:border-brand-blue'
                    } text-light-text dark:text-dark-text placeholder:text-light-subtle dark:placeholder:text-dark-subtle focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all`}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-rose-500 font-mono">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-light-text dark:text-dark-text mb-1"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    placeholder="Write your note or question regarding engineering topics, data synchronization, or opportunities..."
                    className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-dark-surface border ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-light-border dark:border-white/10 focus:border-brand-blue'
                    } text-light-text dark:text-dark-text placeholder:text-light-subtle dark:placeholder:text-dark-subtle focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all resize-y`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-rose-500 font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-blue hover:bg-blue-600 disabled:opacity-60 text-white font-medium text-sm transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {submitting
                        ? 'Sending...'
                        : contact.formService.configured
                        ? 'Send Message'
                        : 'Open in Email Client'}
                    </span>
                  </button>

                  <p className="text-[11px] text-light-subtle dark:text-dark-subtle">
                    {contact.formService.configured
                      ? 'Delivers via configured backend endpoint'
                      : 'Direct draft workflow · No third-party data tracking'}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
