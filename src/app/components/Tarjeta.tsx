"use client";

interface MuscleCardProps {
  nombre: string;
  icono: React.ReactNode;
  onClick: () => void;
  children?: React.ReactNode;
}
import React from 'react';

export default function MuscleCard({ nombre, icono, onClick } : MuscleCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-[#1e293b] hover:bg-[#22d3ee] hover:text-[#0f172a] p-6 rounded-xl text-center cursor-pointer transition-all duration-300 w-200 h-50 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl"
    >
      <div className="text-4xl mb-2">
      </div>
        {icono}
      <h3 className="text-xl font-semibold">{nombre}</h3>
    </div>
  );
}
