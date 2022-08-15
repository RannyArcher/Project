function _onLoad() {}

document.addEventListener("load", _onLoad);

const HTML = document.querySelector("html"),
  HTML_TRANSITION = ["ascendent:!transition-colors", "ascendent:duration-1000"],
  TRANSITION_DURATION = 1000;

if (localStorage.theme) {
  HTML.classList.add(...HTML_TRANSITION);
  HTML.classList.add(localStorage.theme);

  setTimeout(
    () => HTML.classList.remove(...HTML_TRANSITION),
    TRANSITION_DURATION + 250
  );
}

function toggleDark() {
  HTML.classList.add(...HTML_TRANSITION);
  HTML.classList.toggle("dark");

  // if the dark theme is selected, put it in the local storage
  // else put a empty string

  localStorage.setItem("theme", HTML.classList.contains("dark") ? "dark" : "");
  setTimeout(
    () => HTML.classList.remove(...HTML_TRANSITION),
    TRANSITION_DURATION + 250
  );
}
