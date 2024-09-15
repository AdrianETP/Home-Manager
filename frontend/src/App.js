import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ServiciosPage from './Servicios/ServiciosPage';
import SideBar from './SideBar/SideBar';
import DespensaPage from './Despensa/DespensaPage';
import DespensaListPage from './Despensa/DespensaListPage';
import Graficas from './Graficas/graficas';

function App() {

    const [page, setPage] = useState("Despensa");

    let serviceE = {
        name: "Electricidad",
        price: 888,
        paymentDate: "30 de Septiembre",
        subDate: "Faltan 11 días"
    }

    let serviceA = {
        name: "Agua",
        price: 121,
        paymentDate: "30 de Septiembre",
        subDate: "Faltan 11 días"
    }

    let serviceG = {
        name: "Gas",
        price: 345,
        paymentDate: "30 de Septiembre",
        subDate: "Faltan 11 días"
    }

    let serviceI = {
        name: "Internet",
        price: 745,
        paymentDate: "30 de Septiembre",
        subDate: "Faltan 11 días"
    }

    let serviceR = {
        name: "Renta",
        price: 957,
        paymentDate: "30 de Septiembre",
        subDate: "Faltan 11 días"
    }

    let changePage = (page) => {
        setPage(page)
    }

    switch (page) {
        case "DespensaList":
            return (
                <div className="App">
                    <SideBar changePage={changePage} />
                    <DespensaListPage seeItem={changePage} />
                </div>
            )

        case "DespensaItem":
            return (
                <div className="App">
                    <SideBar changePage={changePage} />
                    <DespensaPage />
                </div>
            )
        case "Servicios":
            return (
                <div className="App">
                    <SideBar changePage={changePage} />
                    <ServiciosPage />
                </div>
            )
        case "Despensa":
            return (
                <div className="App">
                    <SideBar changePage={changePage} />
                    <ServiciosPage />
                </div>
            )
        case "Graficas":
            return (
                <div className="App">
                    <SideBar changePage={changePage} />
                    <Graficas />
                </div>
            )
        default:
            return (

                <div className="App">
                    <SideBar changePage={changePage} />
                    <ServiciosPage />
                </div>
            )
    }
}

export default App;
