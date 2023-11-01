'use client';
import { useState } from 'react';
import { Dot, ChevronRightSquare } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/Accordion/Accordion';
import { sidebarData } from './data';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { cn } from '@/utils/cn';

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const { data: session } = useSession();
  const isAdmin = session?.user.role === 'admin';
  return (
    <>
      <nav
        className={cn(
          'h-auto w-[3rem] flex-col items-start justify-start bg-white pl-2 pr-4 pt-4 text-black shadow-right duration-300 dark:bg-primary-lightBackground md:visible md:flex md:min-w-[15rem]',
          showSidebar ? 'z-10 min-w-[15rem]' : 'min-w-[2rem] overflow-hidden',
        )}
      >
        <div className='flex w-full justify-end'>
          <button className='visible md:hidden' onClick={() => setShowSidebar(!showSidebar)}>
            <ChevronRightSquare
              className={cn(
                'text-primary-lightBlue duration-300',
                showSidebar ? 'right-0 rotate-180' : 'rotate-0',
              )}
            />
          </button>
        </div>
        <Accordion
          type='single'
          collapsible
          className={cn(
            'min-w-[14rem] overflow-hidden duration-500 md:visible',
            showSidebar ? 'visible' : 'hidden',
          )}
        >
          {sidebarData
            .filter(({ adminOnly }) => !adminOnly || isAdmin)
            .map(({ Icon, title, routes }, index) => (
              <AccordionItem value={`item-${index}`} key={`item-${index}-${title}`}>
                <AccordionTrigger>
                  <div className='flex justify-start gap-3'>
                    <Icon size={18} />
                    {title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {routes
                    .filter(({ adminOnly }) => !adminOnly || isAdmin)
                    .map(({ name, path }) => (
                      <Link
                        href={path}
                        key={name}
                        className='my-1 flex cursor-pointer justify-start gap-3 py-1 text-slate-900 hover:text-primary-lightBlue dark:text-slate-200 dark:hover:text-primary-lightBlue'
                      >
                        <Dot size={20} />
                        {name}
                      </Link>
                    ))}
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </nav>
    </>
  );
};
