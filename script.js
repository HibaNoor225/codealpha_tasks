document.getElementById('ageForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const dobInput = document.getElementById('dob').value;
  const result = document.getElementById('result');

  if (!dobInput) {
    result.textContent = 'Please enter a valid date.';
    return;
  }

  const birthDate = new Date(dobInput);
  const today = new Date();

  if (birthDate > today) {
    result.textContent = 'Date of birth cannot be in the future.';
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.`;
});
