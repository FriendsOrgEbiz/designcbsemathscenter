import React from 'react';
import { BookOpen } from 'lucide-react';

interface LogoProps {
  white?: boolean;
}

const Logo: React.FC<LogoProps> = ({ white = false }) => {
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${white ? 'bg-white' : 'bg-primary-600'}`}>
      <BookOpen size={20} className={white ? 'text-primary-600' : 'text-white'} />
    </div>
  );
};

export default Logo;