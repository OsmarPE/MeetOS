import { CircleAlert, LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardInfoProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'default' | 'error' | 'success' | 'warning';
  className?: string;
  onButtonClick?: () => void;
  variantButton?: 'default' | 'outline';
}

const variantStyles = {
  default: {
    iconBg: 'border-gray-200 bg-gray-50',
    iconColor: 'text-primary',
  },
  error: {
    iconBg: 'border-red-200 bg-red-50',
    iconColor: 'text-red-600',
  },
  success: {
    iconBg: 'border-green-200 bg-green-50',
    iconColor: 'text-green-600',
  },
  warning: {
    iconBg: 'border-yellow-200 bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
};

export default function CardInfo({
  icon: Icon = CircleAlert,
  title,
  description,
  buttonText,
  buttonHref,
  variant = 'default',
  className,
  variantButton = 'default',
  onButtonClick,
}: CardInfoProps) {
  const styles = variantStyles[variant];
  
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div 
      className={cn(
        'border text-center border-gray-200 rounded-lg p-6 max-w-md w-[90%]',
        'bg-white',
        className
      )}
    >
      {/* Icon Container */}
      <div 
        className={cn(
          'mb-4 flex mx-auto items-center justify-center size-12 rounded-full border',
          styles.iconBg
        )}
      >
        <Icon className={cn('size-5', styles.iconColor)} />
      </div>

      {/* Title */}
      <h2 className='text-lg font-semibold leading-6 text-gray-900 mb-2'>
        {title}
      </h2>

      {/* Description */}
      <p className='text-gray-600 text-sm mb-6 leading-relaxed'>
        {description}
      </p>

      {/* Button */}
      {(buttonText || buttonHref) && (
        <Button 
          variant={variantButton}
          className="w-full"
          asChild={!!buttonHref}
          onClick={!buttonHref ? handleButtonClick : undefined}
        >
          {buttonHref ? (
            <Link href={buttonHref} className="font-medium">
              {buttonText}
            </Link>
          ) : (
            <span className="font-medium">{buttonText}</span>
          )}
        </Button>
      )}
    </div>
  );
}