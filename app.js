// app.js - simple behaviors for delete confirmation & client-side form validation

document.addEventListener('DOMContentLoaded', function () {
  // Delete buttons (in list)
  document.querySelectorAll('.btn-delete').forEach(function (btn) {
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      const id = this.getAttribute('data-id');
      if (!id) return;
      if (confirm('Are you sure you want to delete this student?')) {
        // redirect to server delete endpoint
        window.location.href = `/students/delete/${id}`;
      }
    });
  });

  // Client-side bootstrap validation for form
  const form = document.getElementById('studentForm');
  if (form) {
    form.addEventListener('submit', function (evt) {
      if (!form.checkValidity()) {
        evt.preventDefault();
        evt.stopPropagation();
        // show custom invalid styles
        Array.from(form.elements).forEach(el => {
          if (el.checkValidity && !el.checkValidity()) el.classList.add('is-invalid');
          else el.classList.remove('is-invalid');
        });
      }
    }, false);
  }
});
