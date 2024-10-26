import { Input } from "../../components/input";

export function Login() {
 return (
   <main
    className="flex items-center justify-between h-screen bg-gray-100"
   >
    <section
    className="w-2/3 relative h-full bg-cover bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
    >
      <div
      className="w-full h-full flex justify-center items-center absolute inset-0 bg-black bg-opacity-50"
      >
      <div>
        <p
        className="text-4xl text-white font-bold"
        >
          Bem-vindo ao Auto Master
        </p>
        <p
        className="text-white"
        >
          Sua plataforma de gerenciamento de provas
        </p>
      </div>
      </div>

    </section>
    <section
      className="w-1/3 h-full bg-white p-10 rounded-lg shadow-lg "
    >
      <form action="">
        <Input
          className="mb-4"
        />
      </form>
    </section>
   </main>
 );
}