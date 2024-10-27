import { useState } from "react";
import { Input } from "../../components/input";

export function Login() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const [loginError, setLoginError] = useState(""); // Para gerenciar erros de login
  const [loading, setLoading] = useState(false); // Para controlar o estado de carregamento

  const handleSubmit = async (event) => {
    console.log("srgse");
    
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Verificação de login simplificada
    if (email === "" || password === "") {
      setEmailError(email === "" ? "O e-mail é obrigatório." : "");
      setPasswordError(password === "" ? "A senha é obrigatória." : "");
      return;
    }

    setEmailError("");
    setPasswordError("");
    setLoading(true);
    setLoginError(""); // Limpa qualquer erro anterior

    try {
      const response = await fetch("https://0ec1-187-16-241-8.ngrok-free.app/api/Auth/login", { // URL da sua API
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.message) {
          console.log (erroData.message)
          setLoginError(errorData.message); // Captura a mensagem de erro retornada pela API
        } else {
          setLoginError("Ocorreu um erro ao realizar o login."); // Mensagem padrão
        }
      } else {
        // Login bem-sucedido: redirecionar ou realizar ações
        const data = await response.json();
        console.log("Login bem-sucedido:", data);
        // Redirecionar ou armazenar token, etc.
      }
    } catch (error) {
      setLoginError("Erro de conexão: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-between h-screen bg-gray-100">
      <section className="w-2/3 relative h-full">
        <img 
          src="login-png1.jpg" 
          className="w-full h-full object-cover filter brightness-75" 
          alt="Login Background" 
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-start p-12">
          <div className="text-center mt-16 max-w-xl mx-auto">
            <p className="text-5xl text-white font-extrabold mb-4 whitespace-nowrap">Bem-vindo ao Auto Master</p>
            <p className="text-2xl text-white">Sua plataforma de gerenciamento de provas</p>
          </div>
        </div>
      </section>

      <section className="w-1/3 h-full bg-white p-12 rounded-lg shadow-lg flex flex-col justify-center">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold mb-8">LOGIN</h2>
          <p className="mb-6 text-gray-600">Por favor, insira suas credenciais para acessar sua conta.</p>
          
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
            <Input 
              type="email" 
              id="email"
              name="email"
              placeholder="Email" 
              className="h-12 text-lg w-full p-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>

          <div className="mb-8">
            <label className="block text-lg font-medium mb-2" htmlFor="password">Senha</label>
            <Input 
              type="password" 
              id="password"
              name="password"
              placeholder="Senha" 
              className="h-12 text-lg w-full p-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-3 rounded font-bold text-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Entrar
          </button>
          <button
            type="button"
            className="w-full bg-green-600 text-white p-3 mt-4 rounded font-bold text-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
            onClick={() => window.location.href = '/register'}
          >
            Cadastrar
          </button>

          <div className="flex justify-between mt-6 text-sm">
            <a href="#" className="text-blue-500 hover:underline">Esqueci minha senha</a>
          </div>

          {/* Mensagens de erro */}
          {emailError && (
            <p className="mt-4 text-red-600 text-center">
              {emailError} <a href="/register" className="text-blue-500 hover:underline">Clique aqui para se cadastrar.</a>
            </p>
          )}
          {passwordError && (
            <p className="mt-4 text-red-600 text-center">
              {passwordError} <a href="#" className="text-blue-500 hover:underline">Esqueceu sua senha?</a>
            </p>
          )}
        </form>
      </section>
    </main>
  );
}