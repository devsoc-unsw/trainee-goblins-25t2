import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="email" className="text-lg font-bold">
        Email:
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className="bg-gray-100 p-2 rounded-md"
      />
      <label htmlFor="password" className="text-lg font-bold">
        Password:
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        className="bg-gray-100 p-2 rounded-md"
      />
      <button
        formAction={login}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Log in
      </button>
      <button
        formAction={signup}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Sign up
      </button>
    </form>
  )
}
