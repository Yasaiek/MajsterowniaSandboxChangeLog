document.querySelectorAll('.rule').forEach(rule => {
    rule.addEventListener('mouseenter', () => {
        rule.style.boxShadow = '0 12px 24px rgba(43, 114, 226, 0.5)';
    });
    rule.addEventListener('mouseleave', () => {
        rule.style.boxShadow = '0px 8px 16px 0px rgba(0, 0, 0, 0.2)';
    });
});