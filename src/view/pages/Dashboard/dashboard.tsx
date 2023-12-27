import { BoxChart, Container, RowCards, RowChart } from "./styles";
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

export default function Dashboard() {
  const { data: dataElectricity } = useElectricity({ aggr: "count" });
  const { data: dataCompensated } = useCompensated({ aggr: "count" });
  const { data: dataValueCompensated } = useValueCompensated({ aggr: "count" });
  const { data: dataValueTotal } = useValueTotal({ aggr: "count" });

  const { data: dataAggrElectricity } = useElectricity({ aggr: "date" });
  const { data: dataAggrCompensated } = useCompensated({ aggr: "date" });
  const { data: dataAggrValueCompensated } = useValueCompensated({ aggr: "date" });
  const { data: dataAggrValueTotal } = useValueTotal({ aggr: "date" });

  return (
    <Container>
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
                backgroundColor: "#FFD369",
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
                data: dataAggrValueCompensated?.data.map(
                  (item: { sum: number; date: string }) => item.sum  * (-1)
                ),
                label: "Economia GD (R$)",
                backgroundColor: "#EEEEEE",
              },
              {
                data: dataAggrValueTotal?.data.map(
                  (item: { sum: number; date: string }) => item.sum
                ),
                label: "Valor Total sem GD",
                backgroundColor: "#FFD369",
              },
            ]}
          />
        </BoxChart>
      </RowChart>
    </Container>
  );
}
