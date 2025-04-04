export default function AppButton({ children }) {
  return (
    <button className="px-5 py-2.5 bg-red-800 rounded-2xl text-neutral-50">
      {children}
    </button>
  );
}
