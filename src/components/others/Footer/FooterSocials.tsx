import { DataFooterSocials } from '@/constants/DataFooterSocials';
import FooterSocialsLink from './FooterSocialsLink';

export default function FooterSocials() {
  return (
    <div className="flex items-center gap-4 flex-1 justify-end">
      <p>Follow me on:</p>
      {DataFooterSocials.map((social, index) => (
        <FooterSocialsLink key={index} link={social.link}>
          {social.icon}
        </FooterSocialsLink>
      ))}
    </div>
  );
}
