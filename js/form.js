document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const modal = document.getElementById("successModal");
  const modalClose = document.getElementById("modalClose");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = "Sending…";

    const fd = new FormData(form);
    const name = fd.get("name") || "Website visitor";
    fd.set("_subject", `Website contact from ${name}`);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (res.ok) {
        form.reset();
        modal.style.display = "block";
        modal.setAttribute("aria-hidden", "false");
      } else {
        const json = await res.json().catch(() => null);
        console.error("Formspree error", res.status, json);
        alert("Could not send message. Check console/network tab for details.");
      }
    } catch (err) {
      console.error("Network error", err);
      alert("Network error: " + err.message);
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  });
});
