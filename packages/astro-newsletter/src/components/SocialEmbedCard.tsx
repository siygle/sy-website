import type { ComponentProps } from 'react';
import type { Element } from 'hast';
import { readEmbedMeta, type EmbedMeta } from '../markdown/rehype-social-embed';

// Live-preview renderer for the `div.social-embed` wrappers that rehypeSocialEmbed
// produces. It intentionally draws a lightweight card (platform + link) instead of
// mounting the real embed, so the editor preview issues no third-party requests —
// the true embed is what `Save & preview` shows. All styling lives in admin.css
// (see the README Tailwind gotcha: no bare utility-name tokens in this .tsx).

type DivProps = ComponentProps<'div'> & { node?: Element };

const PLATFORM_LABEL: Record<EmbedMeta['type'], string> = {
  twitter: 'X (Twitter)',
  bluesky: 'Bluesky',
  youtube: 'YouTube',
};

function EmbedCard({ meta }: { meta: EmbedMeta }) {
  return (
    <div className="nl-embed-card">
      <span className="nl-embed-platform">{PLATFORM_LABEL[meta.type]}</span>
      <a href={meta.url} target="_blank" rel="noopener noreferrer">
        {meta.url}
      </a>
      <span className="nl-embed-hint">
        Renders as a live embed on the site — use “Save &amp; preview”.
      </span>
    </div>
  );
}

// Passed to `previewOptions.components.div`. When the div is a social-embed
// wrapper, render the card; otherwise fall through to a plain div. `node` is a
// react-markdown internal, so it must be dropped before spreading onto the DOM.
export function EmbedDiv({ node, children, ...rest }: DivProps) {
  const meta = node ? readEmbedMeta(node) : null;
  if (meta) return <EmbedCard meta={meta} />;
  return <div {...rest}>{children}</div>;
}
