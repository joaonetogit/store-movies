import { ISortButtonListProps } from "@/types/components/SortButtonList";

export default function SortButtonList({ children }: ISortButtonListProps) {
  return <div className="flex items-center gap-4">{children}</div>;
}
