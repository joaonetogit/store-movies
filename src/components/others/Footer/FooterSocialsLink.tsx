import { IFooterSocialsLinkProps } from '@/types/components/FooterSocialsLink';

export default function FooterSocialsLink({ children, link }: IFooterSocialsLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-full bg-blue-600 p-2 transition-all hover:bg-blue-800 text-white"
    >
      {children}
    </a>
  );
}
