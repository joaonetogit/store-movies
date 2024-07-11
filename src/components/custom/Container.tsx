import { IChildren } from '@/types/base';

export default function Container({ children }: IChildren) {
  return <div className="container">{children}</div>;
}
