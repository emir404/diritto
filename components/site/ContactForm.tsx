"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { btnPrimary } from "@/lib/ui";

/**
 * GDPR contact form — their real field set (Nome, E-mail, Telefono, Città,
 * Messaggio + consent). Front-end demo (no backend): validates the consent gate
 * and confirms. Composed from shadcn primitives, re-skinned by the token bridge.
 */
export function ContactForm() {
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div role="status" className="rounded-xl border border-border bg-background p-8 text-center">
        <p className="font-display text-2xl text-primary">Grazie.</p>
        <p className="mt-2 text-muted-foreground">
          Abbiamo ricevuto la tua richiesta: ti ricontattiamo al più presto.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (!agreed) {
          setError("Per procedere è necessario accettare l'informativa privacy.");
          document.getElementById("privacy")?.focus();
          return;
        }
        setError(null);
        setSent(true);
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome e cognome</Label>
          <Input id="nome" name="nome" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" spellCheck={false} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tel">Numero di telefono</Label>
          <Input id="tel" name="tel" type="tel" autoComplete="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="citta">Città e provincia</Label>
          <Input id="citta" name="citta" autoComplete="address-level2" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="messaggio">Messaggio</Label>
        <Textarea id="messaggio" name="messaggio" rows={5} required />
      </div>
      <div className="flex items-start gap-3">
        <Checkbox
          id="privacy"
          checked={agreed}
          onCheckedChange={(v) => {
            setAgreed(v === true);
            if (v === true) setError(null);
          }}
          className="mt-0.5"
        />
        <Label htmlFor="privacy" className="text-sm font-normal leading-snug text-muted-foreground">
          Dichiaro di aver letto e ben compreso l&rsquo;Informativa Privacy &amp; Cookies ex art. 13
          GDPR.
        </Label>
      </div>
      {error && (
        <p role="alert" className="text-sm text-brand-terracotta">
          {error}
        </p>
      )}
      <button type="submit" className={btnPrimary}>
        Invia
      </button>
    </form>
  );
}
