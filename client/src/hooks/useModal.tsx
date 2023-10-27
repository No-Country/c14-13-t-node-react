'use client';
import { useCallback, useMemo, useState } from 'react';

import { Modal } from '@/components/ui/Modal/Modal';

export function useModal(): [
  JSX.Element | null,
  (closeOnClickOutside: boolean, showModal: (onClose: () => void) => JSX.Element) => void,
] {
  const [modalContent, setModalContent] = useState<null | {
    closeOnClickOutside: boolean;
    content: JSX.Element;
    // title: string;
  }>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setModalContent(null);
    }, 300);
  }, []);

  const modal = useMemo(() => {
    if (modalContent === null) {
      return null;
    }
    const { content, closeOnClickOutside } = modalContent;
    return (
      <Modal isVisible={isVisible} onClose={onClose} closeOnClickOutside={closeOnClickOutside}>
        {content}
      </Modal>
    );
  }, [modalContent, onClose, isVisible]);

  const showModal = useCallback(
    (
      //   title: string,
      // eslint-disable-next-line no-shadow
      closeOnClickOutside: boolean,
      getContent: (onClose: () => void) => JSX.Element,
    ) => {
      setIsVisible(true);
      setModalContent({
        closeOnClickOutside,
        content: getContent(onClose),
        // title,
      });
    },
    [onClose],
  );

  return [modal, showModal];
}
