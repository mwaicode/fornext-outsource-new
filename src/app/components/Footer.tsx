"use client"; // Add this at the top

export default function Footer() {
  return (
    <footer className="text-center py-4 bg-gray-900 text-gray-300">
      &copy; {new Date().getFullYear()} Fornxt - All Rights Reserved.
    </footer>
  );
}
