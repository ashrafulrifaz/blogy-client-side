import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const { isPending, refetch, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch('https://blogy-server.vercel.app/users')
            .then((res) =>
                res.json(),
            )
      })

    return { users, isPending, refetch }
};

export default useUsers;