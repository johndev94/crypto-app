import { useMutation } from "@tanstack/react-query";
import { Todo } from "../types/todo";
import { createTodo } from "./api";

export function useCreateTodo(){
    
    return useMutation({
        mutationFn:(data: Todo) => createTodo(data),
        onMutate: () => {
            console.log("mutate");
        },
        onError: () => {
            console.log("Error");
        },
        onSuccess: () => {
            console.log("Success");
        },
        onSettled: () => {
            console.log("Settled");
        }
    });
}