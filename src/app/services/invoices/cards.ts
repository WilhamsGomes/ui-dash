/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { api } from "../api";
import { IParamsReq } from "../../@types/Data";

export async function getElectricity(ctx: QueryFunctionContext) {
  const [, aggr, gte_month, lte_month, num_client, year] = ctx.queryKey;
  try {
    const res = await api.get("/dash/electricity", {
      params: {
        aggr: aggr,
        num_client,
        gte_month,
        lte_month,
        year,
      },
    });
    return { data: res.data };
  } catch (error: any) {
    return error;
  }
}

export function useElectricity({
  aggr,
  gte_month,
  lte_month,
  num_client,
  year,
}: IParamsReq) {
  return useQuery({
    queryKey: ["use-eletricity", aggr, gte_month, lte_month, num_client, year],
    queryFn: getElectricity,
  });
}

export async function getCompensated(ctx: QueryFunctionContext) {
  const [, aggr, gte_month, lte_month, num_client, year] = ctx.queryKey;
  try {
    const res = await api.get("/dash/compensated", {
      params: {
        aggr: aggr,
        num_client,
        gte_month,
        lte_month,
        year,
      },
    });
    return { data: res.data };
  } catch (error: any) {
    return error;
  }
}

export function useCompensated({
  aggr,
  gte_month,
  lte_month,
  num_client,
  year,
}: IParamsReq) {
  return useQuery({
    queryKey: ["use-compensated", aggr, gte_month, lte_month, num_client, year],
    queryFn: getCompensated,
  });
}

export async function getValueTotal(ctx: QueryFunctionContext) {
  const [, aggr, gte_month, lte_month, num_client, year] = ctx.queryKey;
  try {
    const res = await api.get("/dash/value-total", {
      params: {
        aggr: aggr,
        num_client,
        gte_month,
        lte_month,
        year,
      },
    });
    return { data: res.data };
  } catch (error: any) {
    return error;
  }
}

export function useValueTotal({
  aggr,
  gte_month,
  lte_month,
  num_client,
  year,
}: IParamsReq) {
  return useQuery({
    queryKey: ["use-value-total", aggr, gte_month, lte_month, num_client, year],
    queryFn: getValueTotal,
  });
}

export async function getValueCompensated(ctx: QueryFunctionContext) {
  const [, aggr, gte_month, lte_month, num_client, year] = ctx.queryKey;
  try {
    const res = await api.get("/dash/value-compensated", {
      params: {
        aggr: aggr,
        num_client,
        gte_month,
        lte_month,
        year,
      },
    });
    return { data: res.data };
  } catch (error: any) {
    return error;
  }
}

export function useValueCompensated({
  aggr,
  gte_month,
  lte_month,
  num_client,
  year,
}: IParamsReq) {
  return useQuery({
    queryKey: ["use-value-total-compensated", aggr, gte_month, lte_month, num_client, year],
    queryFn: getValueCompensated,
  });
}
