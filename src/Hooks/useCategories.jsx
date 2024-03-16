import { useQuery } from "@tanstack/react-query";

const useCategories = () => {
    const { isPending, data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            fetch('https://blogy-server.vercel.app/categories')
            .then((res) =>
                res.json(),
            )
      })

    return { categories, isPending }
};

export default useCategories;