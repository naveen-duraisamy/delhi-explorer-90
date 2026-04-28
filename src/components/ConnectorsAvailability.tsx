import { AlertTriangle, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";

const availabilitySignals = [
  "GitHub does not appear when you open Connectors.",
  "Command Palette search for GitHub returns no project connection action.",
  "You are not the workspace owner or do not have permission to manage integrations.",
];

const nextSteps = [
  "Ask the workspace owner or admin to check whether GitHub integrations are allowed for your workspace.",
  "Confirm you are using the main project editor, then try Cmd+K or Ctrl+K and search for GitHub.",
  "If GitHub is still missing, contact Lovable support with your workspace name and a screenshot of the Connectors list.",
];

const ConnectorsAvailability = () => {
  return (
    <section id="connectors" className="bg-secondary border-y border-border py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.28em] text-accent font-medium mb-4">
              Connectors availability
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-5">
              GitHub may be hidden by workspace permissions
            </h2>
            <p className="font-secondary text-lg md:text-xl text-muted-foreground leading-relaxed italic">
              If GitHub is missing from the Connectors list, it usually means your account cannot manage that integration in this workspace, or the feature is not enabled for the workspace.
            </p>
          </div>

          <div className="grid gap-5">
            <article className="bg-card border border-border rounded-md p-6 md:p-7">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <AlertTriangle size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-3">How to tell</h3>
                  <ul className="space-y-3">
                    {availabilitySignals.map((signal) => (
                      <li key={signal} className="flex gap-3 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                        <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        <span>{signal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article className="bg-card border border-border rounded-md p-6 md:p-7">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <CheckCircle2 size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-3">What to do next</h3>
                  <ol className="space-y-3">
                    {nextSteps.map((step, index) => (
                      <li key={step} className="flex gap-3 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                        <span className="font-heading text-accent">{String(index + 1).padStart(2, "0")}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <a
                    href="https://docs.lovable.dev/integrations/github"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.18em] text-accent hover:text-foreground transition-colors duration-300"
                  >
                    GitHub integration docs
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectorsAvailability;