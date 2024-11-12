import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation de Bootstrap CSS
import '../sreen/Em.css'; // Importation du fichier CSS personnalisé
import EmployeeForm from '../sreen/EmployeeForm';
import EmployeeList from '../sreen/EmployeeList';
import ActionHistory from '../sreen/ActionHistory';
import DepartureTimeConfig from '../sreen/DepartureTimeConfig';

const Employes = () => {
  const [employees, setEmployees] = useState([]);
  
  const [departureTimes, setDepartureTimes] = useState([]);

  // Ajouter ou modifier un employé
  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const handleEdit = (employee) => {
    // Ajoutez ici la logique pour modifier un employé
    console.log("Modifier l'employé:", employee);
  };

  // Mettre à jour l'horaire de départ
  const updateDepartureTime = (newTime) => {
    setDepartureTimes([...departureTimes, { ...newTime, id: Date.now() }]);
  };

  return (
    <div className="app-background">
      <div className="container mt-5">
        <h1 className="text-center mb-4 custom-title">Gestion des Employés</h1>

        {/* Formulaire d'ajout d'employé */}
        <div className="card mb-4 custom-card">
          <div className="card-body">
            <EmployeeForm addEmployee={addEmployee} />
          </div>
        </div>

        <div>
      <EmployeeList employees={employees} onDelete={handleDelete} onEdit={handleEdit} />
       </div>

        {/* Liste des employés */}
        <div className="card mb-4 custom-card">
          <div className="card-body">
            <EmployeeList employees={employees} />
          </div>
        </div>

        {/* Configuration des horaires de départ */}
        <div className="card mb-4 custom-card">
          <div className="card-body">
            <DepartureTimeConfig updateDepartureTime={updateDepartureTime} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employes;
