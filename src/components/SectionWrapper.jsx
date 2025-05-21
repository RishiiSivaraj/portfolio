
export default function SectionWrapper({ id, title, overview, children }) {
  return (
    <section
      id={id}
      className="min-h-screen py-20 px-4 max-w-5xl mx-auto flex flex-col justify-top scroll-mt-16"
    >
      <h2 className="text-5xl font-bold mb-4 text-center">{title}</h2>
      {overview && (
        <p className="text-2xl text-center mb-8 text-[var(--color-foreground)]">
          {overview}
        </p>
      )}
      <div className="text-[var(--color-foreground)]">{children}</div>
    </section>
  );
}
