document.addEventListener("DOMContentLoaded", () => {
  const emailBtn = document.getElementById("emailBtn");
  if (!emailBtn) return;

  emailBtn.addEventListener("click", () => {
    window.location.href = "mailto:sarabetheffects@gmail.com";
  });
});