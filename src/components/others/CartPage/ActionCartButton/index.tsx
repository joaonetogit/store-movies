import { Link } from 'react-router-dom';

export default function ActionCartButton({ label, to }: { label: string; to: string }) {
  return (
    <Link to={to} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
      {label}
    </Link>
  );
}
