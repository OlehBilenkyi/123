// main.js

document
  .getElementById("job-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const allInputs = document.querySelectorAll(
      "input[required], select[required], textarea[required]"
    );
    let allFilled = true;

    allInputs.forEach((input) => {
      if (!input.value) {
        allFilled = false;
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });

    const action = event.submitter.id;

    if (allFilled) {
      alert(
        `${
          action === "create-job" ? "Job created" : "Info saved"
        } successfully!`
      );
    } else {
      alert("Please fill out all required fields.");
    }
  });
