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
    case 'homeTitle':
      return 'h2';
    case 'detailsTitle':
      return 'h2';
    case 'detailsLabel':
      return 'span';
    case 'detailsValue':
      return 'span';
    case 'specialTitle':
      return 'h1';
    case 'statisticsValue':
      return 'p';
    case 'statisticsDescription':
      return 'p';
    case 'modalTitle':
      return 'h1';
    case 'modalDescription':
      return 'p';
    default:
      throw new Error('Text Variant not supported');
  }
};
export const Text = ({ className, variant = 'body', ...props }: TextProps) => {
  const TextElement = createText(variant);
  return <TextElement className={cn(textVariants({ variant, className }))} {...props} />;
};
