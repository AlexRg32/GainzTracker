const footer = () => {
    return (
        <footer className="bg-[#0f172a] text-[#f1f5f9] py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
            <p className="text-sm mb-2">© {new Date().getFullYear()} Gainz Tracker. Todos los derechos reservados.</p>
            <p className="text-sm">
            Desarrollado por <span className="text-[#22d3ee] font-semibold">Alejandro Ruiz</span>
            </p>
        </div>
        </footer>
    );
    }
export default footer;