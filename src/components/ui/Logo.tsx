// src/components/Logo.tsx


type LogoProps = {
  height?: number;
  width?: number;
  alt?: string;
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({
  alt = "Mani Artisan Logo",
  className = "",
  width = 60,
  height = 32
}) => {
  return (
    <div style={{width:width, height:height}}>
      <img
        src={"/images/logo.png"}
        alt={alt}
        className={`object-contain w-full h-full ${className}`}
      />
    </div>
  );
};
