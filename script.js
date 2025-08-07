// Modal functions
function showAnalysisForm() {
    document.getElementById('analysisForm').style.display = 'block';
}

function hideAnalysisForm() {
    document.getElementById('analysisForm').style.display = 'none';
}

function showConsultation() {
    // For now, just show an alert - we'll integrate Calendly later
    alert('Consultation booking coming soon! Email hello@rootsystemos.com to schedule.');
}

// Form submission
document.getElementById('treeAnalysisForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const description = formData.get('description');
    
    // Show success message
    alert('Thank you ' + name + '! We\'ll analyze your tree photos and send results to ' + email + ' within 24 hours.');
    
    // Hide form
    hideAnalysisForm();
    
    // Reset form
    this.reset();
    
    // Here you would normally send the data to your backend
    console.log('Form submitted:', { name, email, description });
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('analysisForm');
    if (event.target == modal) {
        hideAnalysisForm();
    }
}
