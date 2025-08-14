export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-gray-400">
            © {currentYear} Azhagu Karthikeyan B.
          </p>
          {/* <p className="text-gray-500 text-sm mt-2">
            Designed and developed with ❤️
          </p> */}
        </div>
      </div>
    </footer>
  );
}
