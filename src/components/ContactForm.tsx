/* eslint-disable react/no-unknown-property */
"use client";

import { useState } from "react";
import { z } from "zod";
import { services } from "@/data/services";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    (async () => {
      try {
        setIsSubmitting(true);

        const FORM_ENDPOINT = "https://formspree.io/f/meepjbpv";

        // Formspree works best with regular form fields (FormData), not JSON.
        const formData = new FormData();
        formData.set("name", form.name);
        formData.set("email", form.email);
        formData.set("phone", form.phone);
        formData.set("service", form.service);
        formData.set("message", form.message);

        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (!res.ok) {
          const data = (await res.json().catch(() => null)) as { error?: string } | null;
          throw new Error(data?.error ?? "Failed to submit form.");
        }

        toast.success("Thank you! We'll get back to you shortly.");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Failed to submit form.");
      } finally {
        setIsSubmitting(false);
      }
    })();
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow";

  return (
    <section className="section-padding" id="contact-form">
      <div className="container-main max-w-2xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-3">
          Get a Free Quote
        </h2>
        <p className="text-center text-muted-foreground mb-8">Fill out the form and we'll get back to you within 30 minutes.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                name="email"
                placeholder="Email Address"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                name="phone"
                placeholder="Phone Number"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <select
              name="service"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className={inputClass}
            >
              <option value="">Select a Service</option>
              {services.map((s) => (
                <option key={s.id} value={s.slug}>{s.title}</option>
              ))}
            </select>
            {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={inputClass}
            />
            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-heading font-bold py-3 rounded-lg hover:bg-primary-dark transition-colors text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
