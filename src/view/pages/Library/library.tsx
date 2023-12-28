import {
  BoxInfos,
  ButtonDownload,
  Container,
  Content,
  InvoiceContent,
} from "./styles";
import {
  getDownloadInvoices,
  useAllInvoices,
} from "../../../app/services/invoices/invoices";
import { IResponseInvoices } from "../../../app/@types/Data";
import { useState } from "react";
import { ActionsFilter, Filters, HeaderFilter } from "../Dashboard/styles";

export default function Library() {
  const [clientInput, setClientInput] = useState("");

  const [numClient, setNumClient] = useState("");

  const { data } = useAllInvoices(numClient);

  async function downloadFile(url: string) {
    const { data } = await getDownloadInvoices(url);

    if (data) {
      const fileData = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");
      link.href = fileData;
      link.setAttribute("download", url);
      document.body.appendChild(link);
      link.click();
    }
  }

  function searchToFilter() {
    setNumClient(clientInput.trim());
  }

  function clearFilters() {
    setNumClient("");
    setClientInput("");
  }

  return (
    <Container>
      <h3>Histórico de faturas</h3>
      <HeaderFilter>
        <Filters>
          <input
            placeholder="Nº do cliente"
            value={clientInput}
            onChange={(e) => setClientInput(e.target.value)}
          />
        </Filters>

        <ActionsFilter>
          <button onClick={() => clearFilters()}>Limpar</button>
          <button onClick={() => searchToFilter()}>Filtrar</button>
        </ActionsFilter>
      </HeaderFilter>
      <Content>
        {data?.data?.map((item: IResponseInvoices, index: number) => (
          <InvoiceContent key={index}>
            <BoxInfos>
              <p>{item?.url_file}</p>
              <span>
                Cliente: {item?.num_client} | {item?.account_month}/
                {item?.account_year}
              </span>
            </BoxInfos>
            <ButtonDownload
              type="button"
              onClick={() => downloadFile(item?.url_file)}
            >
              Download
            </ButtonDownload>
          </InvoiceContent>
        ))}
      </Content>
    </Container>
  );
}
