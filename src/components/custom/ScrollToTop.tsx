import useScrollToTop from '@/hooks/components/useScrollToTop';

export default function ScrollToTop() {
  const { handleScrollToTop, isVisible } = useScrollToTop();

  return (
    <div className="fixed bottom-6 right-7 sm:bottom-20">
      <button
        onClick={handleScrollToTop}
        className={`flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        ↑
      </button>
    </div>
  );
}
