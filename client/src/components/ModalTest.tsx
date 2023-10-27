'use client';
import { useModal } from '@/hooks/useModal';
import { Button } from './ui';

const Something = ({ _onClose }: { _onClose: () => void }) => {
  return <div>El contenido del modal...</div>;
};

export const ModalTest = () => {
  const [deleteCustomer, showDeleteCustomer] = useModal();

  const handleClick = () => {
    showDeleteCustomer(true, (onClose) => <Something _onClose={onClose} />);
  };
  return (
    <div>
      {deleteCustomer}
      <Button onClick={handleClick}>Mostrar Modal</Button>
    </div>
  );
};
