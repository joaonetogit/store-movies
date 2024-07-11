import { IFooterSocialsLinkProps } from '@/types/components/FooterSocialsLink';

export default function FooterSocialsLink({ children, link, ...props }: IFooterSocialsLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-full bg-blue-600 p-2 text-white transition-all hover:bg-blue-800"
      {...props}
    >
      {children}
    </a>
  );
}
