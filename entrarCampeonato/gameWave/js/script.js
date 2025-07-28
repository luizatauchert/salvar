
function previewImagem() {
  const arquivo = document.getElementById('arquivo').files[0];
  const preview = document.getElementById('imagem-preview');
  const svgPlaceholder = document.querySelector('.card-img-wrapper svg');

  if (arquivo) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
      if (svgPlaceholder) svgPlaceholder.style.display = 'none';
    };

    reader.readAsDataURL(arquivo);
  } else {
    preview.src = '#';
    preview.style.display = 'none';
    if (svgPlaceholder) svgPlaceholder.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/api/campeonato')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do campeonato.');
      }
      return response.json();
    })
    .then(data => {
      const infoDiv = document.getElementById('info-campeonato');
      infoDiv.innerHTML = `
        <strong>${data.titulo}</strong>
        <p>${data.descricao}</p>
      `;
    })
    .catch(error => {
      console.error(error);
      document.getElementById('info-campeonato').innerHTML =
        '<p style="color: red;">Erro ao carregar informações do campeonato.</p>';
    });
});
