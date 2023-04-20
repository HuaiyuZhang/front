document.getElementById('submitBtn').addEventListener('click', generateSummary);

function exportToPDF() {
    const summaryElement = document.getElementById('summary');
    const pdf = new jsPDF();
  
    pdf.text(summaryElement.innerText, 10, 10);
    pdf.save('summary.pdf');
  }
  

function generateSummary() {
  const question1 = document.getElementById('question1').value;
  const question2 = document.getElementById('question2').value;
  // Get values for any additional questions you've added

  const summaryElement = document.getElementById('summary');
  const summarySection = document.getElementById('summarySection');

  let summaryText = `Question 1: ${question1}<br>Question 2: ${question2}<br>`;
  // Add the text for any additional questions you've added

  summaryElement.innerHTML = summaryText;
  summarySection.style.display = 'block';
}
