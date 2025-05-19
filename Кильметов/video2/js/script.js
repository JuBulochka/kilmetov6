function showTab(index) {
    const contents = document.querySelectorAll('[id^="tab-content-"]');
    contents.forEach((content, i) => {
        content.classList.toggle('hidden', i !== index);
    });
}