// 🌩️ Stormy light movement effect

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  document.body.style.background = `
    radial-gradient(
      circle at ${x}% ${y}%,
      rgba(56, 189, 248, 0.12),
      rgba(2, 6, 23, 0.95) 60%
    ),
    linear-gradient(180deg, #020617, #041c32)
  `;
});
