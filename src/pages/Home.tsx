import {Heading} from "@components/catalyst/heading.tsx";

export default function Home() {
    return (
        <>
            <div
                className="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
                <Heading>Hello world</Heading>
            </div>
        </>
    )
}