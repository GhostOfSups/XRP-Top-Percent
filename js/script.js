document.getElementById('xrpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const xrpAmount = parseFloat(document.getElementById('xrpAmount').value);
    const resultDiv = document.getElementById('result');
    if (isNaN(xrpAmount) || xrpAmount < 0) {
        resultDiv.innerHTML = 'Please enter a valid XRP amount.';
        return;
    }
    console.log('Input XRP:', xrpAmount); // Debug input
    const percentile = calculatePercentile(xrpAmount);
    resultDiv.innerHTML = `Your ${xrpAmount} XRP places you in the top <strong>${percentile.toFixed(2)}%</strong> of XRP holders.`;
});

function calculatePercentile(xrpAmount) {
    let totalHolders = xrpDistribution.reduce((sum, bin) => sum + bin.holders, 0);
    let holdersBelow = 0;

    for (let bin of xrpDistribution) {
        if (xrpAmount < bin.minXRP) {
            break;
        }
        holdersBelow += bin.holders;
    }

    console.log('Holders below:', holdersBelow, 'Total:', totalHolders); // Debug calculation
    return 100 * (1 - holdersBelow / totalHolders);
}
