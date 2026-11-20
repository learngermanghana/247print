"use client";
import type { FormEvent } from "react";
import { SERVICES } from "@/lib/constants";
export function QuoteForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const get = (key: string) => String(fd.get(key) || "").trim();
    const message = [
      "Hello 247 PRINT HOUSE, I would like a printing quote.",
      `Name: ${get("name")}`, `Phone: ${get("phone")}`,
      `Email: ${get("email")}`, `Service: ${get("service")}`,
      `Quantity: ${get("quantity")}`, `Specification: ${get("sizeSpecification")}`,
      `Deadline: ${get("deadline")}`, `Details: ${get("message")}`
    ].join("\n");
    window.location.href = `https://wa.me/233558213040?text=${encodeURIComponent(message)}`;
  }
  return <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit} aria-label="Quote request form">
    <label>Full name<input name="name" type="text" autoComplete="name" required className="mt-1 block w-full rounded border p-2" /></label>
    <label>Phone number<input name="phone" type="tel" autoComplete="tel" required className="mt-1 block w-full rounded border p-2" /></label>
    <label>Email address<input name="email" type="email" autoComplete="email" required className="mt-1 block w-full rounded border p-2" /></label>
    <label>Service needed<select name="service" defaultValue="" required className="mt-1 block w-full rounded border p-2">
      <option value="" disabled>Select a service</option>
      {SERVICES.map(service => <option key={service.slug} value={service.title}>{service.title}</option>)}
    </select></label>
    <label>Quantity<input name="quantity" type="text" placeholder="e.g. 500 copies" required className="mt-1 block w-full rounded border p-2" /></label>
    <label>Size / specification<input name="sizeSpecification" type="text" placeholder="e.g. A5, matte, double-sided" required className="mt-1 block w-full rounded border p-2" /></label>
    <label className="sm:col-span-2">Deadline<input name="deadline" type="date" required className="mt-1 block w-full rounded border p-2" /></label>
    <label className="sm:col-span-2">Project details<textarea name="message" rows={5} placeholder="Design notes, delivery preference, finishing" required className="mt-1 block w-full rounded border p-2" /></label>
    <div className="sm:col-span-2"><button type="submit" className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-700">Continue to WhatsApp</button></div>
  </form>;
}
