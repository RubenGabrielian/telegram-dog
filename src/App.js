import { useState } from 'react'
import { Dog, Calendar, List, Bone, PawPrint } from 'lucide-react'

const dogBreeds = [
  "Labrador Retriever", "German Shepherd", "Golden Retriever", "French Bulldog", "Bulldog",
  "Poodle", "Beagle", "Rottweiler", "Pointer", "Dachshund", "Yorkshire Terrier", "Boxer"
]


function App() {
  const [step, setStep] = useState(1)
  const [dogName, setDogName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [breed, setBreed] = useState('')

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    console.log('Submitted:', { dogName, birthDate, breed })
    // Here you would typically send this data to your backend
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="bg-yellow-400 p-6">
        <h1 className="text-4xl font-bold text-center text-purple-800 flex items-center justify-center space-x-2">
          <Bone className="w-10 h-10" />
          <span>Welcome to PawSome!</span>
          <PawPrint className="w-10 h-10" />
        </h1>
      </div>
      <div className="p-8">
        <div className="space-y-8">
          <div className="flex justify-between mb-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                  i <= step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {i}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Dog className="w-12 h-12 text-blue-500" />
                <label htmlFor="dogName" className="text-2xl font-medium text-gray-700">
                  What's your dog's name?
                </label>
              </div>
              <input
                id="dogName"
                type="text"
                placeholder="Enter your dog's name"
                value={dogName}
                onChange={(e) => setDogName(e.target.value)}
                className="w-full text-xl p-6 border-4 border-blue-300 focus:border-blue-500 rounded-xl outline-none"
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Calendar className="w-12 h-12 text-green-500" />
                <label htmlFor="birthDate" className="text-2xl font-medium text-gray-700">
                  When was your dog born?
                </label>
              </div>
              <input
                id="birthDate"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full text-xl p-6 border-4 border-green-300 focus:border-green-500 rounded-xl outline-none"
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <List className="w-12 h-12 text-purple-500" />
                <label htmlFor="breed" className="text-2xl font-medium text-gray-700">
                  What breed is your dog?
                </label>
              </div>
              <select
                id="breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                className="w-full text-xl p-6 border-4 border-purple-300 focus:border-purple-500 rounded-xl outline-none"
              >
                <option value="">Select a breed</option>
                {dogBreeds.map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={handlePrevious}
                className="text-xl px-8 py-6 rounded-xl border-4 border-gray-300 hover:bg-gray-100"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={handleNext}
                className="text-xl px-8 py-6 rounded-xl bg-blue-500 hover:bg-blue-600 text-white ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="text-xl px-8 py-6 rounded-xl bg-green-500 hover:bg-green-600 text-white ml-auto"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    <DogIllustration className="absolute bottom-0 right-0 w-64 h-64 text-yellow-300 opacity-50" />
  </div>
  );
}

export default App;


function DogIllustration(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      {...props}
    >
      <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm294.56 0c-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34-29.12-6.96-61.15 15.48-71.56 50.13zM256 160c-45.42 0-83.75-29.49-95.79-69.82-26.69-90.15 42.32-154.42 95.79-154.42s122.48 64.27 95.79 154.42C339.75 130.51 301.42 160 256 160z" />
    </svg>
  )
}