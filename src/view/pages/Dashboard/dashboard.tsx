import { useState } from "react";
import {
  BoxChart,
  Container,
  RowCards,
  RowChart,
  HeaderFilter,
  ActionsFilter,
  Filters,
} from "./styles";
import Card from "../../components/Card/Card";
import Ray from "../../components/Icons/Ray";
import LineChart from "../../components/Icons/LineChart";
import Money from "../../components/Icons/Money";
import Light from "../../components/Icons/Light";
import {
  useElectricity,
  useCompensated,
  useValueCompensated,
  useValueTotal,
} from "../../../app/services/invoices/cards";
import { ChartBar } from "../../components/Charts/Bar";
import { IParamsReq } from "../../../app/@types/Data";

export default function Dashboard() {
  const [clientInput, setClientInput] = useState("");
  const [monthFilterGte, setMonthFilterGte] = useState("");

  const [numClient, setNumClient] = useState("");
  const [gteMonth, setGteMonth] = useState("");

  const paramsCount: IParamsReq = {
    aggr: "count",
    ...(numClient && { num_client: numClient }),
    ...(gteMonth && { gte_month: +gteMonth }),
  };

  const paramsAggr: IParamsReq = {
    aggr: "date",
    ...(numClient && { num_client: numClient }),
    ...(gteMonth && { gte_month: +gteMonth }),
  };

  const { data: dataElectricity } = useElectricity(paramsCount);
  const { data: dataCompensated } = useCompensated(paramsCount);
  const { data: dataValueCompensated } = useValueCompensated(paramsCount);
  const { data: dataValueTotal } = useValueTotal(paramsCount);

  const { data: dataAggrElectricity } = useElectricity(paramsAggr);
  const { data: dataAggrCompensated } = useCompensated(paramsAggr);
  const { data: dataAggrValueCompensated } = useValueCompensated(paramsAggr);
  const { data: dataAggrValueTotal } = useValueTotal(paramsAggr);

  function searchToFilter() {
    setNumClient(clientInput);
    setGteMonth(monthFilterGte);
  }

  function clearFilters() {
    setNumClient("");
    setClientInput("");
    setGteMonth("");
    setMonthFilterGte("");
  }

  return (
    <Container>
      <HeaderFilter>
        <Filters>
          <input
            placeholder="Nº do cliente"
            value={clientInput}
            onChange={(e) => setClientInput(e.target.value)}
          />
          <div>
            <span>A partir de:</span>
            <select
              value={monthFilterGte}
              onChange={(e) => setMonthFilterGte(e.target.value)}
            >
              <option value="">Selecione um mês</option>
              <option value="1">Janeiro</option>
              <option value="2">Fevereiro</option>
              <option value="3">Março</option>
              <option value="4">Abril</option>
              <option value="5">Maio</option>
              <option value="6">Junho</option>
              <option value="7">Julho</option>
              <option value="8">Agosto</option>
              <option value="9">Setembro</option>
              <option value="10">Outubro</option>
              <option value="11">Novembro</option>
              <option value="12">Dezembro</option>
            </select>
          </div>
        </Filters>

        <ActionsFilter>
          <button onClick={() => clearFilters()}>Limpar</button>
          <button onClick={() => searchToFilter()}>Filtrar</button>
        </ActionsFilter>
      </HeaderFilter>

      <RowCards>
        <Card
          title="Consumo energia elétrica"
          subTitle="Energia Elétrica kWh + Energia SCEEE s/ICMS kWh"
          value={dataElectricity?.data?.data?.toFixed(2)}
          type="count"
          icon={<Ray width={18} height={18} />}
        />
        <Card
          title="Energia Compensada"
          subTitle="Energia Compensada GD I kWh"
          value={dataCompensated?.data?.data?.toFixed(2)}
          type="count"
          icon={<LineChart width={20} height={20} />}
        />
        <Card
          title="Valor Total sem GD"
          subTitle="Energia Elétrica kWh + Energia SCEEE s/ICMS kWh + Contrib. Ilum pública municipal"
          value={dataValueTotal?.data?.data?.toFixed(2)}
          type="current"
          icon={<Money width={18} height={18} />}
        />
        <Card
          title="Economia GD"
          subTitle="Energia compensada GD I"
          value={dataValueCompensated?.data?.data?.toFixed(2) * -1}
          type="current"
          icon={<Light width={24} height={24} />}
        />
      </RowCards>

      <RowChart>
        <BoxChart>
          <ChartBar
            label={dataAggrElectricity?.data.map(
              (item: { sum: number; date: string }) => item.date
            )}
            dataset={[
              {
                data: dataAggrElectricity?.data.map(
                  (item: { sum: number; date: string }) => item.sum
                ),
                label: "Energia elétrica (kwh)",
                backgroundColor: "#EEEEEE",
              },
              {
                data: dataAggrCompensated?.data.map(
                  (item: { sum: number; date: string }) => item.sum
                ),
                label: "Energia Compensada (kwh)",
                backgroundColor: "#69ff8f",
              },
            ]}
          />
        </BoxChart>
        <BoxChart>
          <ChartBar
            label={dataAggrValueCompensated?.data.map(
              (item: { sum: number; date: string }) => item.date
            )}
            dataset={[
              {
                data: dataAggrValueTotal?.data.map(
                  (item: { sum: number; date: string }) => item.sum
                ),
                label: "Valor Total sem GD",
                backgroundColor: "#69ff8f",
              },
              {
                data: dataAggrValueCompensated?.data.map(
                  (item: { sum: number; date: string }) => item.sum * -1
                ),
                label: "Economia GD (R$)",
                backgroundColor: "#EEEEEE",
              },
              
            ]}
          />
        </BoxChart>
      </RowChart>
    </Container>
  );
}
