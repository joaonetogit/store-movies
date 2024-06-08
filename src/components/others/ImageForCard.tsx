export default function ImageForCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-md">
      <img
        className="block h-full max-h-48 w-full object-contain"
        src={image}
        alt={`Image - ${title}`}
      />
    </div>
  );
}
