import SectionWrapper from "./SectionWrapper";

export default function About({ content }) {
  return (
    <SectionWrapper id="about" title={content.title} overview={content.overview}>
      <h3 className="text-4xl font-semibold mb-2">{content.subtitle}</h3>
      {content.description.map((des,idx)=>{
        console.log();
        return (
          <p className="text-xl leading-[3rem]" key={idx}>{des}</p>
        )
      })}
    </SectionWrapper>
  );
}
