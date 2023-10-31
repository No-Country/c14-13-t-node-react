'use client';
import { Dot } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/Accordion/Accordion';
import { sidebarData } from './data';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export const Sidebar = () => {
  const { data: session } = useSession();
  const isAdmin = session?.user.role === 'admin';
  return (
    <nav className='hidden h-auto w-1/4 flex-col items-start justify-start bg-white pl-2 pr-3 pt-4 text-black shadow-right dark:bg-primary-lightBackground md:visible md:flex'>
      <Accordion type='single' collapsible className='w-full'>
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
                      className='my-1 flex cursor-pointer justify-start gap-3 py-1 text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-600'
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
  );
};
