const forms = document.forms;

[...forms].forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    data["Проект"] = "Cozzy";
    data["Блок формы"] = form.closest("section")?.className;

    const json = JSON.stringify(data);

    fetch("https://singleapi.pasha.design/zayavki-s-saytov/zayavki_7834672364132245.php", {
      method: "POST",
      body: json,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => { form.reset(); })
      .catch((error) => { });
  });
});
