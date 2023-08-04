export function empty() {
    const tbody = document.querySelector('tbody');
    if(tbody.innerHTML.trim() === '') {
        tbody.innerHTML = 
        `
        <tr>
          <td colspan="4" class="empty">
            <div >
              <img src="./assets/Estrela.svg" alt="Imagem de uma estrela">
              <p>Nenhum favorito ainda</p>
            </div>
          </td>
        </tr>
        `;
    }
}