import {Heading} from "@components/catalyst/heading.tsx";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export default function Page2() {

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const response = await axios.get("https://api.github.com/repos/TanStack/query")
            return response.data;
        }
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <>
            <div
                className="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
                <Heading>Page 2</Heading>
            </div>
            <div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <strong>👀 {data.subscribers_count}</strong>{' '}
                <strong>✨ {data.stargazers_count}</strong>{' '}
                <strong>🍴 {data.forks_count}</strong>
            </div>
        </>
    )
}