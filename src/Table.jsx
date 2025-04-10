import { useEffect, useState } from 'react';

const Vente = () => {
  const [ventes, setVentes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newVente, setNewVente] = useState({
    zone: '',
    lot: '',
    niveau: '',
    ntf: '',
    acheteur: '',
    date: '',
    situation: '',
    superficie: '',
    puD: '',
    puB: '',
    puVente: '',
    prixTotalD: '',
    prixTotalB: '',
    prixTotal: '',
    totalAprAvances: '',
    statut: ''
  });
  const [editingIndex, setEditingIndex] = useState(null); 

  const handleAdd = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      
      const updatedVentes = ventes.map((vente, index) => 
        index === editingIndex ? newVente : vente
      );
      setVentes(updatedVentes);
      setEditingIndex(null); 
    } else {
      
      setVentes([...ventes, newVente]);
    }
    
    setNewVente({
      zone: '',
      lot: '',
      niveau: '',
      ntf: '',
      acheteur: '',
      date: '',
      situation: '',
      superficie: '',
      puD: '',
      puB: '',
      puVente: '',
      prixTotalD: '',
      prixTotalB: '',
      prixTotal: '',
      totalAprAvances: '',
      statut: ''
    });
  };

  const handleDelete = (index) => {
    const updatedVentes = ventes.filter((vente, venteIndex) => venteIndex !== index);
    setVentes(updatedVentes);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVente({
      ...newVente,
      [name]: value,
    });
  };

  const handleEdit = (index) => {
    const venteToEdit = ventes[index];
    setNewVente({ ...venteToEdit });
    setEditingIndex(index); 
  };

  useEffect(() => {
    fetch('http://demo9780723.mockable.io/vente')
      .then(response => response.json())
      .then(data => setVentes(data.content))
      .catch(error => console.error('Erreur de chargement des ventes:', error));
  }, []);

  return (
    <>
      <form onSubmit={handleAdd} style={{ padding: '20px', maxWidth: '500px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>{editingIndex !== null ? 'Modifier une Vente' : 'Ajouter une Vente'}</h2>

        <div style={{ marginBottom: '10px' }}>
          <label>Zone:</label>
          <input
            type="text"
            name="zone"
            value={newVente.zone}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Lot:</label>
          <input
            type="text"
            name="lot"
            value={newVente.lot}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Niveau:</label>
          <input
            type="text"
            name="niveau"
            value={newVente.niveau}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Acheteur:</label>
          <input
            type="text"
            name="acheteur"
            value={newVente.acheteur}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={newVente.date}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Situation:</label>
          <input
            type="text"
            name="situation"
            value={newVente.situation}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Superficie:</label>
          <input
            type="number"
            name="superficie"
            value={newVente.superficie}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Pu D:</label>
          <input
            type="number"
            name="puD"
            value={newVente.puD}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Pu B:</label>
          <input
            type="number"
            name="puB"
            value={newVente.puB}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Pu Vente:</label>
          <input
            type="number"
            name="puVente"
            value={newVente.puVente}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Prix Total D:</label>
          <input
            type="number"
            name="prixTotalD"
            value={newVente.prixTotalD}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Prix Total B:</label>
          <input
            type="number"
            name="prixTotalB"
            value={newVente.prixTotalB}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Prix Total:</label>
          <input
            type="number"
            name="prixTotal"
            value={newVente.prixTotal}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Total Apr:</label>
          <input
            type="number"
            name="totalAprAvances"
            value={newVente.totalAprAvances}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Status:</label>
          <input
            type="text"
            name="statut"
            value={newVente.statut}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">{editingIndex !== null ? 'Mettre à jour' : 'Ajouter'}</button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <ht>button</ht>
            
            <th>Zone</th>
            <th>Lot</th>
            <th>Niveau</th>
            <th>Ntf</th>
            <th>Acheteur</th>
            <th>Date</th>
            <th>Situation</th>
            <th>Superficie</th>
            <th>Pu D</th>
            <th>Pu B</th>
            <th>Pu Vente</th>
            <th>Prix Total D</th>
            <th>Prix Total B</th>
            <th>Prix Total</th>
            <th>Total Apr</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ventes.map((vente, index) => (
            <tr key={index}>
              <td>
                <button onClick={() => handleEdit(index)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
</svg>
</button>
                <button onClick={() => handleDelete(index)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
     class="feather feather-trash">
  <polyline points="3 6 5 6 21 6" />
  <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
  <path d="M10 11v6" />
  <path d="M14 11v6" />
</svg>
</button>
              </td>
              <td>{vente.zone?.value || vente.zone}</td>
                                    <td>{vente.lot}</td>
                                    <td>{vente.niveau?.value || vente.niveau}</td>
                                    <td>{vente.ntf}</td>
                                    <td>{vente.acheteur}</td>
                                    <td>{new Date(vente.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
                                    <td>{vente.situation?.value || vente.situation}</td>
                                    <td>{vente.superficie}</td>
                                    <td>{vente.puD}</td>
                                    <td>{vente.puB}</td>
                                    <td>{vente.puVente}</td>
                                    <td>{vente.prixTotalD}</td>
                                    <td>{vente.prixTotalB}</td>
                                    <td>{vente.prixTotal}</td>
                                    <td>{vente.totalAprAvances}</td>
                                    <td>{vente.statut?.value || vente.statut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Vente;
