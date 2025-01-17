function submitClientCounselingSelection() {
    const counselingType = document.getElementById("clientCounselingType").value;
    alert(`You have selected: ${counselingType}`);
    // Redirect to the next page (client-nextpage.html)
    window.location.href = 'login.html';
}
