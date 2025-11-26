// src/components/layout/Background.tsx
const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Capa 1: El patrón de rejilla (Grid) */}
      {/* Usamos un gradiente lineal muy sutil para crear las líneas */}
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Capa 2: Máscara radial */}
      {/* Esto hace que la rejilla se desvanezca hacia los bordes, dando foco al centro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,transparent,rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_800px_at_50%_200px,transparent,#020617)]"></div>
    </div>
  );
};

export default Background;