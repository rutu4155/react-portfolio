import { Github,Linkedin, Mail } from "lucide-react";

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>

      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Center content */}
            <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <div className="mb-6">
          <h1 className="text-6xl md:text-7xl mb-4 font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">

            Rutuja Bhosale
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 mb-4">

            Full Stack Software Developer
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Crafting elegant solutions to complex problems with modern web technologies</p>
            <div className="flex justify-center gap-4 mb-8 ">
              <a href="https://github.com/rutu4155"
              target="_blank"
               rel="noopener noreferrer"
               className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center"><Github size={18}/></a>
                <a href="https://www.linkedin.com/in/rutuja-bhosale-a26487242/"
              target="_blank"
               rel="noopener noreferrer"
               className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center"><Linkedin size={18}/></a>
                <a href="rutubhosale07@gmail.com"
              target="_blank"
               rel="noopener noreferrer"
               className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center"><Mail size={18}/></a>
            </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
