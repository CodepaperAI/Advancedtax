"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  return (
    <form
      className="contact-form"
      onSubmit={async (event) => {
        event.preventDefault();
        const formElement = event.currentTarget;
        const form = new FormData(formElement);

        setStatus("sending");
        setError("");

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: form.get("name"),
              email: form.get("email"),
              phone: form.get("phone"),
              need: form.get("need"),
              message: form.get("message")
            })
          });

          if (!response.ok) {
            const data = (await response.json().catch(() => null)) as
              | { error?: string }
              | null;
            throw new Error(
              data?.error || "We could not send your request. Please call or email us."
            );
          }

          formElement.reset();
          setStatus("sent");
        } catch (sendError) {
          setError(
            sendError instanceof Error
              ? sendError.message
              : "We could not send your request. Please call or email us."
          );
          setStatus("error");
        }
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
          placeholder="Tell us what you need help with."
        />
      </label>
      <button
        className="button button-gold form-wide"
        type="submit"
        disabled={status === "sending"}
      >
        <Send size={18} />
        {status === "sending" ? "Sending request..." : "Request consultation"}
      </button>
      <AnimatePresence>
        {status === "sent" && (
          <motion.p
            className="form-success form-wide"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
          >
            <CheckCircle2 size={18} />
            Thanks. Your consultation request has been sent to AATBS.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            className="form-error form-wide"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
          >
            <AlertCircle size={18} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
