import SectionWrapper from "./SectionWrapper";
import DynamicIcon from './DynamicIcon';

export default function Contact({ content }) {
  const colors = (platform) => { 
    switch (platform) {
      case "Instagram":
        return "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
      case "GitHub":
        return "bg-[var(--color-foreground)]"
      case "LinkedIn":
        return "bg-[#0072b1]"
    
      default:
        return "bg-[var(--color-background)]"
        break;
    }
  }
  return (
    <SectionWrapper
      id="contact"
      title={content.title}
      overview={content.overview}
    >
      <p className="text-2xl text-center mb-8 mt-8 text-[var(--color-foreground)]">{content.description}</p>
      <div className="grid gap-8 px-6 pt-30 mx-auto lg:grid-cols-1">
        <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-3">
          {content.socials.map((social, idx) => {
            return (
              <div key={idx} className={`p-4 rounded-lg bg-[var(--color-background)] md:p-6 border`}>
                <span className={`inline-block p-3 text-[var(--color-background)] rounded-lg ${colors(social.platform)}`}>
                  <DynamicIcon name={social.platform} size={20} />
                </span>

                <h2 className="mt-4  text-2xl font-medium text-gray-800">
                  {social.platform}
                </h2>
                <a
                  className="mt-2 text-xl text-blue-500 dark:text-blue-400"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.username}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
