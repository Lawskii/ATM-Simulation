let balance = 1000; // Simulated account balance

// Get UI elements
const menu = document.getElementById("menu");
const withdrawSection = document.getElementById("withdraw-section");
const balanceSection = document.getElementById("balance-section");
const withdrawButton = document.getElementById("withdraw-btn");
const withdrawMessage = document.getElementById("withdraw-message");
const backArrow = document.getElementById("back-arrow");
const backArrowFromBalance = document.getElementById("back-to-menu-from-balance");
const backArrowFromSuccess = document.getElementById("back-to-menu-from-success");
const balanceMessage = document.getElementById("balance-message");
const withdrawalSuccessMessage = document.getElementById("withdrawal-success");

// Handle menu selection
document.querySelectorAll(".menu-option").forEach((button) => {
    button.addEventListener("click", (e) => {
        const action = e.target.dataset.action;
        handleMenuAction(action);
    });
});

function handleMenuAction(action) {
    menu.classList.add("hidden");

    // Hide the success message when navigating to a different section
    withdrawalSuccessMessage.classList.add("hidden");

    switch (action) {
        case "withdraw":
            withdrawSection.classList.remove("hidden");
            break;
        case "transfer":
            alert("Transfer feature coming soon!");
            resetToMenu();
            break;
        case "check-balance":
            balanceMessage.textContent = `$${balance.toFixed(2)}`;
            balanceSection.classList.remove("hidden");
            break;
        case "settings":
            alert("Settings feature coming soon!");
            resetToMenu();
            break;
        default:
            resetToMenu();
    }
}

// Handle Withdraw Action
withdrawButton.addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);

    // Validate input
    if (isNaN(amount) || amount <= 0) {
        showWithdrawMessage("Please enter a valid withdrawal amount.", "error");
        return;
    }

    // Validate balance
    if (amount > balance) {
        showWithdrawMessage("Insufficient funds. Please enter a smaller amount.", "error");
        return;
    }

    // Perform withdrawal
    balance -= amount;
    showWithdrawMessage(`Withdrawal successful! New balance: $${balance.toFixed(2)}`, "success");

    // Show withdrawal success message
    withdrawalSuccessMessage.classList.remove("hidden");
});

// Handle Back to Menu (withdraw section)
backArrow.addEventListener("click", () => {
    withdrawSection.classList.add("hidden");
    resetToMenu();
});

// Handle Back to Menu (balance section)
backArrowFromBalance.addEventListener("click", () => {
    balanceSection.classList.add("hidden");
    resetToMenu();
});

// Handle Back to Menu (withdrawal success section)
backArrowFromSuccess.addEventListener("click", () => {
    withdrawalSuccessMessage.classList.add("hidden");
    resetToMenu();
});

// Helper Functions
function showWithdrawMessage(message, type) {
    withdrawMessage.textContent = message;
    withdrawMessage.style.color = type === "success" ? "green" : "red";
}

function resetToMenu() {
    menu.classList.remove("hidden");
    withdrawSection.classList.add("hidden");
    balanceSection.classList.add("hidden");
    withdrawalSuccessMessage.classList.add("hidden"); 
    withdrawMessage.textContent = "";
}





















