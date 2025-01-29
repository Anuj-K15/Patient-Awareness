function toggleFaq(faqHeader) {
    const faqItem = faqHeader.parentElement;
    const isActive = faqItem.classList.contains("active");

    // Close all other FAQ items
    document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
        const btn = item.querySelector(".toggle-btn");
        if (btn) btn.textContent = "+";
    });

    // Toggle the current FAQ item
    if (!isActive) {
        faqItem.classList.add("active");
        const btn = faqItem.querySelector(".toggle-btn");
        if (btn) btn.textContent = "-";
    }
}
