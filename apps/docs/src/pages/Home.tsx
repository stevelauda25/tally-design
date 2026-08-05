import { Link } from 'react-router-dom';
import { PageHeader } from '../components/docs/PageHeader.js';
import { foundationRoutes } from '../lib/routes.js';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-8 py-10">
      <PageHeader
        title="tally-ui Design System"
        description="Build consistent Tally experiences from shared color, typography, spacing, radius, and elevation foundations."
      />
      <section aria-labelledby="foundations-heading">
        <div className="mb-4">
          <h2 id="foundations-heading" className="text-lg font-semibold text-default">
            Foundations
          </h2>
          <p className="mt-1 text-sm text-subtle">
            Start with the core design decisions that shape every Tally interface.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {foundationRoutes.map((entry) => (
            <Link
              key={entry.path}
              to={entry.path}
              className="group rounded-lg border border-default bg-surface p-5 transition-colors duration-fast hover:border-strong hover:bg-muted/40"
            >
              <h3 className="font-semibold text-default group-hover:text-brand">
                {entry.label}
              </h3>
              <p className="mt-2 text-sm text-subtle">
                Explore the {entry.label.toLowerCase()} foundation and usage guidance.
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
