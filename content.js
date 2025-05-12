// Function to get all form data on the page
function getAllInputValues() {
  const data = {};
  document.querySelectorAll("input, textarea").forEach((input) => {
    data[input.name || input.id] = input.value;
  });
  return data;
}

// Listen for input events on the page and save data
document.querySelectorAll("input, textarea").forEach((el) => {
  el.addEventListener("input", () => {
    const formData = getAllInputValues();
    chrome.runtime.sendMessage({
      action: "saveFormData",
      url: window.location.href,
      data: formData,
    });
  });
});
