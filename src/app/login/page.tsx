import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="container w-[40vw]">
         <h1 className="p-4 pt-4 text-center text-2xl font-bold md:text-4xl text-[#0e131f]">Log In</h1>

        <form className="flex flex-col gap-4 w-full">
           <input
             id="email"
             name="email"
             type="email"
             required
             placeholder="Email"
             className="bg-gray-100 p-2 rounded-md flex-1"
           />
           
           <input
             id="password"
             name="password"
             type="password"
             required
             placeholder="Password"
             className="bg-gray-100 p-2 rounded-md flex-1"
           />
           
          <button
            formAction={login}
            className="bg-[#d9dce8] text-[#38405f] hover:bg-[#38405f] hover:text-[#efefef] font-bold py-2 px-4 rounded-full"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}
