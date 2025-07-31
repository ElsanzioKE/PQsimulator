export default function SimulatorPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Simulator Dashboard</h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Sensor Input:</label>
        <input
          type="text"
          placeholder="Enter Sensor ID or wait for auto-detect"
          className="border p-2 rounded w-full max-w-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Voltage</h2>
          <div className="h-40 bg-blue-100 rounded flex items-center justify-center">[Graph]</div>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Current</h2>
          <div className="h-40 bg-green-100 rounded flex items-center justify-center">[Graph]</div>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">THD</h2>
          <div className="h-40 bg-red-100 rounded flex items-center justify-center">[Graph]</div>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Frequency</h2>
          <div className="h-40 bg-purple-100 rounded flex items-center justify-center">[Graph]</div>
        </div>
      </div>
    </div>
  )
}

