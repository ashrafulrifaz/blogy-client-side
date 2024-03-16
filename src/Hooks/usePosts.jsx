import { useQuery } from "@tanstack/react-query";

const usePosts = () => {
    const { isPending, data: posts } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            fetch('https://blogy-server.vercel.app/posts')
            .then((res) =>
                res.json(),
            )
      })
      
   const newses = [...posts || []].reverse()

    return { posts, isPending, newses }
};

export default usePosts;