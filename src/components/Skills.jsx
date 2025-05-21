import SectionWrapper from "./SectionWrapper";
import DynamicIcon from "./DynamicIcon";

export default function Skills({ content }) {
  return (
    <SectionWrapper id="skills" title={content.title} overview={content.overview}>
      {content.categories.map((category, idx) => (
        <div key={idx} className="mb-6 flex flex-col items-center">
          <h4 className="font-semibold text-[var(--color-foreground)] text-lg mb-2">{category.name}</h4>
          <ul className="flex flex-wrap justify-center gap-2">
            {category.items.map((item, i) => (
              <li
                key={i}
                className="bg-[var(--color-background)] text-[var(--color-foreground)] border px-4 py-2 rounded-full text-md hover:bg-[var(--color-secondary)] flex flex-row gap-2 justify-center items-center hover:text-white">
                <DynamicIcon name={item} className="" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </SectionWrapper>
  );
}
