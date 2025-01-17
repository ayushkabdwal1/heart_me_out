
function submitCounselorSelection() {
    const counselorType = document.getElementById("counselorType").value;
    alert(`You have selected: ${counselorType}`);
    // Redirect to the next page (nextpage.html)
    window.location.href = 'login.html';
}