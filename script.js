function calculatePay() {
  const mileage = parseFloat(document.getElementById("mileage").value);
  if (isNaN(mileage) || mileage < 0) {
    document.getElementById("result").innerHTML =
      "Please enter a valid mileage.";
    return;
  }

  let totalRate = 0;

  if (mileage <= 15) {
    totalRate = 41.50;
  } else if (mileage <= 25) {
    totalRate = 41.50 + (mileage - 15) * 1.8;
  } else {
    totalRate = 41.50 + 10 * 1.8 + (mileage - 25) * 1.8;
  }

  const ownerShare = totalRate * 0.13;
  const driverShare = totalRate * 0.87;

  document.getElementById("result").innerHTML = `
      <p><strong>Total Rate:</strong> $${totalRate.toFixed(2)}</p>
      <p><strong>Owner's Share (13%):</strong> $${ownerShare.toFixed(2)}</p>
      <p><strong>Driver's Share (87%):</strong> $${driverShare.toFixed(2)}</p>
    `;
}
