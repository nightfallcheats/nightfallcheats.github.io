document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    let reason = document.getElementById("reason").value.trim();
    let email = document.getElementById("email").value.trim();

    if (!reason || !email) {
        document.getElementById("status").innerText = "Please fill out all fields!";
        return;
    }

    // Send form data to the Discord webhook
    fetch("https://discord.com/api/webhooks/1339626699100524564/64zo9V32Qb3vcHYrkeraSlvBH6cnJy5rkmmXtYw6Ux90olMV2G_VL8AKHLUXR8iOps95", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: `**New Registration**\nEmail: ${email}\nReason: ${reason}`,
        }),
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("status").style.color = "green";
            document.getElementById("status").innerText = "Registration Successful!";
            document.getElementById("registerForm").reset();
        } else {
            document.getElementById("status").innerText = "Something went wrong.";
        }
    })
    .catch(err => {
        document.getElementById("status").innerText = "Error sending registration.";
    });
});
