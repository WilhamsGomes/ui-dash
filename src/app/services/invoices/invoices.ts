/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { api } from "../api";

export async function getAllInvoices(ctx: QueryFunctionContext) {
  const [, idClient] = ctx.queryKey;
  try {
    if (idClient) {
      const res = await api.get(`/invoices/client/${idClient}`);
      return { data: res.data };
    } else {
      const res = await api.get(`/invoices`);
      return { data: res.data };
    }
  } catch (error: any) {
    return error;
  }
}

export function useAllInvoices(idClient?: string) {
  return useQuery({
    queryKey: ["use-all-invoices", idClient],
    queryFn: getAllInvoices,
  });
}

export async function getDownloadInvoices(fileId: string) {
  try {
    const res = await api.get(`/invoices/file-download/${fileId}`);
    return { data: res.data };
  } catch (error: any) {
    return error;
  }
}
