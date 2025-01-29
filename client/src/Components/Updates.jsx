import "../Styles/Updates.css";
import Modal from './Modal';
export function Updates() {
  return (
    <div className="updates-container">
      <h1 className="text">Atualizações</h1>
      {inputs.map((value, index) => (
      <input className="Update-box" type="text" 
           id="readOnlyTextBox"  
           value="Ultima Atualização">
      </input>
    ))};
    </div>
  );
}
