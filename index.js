// Loan Calculator
function calculateLoan() {
    const amount = document.getElementById('loanAmount').value;
    const rate = document.getElementById('interestRate').value;
    const term = document.getElementById('loanTerm').value;

    const monthlyRate = rate / 100 / 12;
    const termInMonths = term * 12;
    const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termInMonths));

    document.getElementById('loanResult').textContent = 
        `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}

// Interest Calculator
function calculateInterest() {
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;

    const interest = (principal * rate * time) / 100;
    document.getElementById('interestResult').textContent = 
        `Total Interest: $${interest.toFixed(2)}`;
}

// Scroll Animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const triggerPoint = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < triggerPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});