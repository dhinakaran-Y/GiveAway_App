const tbodyEl = document.querySelector("tbody");

if (userObj) {
  const fragment = document.createDocumentFragment();

  db.collection(COLLECTION_NAME)
    .get()
    .then((querySnapshot) => {
      let serialNumber = 1;
      querySnapshot.forEach((doc) => {
        const record = doc.data();
        //console.log(record.fullName);

        const tr = document.createElement("tr");
        const serialNo = document.createElement("td");
        serialNo.classList.add("p-2", "border");
        serialNo.textContent = serialNumber;
        serialNumber++;

        const name = document.createElement("td");
        name.classList.add("p-2", "border");
        name.textContent = record.fullName;

        const communication = document.createElement("td");
        communication.classList.add("p-2", "border");
        communication.textContent = record.email;

        const skills = document.createElement("td");
        skills.classList.add("p-2", "border");
        skills.textContent = record.skillKnown;

        const studies = document.createElement("td");
        studies.classList.add("p-2", "border");
        studies.textContent = record.studies;

        const btnContainer = document.createElement("td");
        btnContainer.classList.add("p-2", "border", "space-x-2" , "space-y-1");
        //1-btn
        const viewBtn = document.createElement("button");
        viewBtn.textContent = "View";
        viewBtn.classList.add(
          "bg-indigo-500",
          "hover:bg-indigo-600",
          "px-4",
          "py-1",
          "rounded",
          "text-white"
        );
        //2-btn
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add(
          "bg-red-500",
          "hover:bg-red-600",
          "px-4",
          "py-1",
          "rounded",
          "text-white"
        );
        //add btns
        btnContainer.append(viewBtn, deleteBtn)


        tr.append(serialNo, name, communication, skills, studies, btnContainer);
        fragment.append(tr);
      });
      tbodyEl.append(fragment);
    });
}
