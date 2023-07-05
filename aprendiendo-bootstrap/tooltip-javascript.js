const tooltipTrigger = document.querySelectorAll('[data-bs-toggle="Tooltip"]');
const tooltipContent = [...tooltipTrigger].map(tooltipEl => new bootstrap.Tooltip(tooltipEl));

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

const popover = new bootstrap.Popover('.popover-dismiss', {
    trigger: 'focus'
  })