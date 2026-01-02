function simulateAttack() {
    const status = document.getElementById("status");
    const log = document.getElementById("log");

    status.textContent = "⚠ Suspicious activity detected!";
    status.className = "alert";

    log.innerHTML += "<li>⚠ Anomaly detected in IoT traffic</li>";
    log.innerHTML += "<li>🤖 AI analyzing behavior...</li>";

    setTimeout(() => {
        log.innerHTML += "<li>🛡 Device isolated automatically</li>";
        log.innerHTML += "<li>🚫 Malicious access blocked</li>";
        log.innerHTML += "<li>✅ Home secured</li>";

        status.textContent = "✅ Threat neutralized. Home is secure.";
        status.className = "safe";
    }, 2000);
}
