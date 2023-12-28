import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../view/pages/Dashboard/dashboard";
import Library from "../view/pages/Library/library";
import Layout from "../view/layouts";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/library"
          element={
            <Layout>
              <Library />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
