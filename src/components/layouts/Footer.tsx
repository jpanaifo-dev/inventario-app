// import { Typography } from '@/modules/portal'
export const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-8 bg-zinc-100 dark:bg-zinc-800 border-t border-zinc-200 dark:border-zinc-700">
      <div className="text-default-300 font-semibold text-xs text-center w-full">
        &copy; {new Date().getFullYear()} UNAP. Todos los derechos reservados.
      </div>
    </footer>
  )
}
