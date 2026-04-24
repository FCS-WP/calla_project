(function () {
	function initCallaHeaderSearch() {
		var header = document.querySelector('.calla-main-header');
		if (!header || header.dataset.callaHeaderInit === '1') {
			return;
		}

		var searchPanel = header.querySelector('.calla-main-header__search-panel');
		var searchInput = searchPanel ? searchPanel.querySelector('.wp-block-search__input') : null;
		var searchTriggers = header.querySelectorAll('.calla-main-header__icon--search a');

		function isSearchOpen() {
			return !!searchPanel && header.classList.contains('is-search-open');
		}

		function openSearch() {
			if (!searchPanel) {
				return;
			}

			header.classList.add('is-search-open');
			if (searchInput) {
				searchInput.focus();
			}
		}

		function closeSearch() {
			header.classList.remove('is-search-open');
		}

		searchTriggers.forEach(function (searchTrigger) {
			searchTrigger.addEventListener('click', function (event) {
				event.preventDefault();
				event.stopPropagation();

				if (isSearchOpen()) {
					closeSearch();
					return;
				}

				openSearch();
			});
		});

		document.addEventListener('click', function (event) {
			if (!isSearchOpen()) {
				return;
			}

			if (!header.contains(event.target)) {
				closeSearch();
			}
		});

		document.addEventListener('keydown', function (event) {
			if (event.key === 'Escape' && isSearchOpen()) {
				closeSearch();
			}
		});

		header.dataset.callaHeaderInit = '1';
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initCallaHeaderSearch);
	} else {
		initCallaHeaderSearch();
	}
})();
