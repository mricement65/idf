document.getElementById("registrationForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  const response = await fetch("https://idf-1nni.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    document.getElementById("formMessage").classList.remove("hidden");
    form.reset();
  }
});
