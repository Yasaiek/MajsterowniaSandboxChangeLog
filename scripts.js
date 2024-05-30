document.querySelectorAll('.changelog-entry').forEach(entry => {
    entry.addEventListener('mouseenter', () => {
        entry.style.transform = 'translateY(-5px)';
        entry.style.boxShadow = '0 12px 24px rgba(43, 114, 226, 0.5)';
    });
    entry.addEventListener('mouseleave', () => {
        entry.style.transform = 'translateY(0)';
        entry.style.boxShadow = '0px 8px 16px 0px rgba(0, 0, 0, 0.2)';
    });
});
