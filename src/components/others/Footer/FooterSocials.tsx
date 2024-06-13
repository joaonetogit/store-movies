import { DataFooterSocials } from '@/constants/DataFooterSocials';
import FooterSocialsLink from './FooterSocialsLink';

export default function FooterSocials() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-end">
      <p>Follow me on:</p>
      <div className="flex items-center justify-center gap-4">
        {DataFooterSocials.map((social, index) => (
          <FooterSocialsLink key={index} link={social.link}>
            {social.icon}
          </FooterSocialsLink>
        ))}
      </div>
    </div>
  );
}
