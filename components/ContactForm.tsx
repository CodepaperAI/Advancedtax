"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label>
        <span>Name</span>
        <input required name="name" autoComplete="name" />
      </label>
      <label>
        <span>Email</span>
        <input required type="email" name="email" autoComplete="email" />
      </label>
      <label>
        <span>Phone</span>
        <input name="phone" autoComplete="tel" />
      </label>
      <label>
        <span>What do you need help with?</span>
        <select name="need" defaultValue="Business advisory">
          <option>Business advisory</option>
          <option>Tax return or planning</option>
          <option>BAS or bookkeeping</option>
          <option>SMSF</option>
          <option>Payroll and STP</option>
          <option>Other</option>
        </select>
      </label>
      <label className="form-wide">
        <span>Message</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell us what is changing in the business, what is due, or where you need clarity."
        />
      </label>
      <button className="button button-gold form-wide" type="submit">
        <Send size={18} />
        Request consultation
      </button>
      <AnimatePresence>
        {sent && (
          <motion.p
            className="form-success form-wide"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
          >
            <CheckCircle2 size={18} />
            Thanks. This prototype captured the request state; connect the form
            action before launch.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
