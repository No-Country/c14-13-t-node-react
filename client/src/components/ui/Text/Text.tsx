import { textVariants } from './styles';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

interface TextProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>,
    VariantProps<typeof textVariants> {
  className?: string;
  children?: React.ReactNode;
}

const createText = (variant: TextProps['variant']) => {
  switch (variant) {
    case 'body':
      return 'p';
    case 'button':
      return 'span';
    case 'title':
      return 'h1';
    default:
      throw new Error('Text Variant not supported');
  }
};
export const Text = ({ className, variant, ...props }: TextProps) => {
  const TextElement = createText(variant);
  return <TextElement className={cn(textVariants({ variant, className }))} {...props} />;
};
