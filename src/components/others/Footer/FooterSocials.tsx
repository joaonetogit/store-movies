import { DataFooterSocials } from '@/constants/DataFooterSocials';
import FooterSocialsLink from './FooterSocialsLink';

export default function FooterSocials() {
  return (
    <div className="flex items-center gap-4">
      <p>Follow me on:</p>
      {DataFooterSocials.map((social, index) => (
        <FooterSocialsLink key={index} link={social.link}>
          {social.icon}
        </FooterSocialsLink>
      ))}
    </div>
  );
}
