import ChatForm from "@/components/ChatForm";

export default function Home() {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-400 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl inline-block">
          Chatbot AI using
          <span className="sm:block">Gemini Flash 1.5</span>
        </h1>
      </div>
      <ChatForm />
    </div>
  );
}
