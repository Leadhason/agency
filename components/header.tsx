import Link from 'next/link';


const Header = () => {
    return (
        <div className="absolute top-0 left-0 flex w-full items-center bg-transparent p-2 my-3 mb-24">
            <h1 className="text-3xl font-bold text-white capitalize">
                <Link href="/">EMPIRE</Link>
            </h1>
            <div className="flex items-center justify-center gap-5 w-md bg-white/50 p-3 text-md font-light rounded-lg mx-auto">
                <Link href="/" className="hover:text-gray-700 hover:underline-offset-6 hover:underline cursor-pointer transition-all duration-300">Home</Link>
                <Link href="/"  className="hover:text-gray-700 hover:underline-offset-6 hover:underline cursor-pointer transition-all duration-300">About</Link>
                <Link href="/"  className="hover:text-gray-700 hover:underline-offset-6 hover:underline cursor-pointer transition-all duration-300">Services</Link>
                <Link href="/"  className="hover:text-gray-700 hover:underline-offset-6 hover:underline cursor-pointer transition-all duration-300">Contact</Link>
            </div>
        </div>
    )
}

export default Header