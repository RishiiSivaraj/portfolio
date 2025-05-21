// components/Certificates.jsx
import SectionWrapper from "./SectionWrapper";

export default function Certificates({ content }) {
  return (
    <SectionWrapper id="certificates" title={content.title} overview={content.overview}>
      <div className="space-y-6">
        {content.items.map((cert, idx) => (
          <div key={idx} className="p-4 border rounded-md shadow-sm bg-white[var(--color-foreground)]">
            <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{cert.name}</h3>
            <p className="text-sm text-[var(--color-foreground)]">
              {cert.provider} &middot; <span>{cert.date}</span>
            </p>
            <p className="mt-2 text-[var(--color-foreground)]">{cert.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}