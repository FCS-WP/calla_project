document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".calla-faqs-accordion").forEach((block) => {
		const items = block.querySelectorAll(".calla-faqs-accordion__item");

		items.forEach((item) => {
			const button = item.querySelector(".calla-faqs-accordion__question");
			const answer = item.querySelector(".calla-faqs-accordion__answer");

			if (!button || !answer) {
				return;
			}

			button.addEventListener("click", () => {
				const isOpen = item.classList.contains("is-open");

				items.forEach((otherItem) => {
					otherItem.classList.remove("is-open");
					const otherButton = otherItem.querySelector(".calla-faqs-accordion__question");
					const otherAnswer = otherItem.querySelector(".calla-faqs-accordion__answer");

					if (otherButton) {
						otherButton.setAttribute("aria-expanded", "false");
					}

					if (otherAnswer) {
						otherAnswer.hidden = true;
					}
				});

				if (!isOpen) {
					item.classList.add("is-open");
					button.setAttribute("aria-expanded", "true");
					answer.hidden = false;
				}
			});
		});
	});
});
