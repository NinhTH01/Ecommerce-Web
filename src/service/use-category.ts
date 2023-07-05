import React from "react";
import { productRepository } from "../repository/product-repository";
import { useQuery } from "react-query";

export function useCategory(): [string[] | undefined, boolean, unknown] {
  const fetchCategory = React.useCallback(async () => {
    return await productRepository.category();
  }, []);

  const { data, isLoading, error } = useQuery<string[]>(
    "category",
    fetchCategory
  );

  return [data, isLoading, error];
}
