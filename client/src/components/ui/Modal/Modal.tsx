'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/utils/cn';

function PortalImpl({
  onClose,
  children,
  //   title,
  closeOnClickOutside,
  isVisible,
}: {
  children: React.ReactNode;
  closeOnClickOutside: boolean;
  isVisible: boolean;
  onClose: () => void;
  //   title: string;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { theme, systemTheme } = useTheme();
  let color = '';
  if (theme === 'system' && systemTheme) {
    color = systemTheme === 'dark' ? 'dark' : '';
  }
  if (theme !== 'system' && theme !== undefined) {
    color = theme === 'dark' ? 'dark' : '';
  }

  useEffect(() => {
    if (modalRef.current !== null) {
      modalRef.current.focus();
    }
  }, []);

  useEffect(() => {
    let modalOverlayElement: HTMLElement | null = null;
    const handler = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    const clickOutsideHandler = (event: MouseEvent) => {
      const target = event.target;
      if (
        modalRef.current !== null &&
        !modalRef.current.contains(target as Node) &&
        closeOnClickOutside
      ) {
        onClose();
      }
    };
    const modelElement = modalRef.current;
    if (modelElement !== null) {
      modalOverlayElement = modelElement.parentElement;
      if (modalOverlayElement !== null) {
        modalOverlayElement.addEventListener('click', clickOutsideHandler);
      }
    }

    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
      if (modalOverlayElement !== null) {
        modalOverlayElement?.removeEventListener('click', clickOutsideHandler);
      }
    };
  }, [closeOnClickOutside, onClose]);
  console.log(isVisible);
  console.log(
    cn(
      'relative flex max-h-[95%] min-h-[6.25rem] min-w-[18.75rem] max-w-[96vw] grow-0 flex-col overflow-hidden rounded-[0.3125rem] bg-gray-300 p-3 dark:bg-primary-lightBackground',
      isVisible ? 'animate-fadeIn' : 'animate-fadeOut',
    ),
  );
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex shrink grow-0 flex-col items-center justify-center bg-gray-500/70',
        color === 'dark' && 'dark bg-[#0a0a14f5]',
      )}
      role='dialog'
    >
      <div
        className={cn(
          'relative flex max-h-[95%] min-h-[6.25rem] min-w-[18.75rem] max-w-[96vw] grow-0 flex-col overflow-hidden rounded-[0.3125rem] bg-gray-300 p-3 dark:bg-primary-lightBackground',
          isVisible ? 'animate-fadeIn' : 'animate-fadeOut',
        )}
        tabIndex={-1}
        ref={modalRef}
      >
        <button
          className='absolute right-3 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-0 transition-all duration-200 ease-in-out hover:shadow-button hover:bg-red-400 hover:shadow-white '
          aria-label='Cerrar'
          title='Cerrar'
          type='button'
          onClick={onClose}
        >
          <Image alt='Close' src={'/images/icons/close.svg'} fill />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export function Modal({
  onClose,
  children,
  //   title,
  isVisible,
  closeOnClickOutside = false,
}: {
  children: React.ReactNode;
  closeOnClickOutside?: boolean;
  onClose: () => void;
  isVisible: boolean;
  // title: string;
}): JSX.Element {
  return createPortal(
    <PortalImpl
      isVisible={isVisible}
      onClose={onClose}
      closeOnClickOutside={closeOnClickOutside}
    >
      {children}
    </PortalImpl>,
    document.body,
  );
}
