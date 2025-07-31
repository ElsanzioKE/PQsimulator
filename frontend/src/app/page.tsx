import Navbar from '@/components/Navbar'

export default function Home() {
	return (
		<main className="min-h-screen bg-gray-100 text-gray-900">
		<Navbar />

		{/* Hero section or Landing */}
		<section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-r from blue-50 to blue-100">
		<h1 className="text-5xl font-extrabold text-blue-700 mb-4">
		PQsimulator
		</h1>
		<p className="text-lg text-gray-600 max-w-xl mb-8">
		Real-time simulation and visualization of power quality parameters
		</p>
		<button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
		Lauch Simulator 
		</button>
		</section>
		</main>
	);
}
