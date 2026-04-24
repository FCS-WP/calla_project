document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".calla-connect-form__form").forEach((form) => {
		const block = form.closest(".calla-connect-form");
		const success = block?.querySelector(".calla-connect-form__success");

		form.addEventListener("submit", (event) => {
			event.preventDefault();

			let valid = true;
			form.querySelectorAll("[required]").forEach((field) => {
				field.style.borderColor = "";

				if (!field.value.trim()) {
					field.style.borderColor = "#c8786a";
					valid = false;
				}
			});

			if (!valid) {
				return;
			}

			form.style.display = "none";

			if (success) {
				success.style.display = "flex";
			}
		});
	});
});
