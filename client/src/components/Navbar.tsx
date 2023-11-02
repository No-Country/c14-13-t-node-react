'use client';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useCycle, motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components';
import { Button } from '@/components/ui';
import { UserDropdown } from './UserDropdown';
import Image from 'next/image';
import { getBaseUrl } from '@/utils/getUrl';

const Navbar = () => {
  const { data: session } = useSession();
  const [open, cycleOpen] = useCycle(false, true);

  const mobileMenuItemVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  };

  const mobileMenuSideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.15,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.25,
        staggerDirection: 1,
      },
    },
  };

  const name = session?.user.name ?? session?.user.username ?? 'Guest';
  return (
    <header className='flex h-10 w-full items-center justify-between gap-4 border-b border-slate-400/30 bg-gray-200 px-4 py-6 pr-10 transition-colors duration-300 dark:bg-primary-lightBackground'>
      <Link
        href={'/'}
        className='relative flex gap-2 text-base font-bold text-black dark:text-white'
      >
        <Image src={'/images/logo.svg'} alt='logo' width={30} height={30} />
        {/* <CarFront size={20} /> */}
        GarageGuest
      </Link>
      <div className='hidden items-center gap-5 md:flex'>
        <ThemeToggle />
        <div className='flex items-center justify-center gap-4'>
          {session ? (
            <div className='flex items-center gap-3 text-slate-800 dark:text-slate-200'>
              {name}
              <UserDropdown />
            </div>
          ) : (
            <>
              <Link href='/auth/sign-up'>
                <Button variant='NavButton1' link>
                  SignUp
                </Button>
              </Link>
              <Link href='/auth/sign-in' className='overflow-visible'>
                <Button variant='NavButton2' link>
                  SignIn
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className='mobile-hamburger flex items-center gap-6 md:hidden'>
        <ThemeToggle />

        <motion.div
          className={`z-50 flex h-5 w-6 cursor-pointer flex-col items-center justify-between${
            open ? ' active' : ''
          }`}
          onTap={() => cycleOpen()}
        >
          <span
            className={`block h-1 w-full origin-[0%_0%] rounded-lg bg-primary-lightBlue transition-transform duration-300 ease-in-out${
              open ? ' rotate-45' : ''
            }`}
          />
          <span
            className={`block h-1 w-full rounded-lg bg-primary-lightBlue transition-transform duration-200 ease-in-out${
              open ? ' scale-y-0' : ''
            }`}
          />
          <span
            className={`block  h-1 w-full origin-[0%_100%] rounded-lg bg-primary-lightBlue transition-transform duration-300 ease-in-out${
              open ? ' -rotate-45' : ''
            }`}
          />
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: '100vw',
            }}
            transition={{ duration: 0.35 }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className='fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-slate-200 dark:bg-primary-lightBackground'
          >
            <motion.ul
              initial='closed'
              animate='open'
              exit='closed'
              variants={mobileMenuSideVariants}
              className='text-center text-xl font-semibold text-slate-800 dark:text-slate-200'
            >
              <motion.li
                key={1}
                variants={mobileMenuItemVariants}
                className='cursor-pointer py-3'
                onTap={() => cycleOpen()}
              >
                <Link
                  href='/'
                  className="relative no-underline after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-primary-lighterBlue after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full"
                >
                  Home
                </Link>
              </motion.li>
              {session ? (
                <>
                  <motion.li
                    key={2}
                    variants={mobileMenuItemVariants}
                    className='cursor-pointer py-3'
                    onTap={() => cycleOpen()}
                  >
                    <Link
                      href='/dashboard'
                      className="relative no-underline after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-primary-lighterBlue after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full"
                    >
                      Dashboard
                    </Link>
                  </motion.li>
                  <motion.li
                    key={2}
                    variants={mobileMenuItemVariants}
                    className='cursor-pointer py-3'
                    onTap={() => cycleOpen()}
                  >
                    <button
                      className="relative no-underline after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-primary-lighterBlue after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full"
                      onClick={() => signOut({ callbackUrl: `${getBaseUrl()}/auth/sign-in` })}
                    >
                      Cerrar Sesión
                    </button>
                  </motion.li>
                </>
              ) : (
                <>
                  <motion.li
                    key={2}
                    variants={mobileMenuItemVariants}
                    className='cursor-pointer py-3'
                    onTap={() => cycleOpen()}
                  >
                    <Link
                      href='/auth/sign-in'
                      className="relative no-underline after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-primary-lighterBlue after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full"
                    >
                      Sign In
                    </Link>
                  </motion.li>
                  <motion.li
                    key={3}
                    variants={mobileMenuItemVariants}
                    className='cursor-pointer py-3'
                    onTap={() => cycleOpen()}
                  >
                    <Link
                      href='/auth/sign-up'
                      className="relative no-underline after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-primary-lighterBlue after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full"
                    >
                      Sing Up
                    </Link>
                  </motion.li>
                </>
              )}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
