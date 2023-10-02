const currentDateElement = document.getElementById("current-date");
const markAttendanceButton = document.getElementById("mark-attendance");
const confirmationMessageElement = document.getElementById("confirmation-message");

markAttendanceButton.addEventListener("click", () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  currentDateElement.textContent = formattedDate;

  confirmationMessageElement.textContent = "Attendance marked successfully!";
  confirmationMessageElement.classList.add("success-message"); // Apply the success message style

  setTimeout(() => {
    confirmationMessageElement.textContent = "Thanks, You Are Present In the Class.";
    confirmationMessageElement.classList.remove("success-message"); // Remove the success message style
  }, 3000);
});
