
import { useState } from "react";
import { Input } from "../../components/input";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const existingEmails = ["usuario@example.com"]; // E-mails cadastrados

  const handleSubmit = (event) => {
    event.preventDefault();
    if (existingEmails.includes(email)) {
      setError("O e-mail informado já está cadastrado. Por favor, use outro e-mail.");
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
    setError(""); // Limpa o erro
    console.log("Registro bem-sucedido!", { name, email, password });
    // Adicione a lógica para enviar os dados ao servidor
  };

  return (
    <main className="flex items-center justify-between h-screen bg-gray-100">
      <section className="w-2/3 relative h-full">
        <img src="login-png1.jpg" className="w-full h-full object-cover filter brightness-75" alt="Register Background" />
        
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-start p-12">
          <div className="text-center mt-16 max-w-xl mx-auto">
            <p className="text-5xl text-white font-extrabold mb-4 whitespace-nowrap">Cadastre-se no Auto Master</p>
            <p className="text-2xl text-white">Sua plataforma de gerenciamento de provas</p>
          </div>
        </div>
      </section>

      <section className="w-1/3 h-full bg-white p-12 rounded-lg shadow-lg flex flex-col justify-center">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold mb-8">CADASTRO</h2>
          <p className="mb-6 text-gray-600">Por favor, insira suas informações para criar uma conta.</p>

          {error && <p className="mb-4 text-red-600">{error}</p>} {/* Mensagem de erro */}

          <div className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor="name">Nome</label>
            <Input 
              type="text" 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome Completo" 
              className="h-12 text-lg w-full p-4 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
            <Input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email" 
              className="h-12 text-lg w-full p-4 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-8">
            <label className="block text-lg font-medium mb-2" htmlFor="password">Senha</label>
            <Input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha" 
              className="h-12 text-lg w-full p-4 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-8">
            <label className="block text-lg font-medium mb-2" htmlFor="confirmPassword">Confirmar Senha</label>
            <Input 
              type="password" 
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirme sua Senha" 
              className="h-12 text-lg w-full p-4 border border-gray-300 rounded"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-3 rounded font-bold text-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Cadastrar
          </button>

          <div className="flex justify-between mt-6 text-sm">
            <a href="/login" className="text-blue-500 hover:underline">Já possui uma conta? Entre aqui</a>
          </div>
        </form>
      </section>
    </main>
  );
}