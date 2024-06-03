// This is for the audio
function playMeditationAudio() {
   var audio = document.getElementById("meditation-audio");
     audio.play();
  }
  // This is for the journal
  const journalEntries = document.getElementById("journal-entries");
  const noEntries = document.getElementById("no-entries");
  const entryList = document.getElementById("entry-list");
  const addEntryButton = document.getElementById("add-entry");

  let entries = [];

  addEntryButton.addEventListener("click", () => {
    const entry = prompt("Enter your journal entry:");
    if (entry) {
      entries.push(entry);
      renderEntries();
    }
  });

  function renderEntries() {
    entryList.innerHTML = "";
    entries.forEach((entry, index) => {
      const entryElement = document.createElement("li");
      entryElement.textContent = entry;
      entryList.appendChild(entryElement);
    });
    if (entries.length > 0) {
      noEntries.style.display = "none";
    } else {
      noEntries.style.display = "block";
    }
  }

  renderEntries();

