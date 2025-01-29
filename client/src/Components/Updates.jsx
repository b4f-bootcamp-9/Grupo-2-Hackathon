import "../Styles/Updates.css";
export function Updates() {
  return (
    <div className="updates-container">
      <h1>Atualizações</h1>
      <input type="text" 
           id="readOnlyTextBox" 
           readonly 
           value="Ultima Atualização">
      </input>
    </div>
  );
}
