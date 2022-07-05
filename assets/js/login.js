function toggleDomainEntry(value) {
  let domainEntry = document.getElementById("domain-entry")

  if (value === 'other') {
    domainEntry.classList.add("active")
    return
  }

  domainEntry.classList.remove("active")

}