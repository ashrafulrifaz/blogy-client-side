import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const { isPending, refetch, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch('http://localhost:5000/users')
            .then((res) =>
                res.json(),
            )
      })

    return { users, isPending, refetch }
};

export default useUsers;