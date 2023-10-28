import React from 'react';

export const FormContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mt-10 w-[90%] max-w-[23.75rem] rounded-3xl bg-white p-7 dark:bg-primary-lightBackground'>
      {children}
    </div>
  );
};
