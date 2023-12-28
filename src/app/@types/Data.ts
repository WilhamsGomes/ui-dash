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
export interface IResponseInvoices {
  account_month: number;
  account_year: number;
  amount_compensated: number;
  amount_electricity: number;
  amount_sceee: number;
  id: string;
  num_client: string;
  url_file: string;
  value_compensated: number;
  value_electricity: number;
  value_sceee: number;
  value_street: number;
}