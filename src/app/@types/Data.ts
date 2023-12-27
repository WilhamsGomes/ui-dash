export interface IParamsReq {
  aggr: "count" | "date";
  num_client?: string;
  gte_month?: number;
  lte_month?: number;
  year?: number;
}

export interface IResponseCard {
  data: {
    data: number;
  };
}
