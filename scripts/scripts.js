document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const successMessage = document.createElement("div");
  successMessage.textContent = "✔️ Sua mensagem foi enviada com sucesso!";
  successMessage.style.display = "none";
  successMessage.style.color = "green";
  successMessage.style.marginTop = "10px";
  form.parentNode.insertBefore(successMessage, form.nextSibling);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        successMessage.style.display = "block";
      } else {
        alert("Erro ao enviar. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro de rede:", error);
      alert("Erro ao conectar com o servidor. Verifique sua conexão.");
    }
  });
});

// Mostrar ou esconder o botão de voltar ao topo
window.addEventListener("scroll", () => {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Função para rolar suavemente para o topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
