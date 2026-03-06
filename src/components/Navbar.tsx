export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-10 text-white">
      <h1 className="text-xl font-semibold">Prathmesh</h1>

      <div className="space-x-8 text-sm">
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#projects" className="hover:text-gray-300">Work</a>
        <a href="#life" className="hover:text-gray-300">Life</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  )
}