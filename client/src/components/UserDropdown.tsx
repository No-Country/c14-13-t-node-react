'use client';
import { LogOut, User } from 'lucide-react';
import { signOut } from 'next-auth/react';

import { Button } from '@/components/ui/';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/';
import { getBaseUrl } from '@/utils/getUrl';
export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='navbar' title='Menu' aria-label='Menu'>
          <User className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40'>
        <DropdownMenuItem className='group'>
          <LogOut className='mr-2 h-4 w-4 duration-300 group-hover:translate-x-1' />
          <button
            title='Cerrar Sesión'
            onClick={() => signOut({ callbackUrl: `${getBaseUrl()}/auth/sign-in` })}
          >
            Cerrar Sesión
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
