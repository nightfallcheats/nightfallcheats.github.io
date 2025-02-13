$(document).ready(function () {
    $("#confirm").click(function () {
        let eidValue = $("#eid").val().trim();
        if (eidValue === "") {
            alert("Please enter an ID!");
            return;
        }

        $("#eid").prop("disabled", true);
        $("#confirm").addClass("wait");

        // Fetch users from users.json
        fetch("users.json")
            .then(response => response.json())
            .then(data => {
                let users = data.users.map(user => user.eid);
                
                $("#confirm").removeClass("wait");

                if (users.includes(eidValue)) {
                    $("#note").text("Access Granted!").addClass("good");
                    localStorage.setItem("session", eidValue); // Save session
                    setTimeout(() => window.location.href = "dashboard.html", 1000);
                } else {
                    $("#note").text("Access Denied!").addClass("bad");
                    setTimeout(() => {
                        $("#note").removeClass("bad");
                        $("#eid").prop("disabled", false);
                    }, 1000);
                }
            });
    });
});
