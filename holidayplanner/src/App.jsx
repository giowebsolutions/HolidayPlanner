import CountrySelector from "./components/CountrySelector";
import HolidayListTable from "./components/HolidayListTable";
import {
  Col,
  Container,
  Form,
  FormSelect,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import DatePicker from "./components/DatePicker";
import ListContextProvider from "./Context/ListContext";
import "./App.css";
import Header from "./components/layouts/Header";

function App() {
  return (
    <>
      <Header />
      <ListContextProvider>
        <Container className="mt-2">
          <h1>Check a list of public holidays by country and by year</h1>
          <div>
            <Form className="mt-3">
              <Row id="searchOptions" className="">
                <Col>
                  <CountrySelector />
                </Col>
                <Col>
                  <DatePicker />
                </Col>
              </Row>
            </Form>
          </div>
          <HolidayListTable />
        </Container>
      </ListContextProvider>
    </>
  );
}

export default App;
