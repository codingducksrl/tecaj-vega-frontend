import { Avatar } from '@/components/catalyst/avatar.tsx'

export default function Login() {
    return (
        <>
            <div
                className="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
                <h1>world</h1>
                
            </div>
            <Example></Example>

        </>
    )
}
function Example() {
  return (
    <>
      <Avatar initials="tw" className="size-6 bg-zinc-400 text-white dark:bg-blue dark:text-black" />
      <Avatar initials="tw" className="size-8 bg-zinc-900 text-white dark:bg-white dark:text-black" />
      <Avatar initials="tw" className="size-10 bg-zinc-900 text-white dark:bg-white dark:text-black" />
    </>
  )
}